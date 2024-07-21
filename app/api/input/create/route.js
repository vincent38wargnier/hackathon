import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Input from "@/models/Input";

export async function POST(req) {
    await connectMongo();

    const body = await req.json();

    if (!body.value || typeof body.value !== 'string') {
        return NextResponse.json({ error: "Input value is required and must be a string" }, { status: 400 });
    }

    if (!body.topic || typeof body.topic !== 'string') {
        return NextResponse.json({ error: "Topic is required and must be a string" }, { status: 400 });
    }

    try {
        const newInput = await Input.create({
            value: body.value,
            topic: body.topic
        });

        console.log("Created input", newInput);

        // Here you can add additional logic if needed
        // For example, processing the input or triggering other actions

        return NextResponse.json({ message: "Input created successfully", input: newInput });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}