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

