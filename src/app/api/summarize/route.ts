import { NextResponse } from "next/server";
import groq from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const { transcript, prompt } = await req.json();

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // updated model
      messages: [
        { role: "system", content: "You are a meeting summarizer." },
        { role: "user", content: `${prompt}\n\nTranscript:\n${transcript}` }
      ],
    });

    const summary = response.choices[0].message?.content || "No summary generated.";
    return NextResponse.json({ summary });

  } catch (error) {
    console.error("Summarize API error:", error);
    return NextResponse.json({ error: "Failed to summarize" }, { status: 500 });
  }
}
