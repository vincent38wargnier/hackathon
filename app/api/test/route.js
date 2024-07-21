
import { generateFlashcards } from "@/libs/agents/FlashCardAgent";
import { generateToddlerStoryElements } from "@/libs/agents/StoryBookAgent";
import { generateSummary } from "@/libs/agents/SummaryAgent";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // const res = await generateToddlerStoryElements("669cb836049fdf7f1a209538");
        const flashcard = await generateFlashcards("669d51fd14a0a35cb295c3e8");
        const summary = await generateSummary("669c969b44808122e949c282");
        return new NextResponse(JSON.stringify({ flashcard, summary }), {
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
