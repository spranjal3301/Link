import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});


type Thistory = {
  role: 'user' | 'assistant' | 'system',
  content: string,
  name?: string // Optional name property for function calls
};

export const createAIChatCompletion = async (prompt: string, history: Thistory[] = []) => {
  return await openai.chat.completions.create({
    model: "gemini-1.5-flash",
    messages: [
      {
        role: "assistant",
        content: `${prompt}: Keep responses under 2 sentences (maximum 50 words)`
      },
      ...history
    ] as ChatCompletionMessageParam[],
  });
};
