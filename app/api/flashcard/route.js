
import { generateFlashcards } from "@/libs/agents/FlashCardAgent";
import { generateToddlerStoryElements } from "@/libs/agents/StoryBookAgent";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const res = await generateFlashcards("669c9dac1130abe4d8528c39");
        return new NextResponse(JSON.stringify({ flashCard: res }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse(JSON.stringify({ error: 'Error', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
