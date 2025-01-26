"use server";

import { findUser } from "../user/queries";
import { getUser } from "../user/user";

export const getProfilePosts = async () => {
  const clerkUser = await getUser();
  try {
    const user = await findUser(clerkUser.id);
    const res = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${user?.integrations[0].token}`
    );
    const posts = await res.json();
    if (posts) {
      return { status: 200, success: true, message: "Success", data: posts };
    }
    return {
      status: 404,
      success: false,
      message: "Something went wrong unable to fetch posts",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};
