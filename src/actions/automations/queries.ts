"use server";

import { db } from "@/lib/prisma";
import { Tlistener, Tpost } from "@/types";

export const createAutomationQuery = async (
  clerkId: string,
  automationId?: string
) => {
  return await db.user.update({
    where: {
      clerkId,
    },
    data: {
      automations: {
        create: {
          ...(automationId && { id: automationId }),
        },
      },
    },
  });
};

export const getAutomations = async (clerkId: string) => {
  return await db.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  });
};

export const findAutomation = async (automationId: string) => {
  return await db.automation.findUnique({
    where: {
      id: automationId,
    },
    include: {
      keywords: true,
      trigger: true,
      posts: true,
      listener: true,
      User: {
        select: {
          subscription: true,
          integrations: true,
        },
      },
    },
  });
};

export const updateAutomation = async (
  automationId: string,
  updateData: { name?: string; active?: boolean }
) => {
  return await db.automation.update({
    where: { id: automationId },
    data: {
      name: updateData.name,
      active: updateData.active,
    },
  });
};

export const deleteAutomationQuery = async (
  automationId: string
) => {
  return await db.automation.delete({
    where: { id: automationId }
  });
};

export const addListenerQuery = async (
  automationId: string,
  listener: Tlistener,
  prompt: string,
  reply?: string
) => {
  return await db.automation.update({
    where: {
      id: automationId,
    },
    data: {
      listener: {
        create: {
          listener,
          prompt,
          commentReply: reply,
        },
      },
    },
  });
};

export const addTriggerQuery = async (
  automationId: string,
  triggers: string[]
) => {
  //* DM & COMMENTS
  if (triggers.length == 2) {
    return await db.automation.update({
      where: {
        id: automationId,
      },
      data: {
        trigger: {
          createMany: {
            data: [{ type: triggers[0] }, { type: triggers[1] }],
          },
        },
      },
    });
  }
  return await db.automation.update({
    where: {
      id: automationId,
    },
    data: {
      trigger: {
        create: {
          type: triggers[0],
        },
      },
    },
  });
};

export const addKeywordQuery = async (automationId: string, word: string, clerkId: string) => {
  return await db.automation.update({
    where: {
      id: automationId,
    },
    data: {
      keywords: {
        create: {
          word,
          clerkId
        },
      },
    },
  });
};

export const deleteKeywordQuery = async (id: string) => {
  return db.keyword.delete({
    where: { id },
  });
};

export const addPostsQuery = async (automationId: string, posts: Tpost[]) => {
  return db.automation.update({
    where:{id:automationId},
    data:{
      posts:{
        createMany:{
          data:posts
        }
      }
    }
  })
}

