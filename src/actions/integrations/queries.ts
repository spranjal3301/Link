"use server";

import { db } from "@/lib/prisma";

export const updateIntegration = async (
  id: string,
  token: string,
  expiresAt: Date
) => {
  return await db.integrations.update({
    where: {
      id,
    },
    data: {
      token,
      expiresAt,
    },
  });
};

export const getInstaIntegration = async (clerkId: string) => {
  return await db.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      integrations: {
        where: {
          name: "INSTAGRAM",
        },
      },
    },
  });
};

export const createIntegration = async (
  clerkId: string,
  token: string,
  expire: Date,
  igId?: string
) => {
  return await db.user.update({
    where:{
      clerkId
    },
    data: {
      integrations: {
        create: {
          token,
          expiresAt: expire,
          platformId: igId,
        },
      },
    },
    select: {
      firstname: true,
      lastname: true,
    },
  })
};
