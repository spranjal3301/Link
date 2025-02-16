import { matchUserKeyword } from "@/actions/instagram/queries";
import {
  handleKeywordMatch,
  handleOngoingAiChat,
  handleReelReaction,
} from "@/lib/instagram-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const hub = req.nextUrl.searchParams.get("hub.challenge");
  return new NextResponse(hub);
}

export async function POST(req: NextRequest) {
  try {
    const webhookPayload = await req.json();
    const [entry] = webhookPayload.entry; //- webhook_payload.entry[0]
    const { messaging, changes } = entry;
    const instagramId = entry?.id;

    const eventType = messaging
      ? "message"
      : changes?.[0]?.field === "comments"
      ? "comment"
      : null;
    const userText = messaging?.[0]?.message?.text ?? changes?.[0]?.value?.text;
    console.log("userText", userText);

    const isReel =
      messaging?.[0]?.message?.attachments?.[0]?.type === "ig_reel";
    console.log("isReel", isReel);

    if (isReel) {
      console.log("Reel Reaction");

      const MessageId = messaging?.[0]?.message?.mid;
      return createResponse("Reel Reaction ❤️", 200);
      handleReelReaction(instagramId, messaging[0].sender.id, MessageId);
    }

    if (!userText || !instagramId)
      return createResponse("userText undefind", 200);

    console.log("webhookPayload", webhookPayload);
    console.log("instagramId", entry);
    console.log(messaging?.[0]?.message);
    console.log("eventType", eventType);
    console.log("userText", userText);

    const matcher = await matchUserKeyword(instagramId, userText);

    if (matcher && matcher?.automationId && eventType) {
      const isSelfReply =
        eventType == "message"
          ? entry.id == messaging?.[0]?.sender?.id
          : entry.id == changes?.[0]?.value?.id;

      console.log(isSelfReply);

      if (isSelfReply) return createResponse("Self Reply Event", 200);
      console.log("message", messaging?.[0]);
      await handleKeywordMatch(
        matcher.automationId,
        eventType,
        userText,
        messaging,
        changes,
        entry
      );
    }

    if (!matcher && eventType === "message") {
      await handleOngoingAiChat(messaging, entry);
    }

    return createResponse("Success", 200);
  } catch (error) {
    console.log("Error while webhook⚠️❌🚨⛔", error);
    return createResponse("Error while webhook", 200);
  }
}

const createResponse = (message: string, status: number) =>
  NextResponse.json({ message }, { status: 200 });
