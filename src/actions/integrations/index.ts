"use server";

import { FindUserType } from "../user/queries";
import { refreshToken } from "@/lib/refresh-token";
import { createIntegration, getInstaIntegration, updateIntegration } from "./queries";
import { TintegrationStrategy } from "@/types";
import { redirect } from "next/navigation";
import { getUser } from "../user/user";
import axios from "axios";
import { generateTokens } from "@/lib/instagram-utils";

export const updateInstagramSession = async (user: FindUserType) => {
  if (user.integrations.length > 0) {
    //- assumption : Only Instagram integrations is there (integrations[0].name = Instagram)
    const today = new Date();
    const time_left =
      user.integrations[0]?.expiresAt?.getTime()! - today.getTime();
    const days = Math.round(time_left / (1000 * 3600 * 24)); //? milliSec to Days

    //- 60 day session if < 5 then refresh
    if (days < 5) {
      console.log("refresh");
      const refresh = await refreshToken(user.integrations[0].token);

      const today = new Date();
      const session_days = 60;
      const expire_time = today.setDate(today.getDate() + session_days);
      const expiresAt = new Date(expire_time);

      const update_token = await updateIntegration(
        user.integrations[0].id,
        refresh.access_token,
        expiresAt
      );

      if (!update_token) {
        console.log("update sessions failed");
      }
    }
  }
};

export const onIntegrationOauth = async (strategy: TintegrationStrategy) => {
  if (strategy == "INSTAGRAM") {
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string);
  }
};

export const onInstaIntegrate = async (code:string) => {
  const clerkUser = await getUser();
  try {
    const instaIntegration = await getInstaIntegration(clerkUser.id);

    if(instaIntegration && instaIntegration.integrations.length==0){
      const token = await generateTokens(code);

      if (token) {
        const insta_id = await axios.get(
          `${process.env.INSTAGRAM_BASE_URL}/me?fields=user_id&access_token=${token.access_token}`
        )
        const today = new Date()
        const expire_date = today.setDate(today.getDate() + 60)
        const create = await createIntegration(
          clerkUser.id,
          token.access_token,
          new Date(expire_date),
          insta_id.data.user_id
        )
        return { status: 200, data: create }
      }
      console.log('🔴 401')
      return { status: 401 }
    }

    console.log('🔴 404')
    return { status: 404 }
  } catch (error) {
    console.log('🔴 500',error)
    return { status: 500 }
  }
};
