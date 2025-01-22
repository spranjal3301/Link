"use server";

import { db } from "@/lib/prisma";

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
