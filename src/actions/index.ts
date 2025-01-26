"use server";
import { getUser } from "./user/user";

//-WIP
export const queryDb = async (dbQueryFn:Function) => {
  await getUser();
  try {
    const newTrigger = await dbQueryFn();
    if (newTrigger)
      return {
        status: 200,
        success: true,
        message: "Trigger created",
        data: newTrigger,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't save Trigger",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};
