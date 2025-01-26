"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { updateInstagramSession } from "../integrations";

//-Auth middleware
export const getUser = async () => {
  const user = await currentUser();
  if (!user)
    return redirect(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const clerkUser = await getUser();
  try {
    const user = await findUser(clerkUser.id);
    if (user) {
      updateInstagramSession(user);

      return {
        status: 200,
        data: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
      };
    }

    const newUser = await createUser(
      clerkUser.id,
      clerkUser.firstName!,
      clerkUser.lastName!,
      clerkUser.emailAddresses[0].emailAddress
    );

    return {
      status: 201,
      data: newUser,
    };
  } catch (error) {
    console.log("error in onBoard user", error);
    return {
      status: 500,
      error,
    };
  }
};

export const getUserInfo = async () => {
  const clerkUser = await getUser();
  try {
    const profile = await findUser(clerkUser.id);
    if (profile) return { status: 200, data: profile };

    return { status: 404 };
  } catch (error) { 
    return { status: 500, error };
  }
};
