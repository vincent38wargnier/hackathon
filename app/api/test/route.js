
import { generateFlashcards } from "@/libs/agents/FlashCardAgent";
import { generateToddlerStoryElements } from "@/libs/agents/StoryBookAgent";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // const res = await generateToddlerStoryElements("669cb836049fdf7f1a209538");
        const res = await generateFlashcards("669cb836049fdf7f1a209538");
        return new NextResponse(JSON.stringify({ message: res }), {
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
