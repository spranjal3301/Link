"use server";
// - User table DB queries

import { db } from "@/lib/prisma";

export type FindUserType = {
  id: string;
  clerkId: string;
  email: string | null;
  phone: string | null;
  firstname: string | null;
  lastname: string | null;
  createdAt: Date;
  subscription: {
    id: string;
    plan: "FREE" | "PRO";
    createdAt: Date;
    updatedAt: Date;
    customerId: string | null;
    UserId: string;
  } | null;
  integrations: {
    id: string;
    token: string;
    expiresAt: Date | null;
    name: "INSTAGRAM" | "X" | "LINKEDIN" | "WHATSAPP";
  }[];
};

export const findUser = async (clerkId: string) => {
  return await db.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
};

export const createUser = async (
  clerkId: string,
  firstname: string,
  lastname: string,
  email: string
) => {
  return db.user.create({
    data:{
      clerkId,
      firstname,
      lastname,
      email,
      subscription:{
        create: {}
      }
    },
    select:{
      firstname:true,
      lastname:true,
    }
  })
};
