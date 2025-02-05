import { findAutomation } from "@/actions/automations/queries";
import {
  createChatHistory,
  getChatHistory,
  getKeywordAutomation,
  matchKeyword,
  trackResponses,
  createChatTransaction,
  getKeywordPost,
} from "@/actions/instagram/queries";
import { openai, createAIChatCompletion } from "@/lib/ai";
import { sendDM, sendPrivateMessage } from "@/lib/instagram-utils";
import { db } from "@/lib/prisma";
import { Ttrigger } from "@/types";
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

    const eventType = messaging
      ? "message"
      : changes?.[0]?.field === "comments"
      ? "comment"
      : null;
    const userText = messaging?.[0]?.message?.text ?? changes?.[0]?.value?.text;

    const matcher = userText ? await matchKeyword(userText) : null;

    
    console.log("webhookPayload",webhookPayload);
    console.log(entry);
    console.log(messaging?.[0]?.message);
    console.log("eventType",eventType);
    console.log("userText",userText);


    if(!userText)return createResponse("userText undefind",200);
    
    //` If keyword match exits for DM or Comments
    if (matcher?.automationId) {
      console.log("matched automationId", matcher?.automationId);

      const automation = await getKeywordAutomation(
        matcher.automationId,
        eventType === "message"
      );

      if (automation?.trigger && automation?.listener) {
        const { listener } = automation;
        const isPro = automation.User?.subscription?.plan === "PRO";
        console.log("listener", listener);

        const handleResponse = async (
          content: string,
          type: Ttrigger
        ) => {
          if (type === "COMMENT") {
            const automations_post = await getKeywordPost(
              changes[0].value.media.id,
              automation?.id
            );
            if (!automations_post) return createResponse("Message sent", 200);
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
            return createResponse("Message sent", 200);
          }
        };

        if (listener.listener === "MESSAGE") {
          return handleResponse(
            listener.prompt!,
            eventType === "message" ? "DM" : "COMMENT"
          );
        }

        if (listener.listener === "SMARTAI" && isPro) {
          console.log("SMARTAI is in action");
          const aiResponse = await createAIChatCompletion(listener.prompt!);
          console.log("aiResponse",aiResponse);
          const aiContent = aiResponse.choices[0].message.content;
          
          console.log("aiContent",aiContent);
          

          if (aiContent) {
            const senderId =
              eventType === "message"
                ? messaging[0].sender.id
                : changes[0].value.from.id;

                try {
                  console.log(automation.id,entry.id, senderId, userText);
                  

                  createChatTransaction(
                    automation.id,
                    entry.id,senderId,
                    userText!,
                    aiContent
                  );
                } catch (error) {
                  console.log("createChatTransaction failed error",error)
                }
           

            return handleResponse(
              aiContent,
              eventType === "message" ? "DM" : "COMMENT"
            );
          }
        }
      }
    }

    //`If keyword not match
    if (!matcher && eventType === "message") {
      const [message] = messaging!;
      if(!messaging || !message )return createResponse("message is undefinded", 200);
      console.log("not matcher message",message);

      const history = await getChatHistory(
        message.recipient.id,
        message.sender.id
      );

      if(!history || !history.history || !history?.automationId){
        return createResponse("this is reply message | automationId not found", 200);
      }

      if (history.history.length > 0) {
        const automation = await findAutomation(history.automationId);
        if (
          automation?.listener?.listener === "SMARTAI" &&
          automation.User?.subscription?.plan === "PRO"
        ) {
          console.log("SMARTAI + PRO");
          

          const aiResponse = await createAIChatCompletion(
            automation.listener.prompt!,
            [
              ...history.history,
              { role: "user", content: message.message.text },
            ]
          );

          // ... rest of handling
          const aiContent = aiResponse.choices[0].message.content;
          console.log("aiContent;",aiContent);
          
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
              return createResponse("Message sent", 200);
            }
          }
        }
      }
    }

    return NextResponse.json({ message: "No automation set" }, { status: 200 });
  } catch (error) {
    console.log("⚠️❌🚨⛔", error);
    return NextResponse.json({ message: "No automation set" }, { status: 200 });
  }
}


const createResponse = (message: string, status: number) =>
  NextResponse.json({ message }, { status: 200 });




/*
~ DM --> DM

~ COMMENT --> DM
- COMMENT --> COMMENT_REPLY
- COMMENT --> DM_COMMENT_REPLY

- REEL --> REEL_REACTION 

Comment or (comment DM both)
  send Dm(not smart ai)
    comment reply

onReel send only
  choice reel reaction 
    reel reaction

*/