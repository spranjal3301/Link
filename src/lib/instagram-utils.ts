import axios from "axios";

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
  reaction?:string
) => {
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v22.0/${userId}/messages`,
    {
      "recipient": {"id": recieverId},
      "sender_action": "react",
      "payload": {
        "message_id": MessageId,
        "reaction": "love"
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


export const commentReply = async (
  commentId: string,
  _token?: string,
) => {
  const token = "IGAAQbT9zn7pNBZAE84WklXS0ZAya3diamRRdmdOanFhUUN4ZAXNZAR29TajNlUnQ2anc5bDFTWTdIc3NLVTJQZAy1TYzVUTUQ0cnUyWm1tVkxPVFQ3UW95RE9PUHQwMGVwOUV6SjF2VEJHOWVUdHVzalB2TE1pUlUyenJiMWJzYXRENAZDZD";
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v22.0/${commentId}/replies`,
    {
      "message":"Thanks for sharing!"
    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
