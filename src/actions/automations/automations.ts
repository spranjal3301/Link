"use server";

import { getUser } from "../user/user";
import {
  createAutomationQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const getAllAutomations = async () => {
  const clerkUser = await getUser();
  try {
    const userDetails = await getAutomations(clerkUser.id);
    if (userDetails)
      return {
        status: 200,
        data: userDetails.automations,
        success: true,
      };

    return {
      status: 404,
      data: [],
      success: false,
    };
  } catch (error) {
    return {
      status: 500,
      success: false,
      error,
    };
  }
};

export const createAutomation = async (automationId?: string) => {
  const clerkUser = await getUser();
  try {
    const newAutomation = await createAutomationQuery(
      clerkUser.id,
      automationId
    );
    if (newAutomation)
      return {
        status: 200,
        success: true,
        message: "Automation created",
        data: newAutomation,
      };

    return {
      status: 404,
      success: false,
      message: "Oops! something went wrong",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const getAutomationInfo = async (automationId: string) => {
  const clerkUser = await getUser();
  try {
    const automationInfo = await findAutomation(automationId);
    if (automationInfo)
      return {
        status: 200,
        success: true,
        message: "",
        data: automationInfo,
      };

    return {
      status: 404,
      success: false,
      message: "Invaild automation ID",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: { name?: string; active?: boolean }
) => {
  await getUser();
  try {
    const update = await updateAutomation(automationId,data);
    if (update)
      return {
        status: 200,
        success: true,
        message: "Automation successfully updated",
        data: update,
      };

    return {
      status: 404,
      success: false,
      message: "Invaild automation Detail",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};
