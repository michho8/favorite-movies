import OpenAI from "openai";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const movie = searchParams.get("movie") || "a movie";

    const prompt = `Give one true, non-spoiler fun fact about the movie "${movie}" in 1-2 sentences.`;

    try {
        const r = await openai.responses.create({
            model: "gpt-5-nano",
            input: prompt,
        });

        const fact = (r as any).output_text ?? "Here's a fun fact!";
        return NextResponse.json({ fact });
    } catch (err: any) {
        console.error("OpenAI error:", err);
        return NextResponse.json(
            { error: err?.message ?? "Something went wrong" },
        );
    }
}
