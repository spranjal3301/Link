"use server";

import { db } from "@/lib/prisma";

export const matchKeyword = async (keyword: string) => {
  return await db.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: "insensitive",
      },
      Automation:{
        active:true
      }
    },
  });
};

export const getKeywordAutomation = async (
  automationId: string,
  dm: boolean
) => {
  return await db.automation.findUnique({
    where: {
      id: automationId,
      active:true, //?change
    },

    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? "DM" : "COMMENT",
        },
      },
      listener: true,
      User: {
        select: {
          subscription: {
            select: {
              plan: true,
            },
          },
          integrations: {
            select: {
              token: true,
            },
          },
        },
      },
    },
  });
};

export const trackResponses = async (
  automationId: string,
  type: "COMMENT" | "DM"
) => {
  if (type === "COMMENT") {
    return await db.listener.update({
      where: { automationId },
      data: {
        commentCount: {
          increment: 1,
        },
      },
    });
  }

  if (type === "DM") {
    return await db.listener.update({
      where: { automationId },
      data: {
        dmCount: {
          increment: 1,
        },
      },
    });
  }
};

export const createChatHistory = (
  automationId: string,
  sender: string,
  reciever: string,
  message: string
) => {
  return db.automation.update({
    where: {
      id: automationId,
    },
    data: {
      dms: {
        create: {
          reciever,
          senderId: sender,
          message,
        },
      },
    },
  })
}

export const getKeywordPost = async (postId: string, automationId: string) => {
  return await db.post.findFirst({
    where: {
      AND: [{ postid: postId }, { automationId }],
    },
    select: { automationId: true },
  })
}

export const getChatHistory = async (sender: string, reciever: string) => {
  const history = await db.dms.findMany({
    where: {
      AND: [{ senderId: sender }, { reciever }],
    },
    orderBy: { createdAt: 'asc' },
  })
  const chatSession: {
    role: 'assistant' | 'user'
    content: string
  }[] = history.map((chat) => {
    return {
      role: chat.reciever ? 'assistant' : 'user',
      content: chat.message!,
    }
  })

  return {
    history: chatSession,
    automationId: history[history.length - 1].automationId,
  }
}



export const createChatTransaction = async (
  automationId: string,
  entry: any,
  message: string,
  response: string
) => {
  const receiverPromise = createChatHistory(automationId, entry.id, entry.senderId, message);
  const senderPromise = createChatHistory(automationId, entry.id, entry.senderId, response);
  return await db.$transaction([receiverPromise, senderPromise]);
}
