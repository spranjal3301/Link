"use server";

import { FindUserType } from "../user/queries";
import { refreshToken } from "@/lib/refresh-token";
import { updateIntegration } from "./queries";



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
