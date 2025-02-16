"use server";

import { Tlistener, Tpost } from "@/types";
import { getUser } from "../user/user";
import {
  addKeywordQuery,
  addListenerQuery,
  addPostsQuery,
  addTriggerQuery,
  createAutomationQuery,
  deleteKeywordQuery,
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
    const update = await updateAutomation(automationId, data);
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

export const saveListener = async (
  automationId: string,
  listener: Tlistener,
  prompt: string,
  reply?: string
) => {
  await getUser();
  try {
    const newListener = await addListenerQuery(
      automationId,
      listener,
      prompt,
      reply
    );
    if (newListener)
      return {
        status: 200,
        success: true,
        message: "Listener created",
        data: newListener,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't save listener",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const saveTrigger = async (automationId: string, triggers: string[]) => {
  await getUser();
  try {
    const newTrigger = await addTriggerQuery(automationId, triggers);
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

export const saveKeyword = async (automationId: string, keyword: string) => {
  const clerkUser = await getUser();
  try {
    const newKeyword = await addKeywordQuery(automationId, keyword,clerkUser.id);
    if (newKeyword)
      return {
        status: 200,
        success: true,
        message: "Keyword added",
        data: newKeyword,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't save Keyword",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const deleteKeyword = async (id: string) => {
  await getUser();
  try {
    const res = await deleteKeywordQuery(id); //? get id from automationInfo
    if (res)
      return {
        status: 200,
        success: true,
        message: "Keyword remove",
        data: res,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't remove Keyword",
    };
  } catch (error) {
    console.log(error);

    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const savePosts = async (automationId: string, posts: Tpost[]) => {
  await getUser();
  try {
    const newPosts = await addPostsQuery(automationId, posts);
    if (newPosts)
      return {
        status: 200,
        success: true,
        message: "Posts saved successfull",
        data: newPosts,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't save Posts",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  await getUser();
  try {
    const update = await updateAutomation(id, { active: state });
    if (update)
      return {
        status: 200,
        success: true,
        message: `automation ${state ? "activated" : "disabled"}`,
        data: update,
      };

    return {
      status: 404,
      success: false,
      message: "Something went wrong Can't save automation",
    };
  } catch (error) {
    return { status: 500, success: false, message: "Internal server error" };
  }
};
