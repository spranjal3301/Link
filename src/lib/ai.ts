import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


export const createAIChatCompletion = async (prompt: string, history?: any) =>
    await openai.chat.completions.create({
      model: "gemini-1.5-flash", // Fixed model name (gemini is Google's model)
      messages: [
        {
          role: "assistant",
          content: `${prompt}: Keep responses under 2 sentences`,
        },
        ...history,
      ],
    });

