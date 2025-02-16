import {
  createChatTransaction,
  getChatHistory,
  getKeywordAutomation,
  getKeywordPost,
  trackResponses,
} from "@/actions/instagram/queries";
import axios from "axios";
import { createAIChatCompletion } from "./ai";
import { findAutomation } from "@/actions/automations/queries";

export const sendDM = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log("sending message sendDM function ");
  //- maybe v22.0
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
    {
      recipient: {
        id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const sendPrivateMessage = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log("sending message");
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/${userId}/messages`,
    {
      recipient: {
        comment_id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const generateTokens = async (code: string) => {
  const insta_form = new FormData();
  insta_form.append("client_id", process.env.INSTAGRAM_CLIENT_ID as string);

  insta_form.append(
    "client_secret",
    process.env.INSTAGRAM_CLIENT_SECRET as string
  );
  insta_form.append("grant_type", "authorization_code");
  insta_form.append(
    "redirect_uri",
    `${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram`
  );
  insta_form.append("code", code);

  const shortTokenRes = await fetch(process.env.INSTAGRAM_TOKEN_URL as string, {
    method: "POST",
    body: insta_form,
  });

  const token = await shortTokenRes.json();
  if (token.permissions.length > 0) {
    console.log(token, "got permissions");
    console.log("long token function");

    const long_token = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${token.access_token}`
    );

    const long_token_data = await long_token.json();
    console.log(long_token_data);

    return long_token_data;
  }
};

export const messageReaction = async (
  userId: string,
  recieverId: string,
  MessageId: string,
  token: string,
  reaction?: string
) => {
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v22.0/${userId}/messages`,
    {
      recipient: { id: recieverId },
      sender_action: "react",
      payload: {
        message_id: MessageId,
        reaction: "love",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const sendCommentReply = async (
  commentId: string,
  token: string,
  message: string
) => {
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v22.0/${commentId}/replies`,
    {
      message: message,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const handleReelReaction = async (
  userId: string,
  recieverId: string,
  MessageId: string,
  reaction?: string
) => {
  const token = "";
  //-WIP: check if real reaction is in listern and get token
  return true;
  // return await messageReaction(entry.id,messaging[0].sender.id,MessageId,token);
};

export const handleKeywordMatch = async (
  automationId: string,
  eventType: "message" | "comment",
  userText: string,
  messaging: any,
  changes: any,
  entry: any
) => {
  console.log("matched automationId");

  const automation = await getKeywordAutomation(
    automationId,
    eventType === "message"
  );

  if (!automation?.trigger || !automation?.listener) {
    return null;
  }

  const { listener } = automation;
  const isPro = automation.User?.subscription?.plan === "PRO";
  console.log("listener", listener);

  const handleResponse = async (
    content: string,
    type: "COMMENT" | "DM",
    commentReply?: string | null,
  ) => {
    if (type === "COMMENT") {
      const automations_post = await getKeywordPost(
        changes[0].value.media.id,
        automation?.id
      );
      if (!automations_post) return false;

      const commentId = changes?.[0]?.value?.id;
      if (commentId && commentReply) {
        await sendCommentReply(
          commentId,
          automation.User?.integrations[0].token!,
          commentReply
        );
      }
    }

    const response =
      type === "DM"
        ? await sendDM(
            entry.id,
            messaging[0].sender.id,
            content,
            automation.User?.integrations[0].token!
          )
        : await sendPrivateMessage(
            entry.id,
            changes[0].value.id,
            content,
            automation.User?.integrations[0].token!
          );

    console.log("Send Dm response");

    if (response.status === 200) {
      await trackResponses(automation.id, type);
      return true;
    }
  };

  if (listener.listener === "MESSAGE") {
    return handleResponse(
      listener.prompt!,
      eventType === "message" ? "DM" : "COMMENT",
      listener.commentReply
    );
  }

  if (listener.listener === "SMARTAI" && isPro) {
    console.log("SMARTAI is in action");
    const aiResponse = await createAIChatCompletion(listener.prompt!);
    console.log("aiResponse", aiResponse);
    const aiContent = aiResponse.choices[0].message.content;

    console.log("aiContent", aiContent);

    if (aiContent) {
      const senderId =
        eventType === "message"
          ? messaging[0].sender.id
          : changes[0].value.from.id;

      try {
        console.log(automation.id, entry.id, senderId, userText);
        createChatTransaction(
          automation.id,
          entry.id,
          senderId,
          userText!,
          aiContent
        );
      } catch (error) {
        console.log("createChatTransaction failed error", error);
      }

      return handleResponse(
        aiContent,
        eventType === "message" ? "DM" : "COMMENT"
      );
    }
  }
};

export const handleOngoingAiChat = async (messaging: any, entry: any) => {
  const [message] = messaging!;
  if (!messaging || !message) return null;
  console.log("not matcher message", message);

  const history = await getChatHistory(message.recipient.id, message.sender.id);

  if (
    !history ||
    !history.history ||
    !history?.automationId ||
    history.history.length == 0
  ) {
    //- this is reply message | automationId not found
    return null;
  }

  const automation = await findAutomation(history.automationId);
  if (
    automation?.listener?.listener === "SMARTAI" &&
    automation.User?.subscription?.plan === "PRO"
  ) {
    console.log("SMARTAI + PRO");

    const aiResponse = await createAIChatCompletion(
      automation.listener.prompt!,
      [...history.history, { role: "user", content: message.message.text }]
    );

    // ... rest of handling
    const aiContent = aiResponse.choices[0].message.content;
    console.log("aiContent;", aiContent);

    if (aiContent) {
      // Unified chat history handling
      createChatTransaction(
        automation.id,
        entry.id,
        message.sender.id,
        message.message.text,
        aiContent
      );

      const response = await sendDM(
        entry.id,
        message.sender.id,
        aiContent,
        automation.User?.integrations[0].token!
      );

      if (response.status === 200) {
        await trackResponses(automation.id, "DM");
        return true;
      }
    }
  }
  return true;
};
