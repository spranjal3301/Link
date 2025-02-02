import { findAutomation } from "@/actions/automations/queries";
import {
  createChatHistory,
  getChatHistory,
  getKeywordAutomation,
  getKeywordPost,
  matchKeyword,
  trackResponses,
} from "@/actions/instagram/queries";
import { openai } from "@/lib/ai";
import { sendDM, sendPrivateMessage } from "@/lib/instagram-utils";
import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const hub = req.nextUrl.searchParams.get("hub.challenge");
  return new NextResponse(hub);
}

export async function POST(req: NextRequest) {
  const webhook_payload = await req.json();
  let matcher;
  try {
    //` DM keyword Match
    if (webhook_payload.entry[0].messaging) {
       console.log("DM keyword Match",webhook_payload.entry[0].messaging[0].message.text);
      matcher = await matchKeyword(
        webhook_payload.entry[0].messaging[0].message.text
      );
    }

    //` Comment keyword Matcher
    if (webhook_payload.entry[0].changes) {
      console.log("Comment keyword Matcher",webhook_payload.entry[0].changes[0].value.text);
      matcher = await matchKeyword(
        webhook_payload.entry[0].changes[0].value.text
      );
    }

    //- If keyword match found 
    if (matcher && matcher.automationId) {
      console.log("Matched");
      // We have a keyword matcher

      //~ If DM/message
      if (webhook_payload.entry[0].messaging) {
        //* get All details
        const automation = await getKeywordAutomation(
          matcher.automationId,
          true
        );

        //* If User set any trigger("DIRECT MESSAGE" | "SMART AI")
        if (automation && automation.trigger) {
          //* if DIRECT MESSAGE(DM)
          if (
            automation.listener &&
            automation.listener.listener === "MESSAGE"
          ) {
            //?Trigger :Send DM
            const direct_message = await sendDM(
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              automation.listener?.prompt,
              automation.User?.integrations[0].token!
            );

            //* If succuss track it
            if (direct_message.status === 200) {
              const tracked = await trackResponses(automation.id, "DM");
              if (tracked) {
                return NextResponse.json(
                  { message: "Message sent" },
                  { status: 200 }
                );
              }
            }
          }

          //* If User have Pro and listener is SMAERTAI
          if (
            automation.listener &&
            automation.listener.listener === "SMARTAI" &&
            automation.User?.subscription?.plan === "PRO"
          ) {
            const smart_ai_message = await openai.chat.completions.create({
              model: "gemini-1.5-flash",
              messages: [
                {
                  role: "assistant",
                  content: `${automation.listener?.prompt}: Keep responses under 2 sentences`,
                },
              ],
            });

            //* If AI have content createChatHistory for sender and reciever at same time
            if (smart_ai_message.choices[0].message.content) {
              const reciever = createChatHistory(
                automation.id,
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                webhook_payload.entry[0].messaging[0].message.text
              );

              const sender = createChatHistory(
                automation.id,
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                smart_ai_message.choices[0].message.content
              );

              await db.$transaction([reciever, sender]);

              //* Send Ai respones to User
              const direct_message = await sendDM(
                webhook_payload.entry[0].id, //* useeId
                webhook_payload.entry[0].messaging[0].sender.id, //* receiverId
                smart_ai_message.choices[0].message.content, //*content/message
                automation.User?.integrations[0].token! //* token
              );

              //* If success then track respones
              if (direct_message.status === 200) {
                const tracked = await trackResponses(automation.id, "DM");
                if (tracked) {
                  return NextResponse.json({ message: "Message sent" },{ status: 200 });
                }
              }
            }
          }
        }
      }

      //~ If Comments
      if (
        webhook_payload.entry[0].changes &&
        webhook_payload.entry[0].changes[0].field === "comments"
      ) {
        //*get automation infos
        const automation = await getKeywordAutomation(matcher.automationId,false);

        console.log("geting the automations");

        //* get Post for keyword
        const automations_post = await getKeywordPost(
          webhook_payload.entry[0].changes[0].value.media.id,
          automation?.id!
        );

        console.log("found keyword ", automations_post);

        //* If post have Trigger 
        if (automation && automations_post && automation.trigger) {
          console.log("first if");

          //* If Post have listener
          if (automation.listener) {
            console.log("first if");

            //* If listener is Message
            if (automation.listener.listener === "MESSAGE") {
              console.log(
                "SENDING DM, WEB HOOK PAYLOAD",
                webhook_payload,
                "changes",
                webhook_payload.entry[0].changes[0].value.from
              );

              console.log(
                "COMMENT VERSION:",
                webhook_payload.entry[0].changes[0].value.from.id
              );

              //! change
              const direct_message = await sendPrivateMessage(
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].changes[0].value.id,
                automation.listener?.prompt,
                automation.User?.integrations[0].token!
              );

              console.log("DM SENT", direct_message.data);
              if (direct_message.status === 200) {
                const tracked = await trackResponses(automation.id, "COMMENT");

                if (tracked) {
                  return NextResponse.json({message: "Message sent"},{ status: 200 });
                }
              }
            }

            //* If listener is SMARTAI and USER have PRO
            if (
              automation.listener.listener === "SMARTAI" &&
              automation.User?.subscription?.plan === "PRO"
            ) {
              const smart_ai_message = await openai.chat.completions.create({
                model: "gemini-1.5-flash",
                messages: [
                  {
                    role: "assistant",
                    content: `${automation.listener?.prompt}: keep responses under 2 sentences`,
                  },
                ],
              });
              if (smart_ai_message.choices[0].message.content) {
                const reciever = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.from.id,
                  webhook_payload.entry[0].changes[0].value.text
                );

                const sender = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.from.id,
                  smart_ai_message.choices[0].message.content
                );    

                await db.$transaction([reciever, sender]);

                //! change
                const direct_message = await sendPrivateMessage(
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.id,
                  automation.listener?.prompt,
                  automation.User?.integrations[0].token!
                );

                if (direct_message.status === 200) {
                  const tracked = await trackResponses(
                    automation.id,
                    "COMMENT"
                  );

                  if (tracked) {
                    return NextResponse.json({message: "Message sent",},{ status: 200 });
                  }
                }
              }
            }
          }
        }
      }
    }

    //- If not keyword match found (existing customer/onGoing conversation)
    if (!matcher) {
      const customer_history = await getChatHistory(
        webhook_payload.entry[0].messaging[0].recipient.id,
        webhook_payload.entry[0].messaging[0].sender.id
      )

      if (customer_history.history.length > 0) {
        const automation = await findAutomation(customer_history.automationId!)

        //*If listener is SMARTAI and USER have PRO
        if (
          automation?.User?.subscription?.plan === 'PRO' &&
          automation.listener?.listener === 'SMARTAI'
        ) {
          //* start AI with chat Hisory context
          const smart_ai_message = await openai.chat.completions.create({
            model: 'gemini-1.5-flash',
            messages: [
              {
                role: 'assistant',
                content: `${automation.listener?.prompt}: keep responses under 2 sentences`,
              },
              ...customer_history.history,
              {
                role: 'user',
                content: webhook_payload.entry[0].messaging[0].message.text,
              },
            ],
          })

          if (smart_ai_message.choices[0].message.content) {
            const reciever = createChatHistory(
              automation.id,
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              webhook_payload.entry[0].messaging[0].message.text
            )

            const sender = createChatHistory(
              automation.id,
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              smart_ai_message.choices[0].message.content
            )
            await db.$transaction([reciever, sender])
            const direct_message = await sendDM(
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              smart_ai_message.choices[0].message.content,
              automation.User?.integrations[0].token!
            )

            if (direct_message.status === 200) {
              //if successfully send we return
              return NextResponse.json({message: 'Message sent'},{ status: 200 })
            }
          }
        }
      }

      return NextResponse.json({message: 'No automation set',},{ status: 200 }
      )
    }

    return NextResponse.json({ message: "No automation set" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "No automation set" }, { status: 200 });
  }
}
