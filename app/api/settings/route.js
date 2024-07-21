import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Settings from "@/models/Settings";

export async function POST(req) {
    await connectMongo();

    const body = await req.json();

    if (!body.topics || !Array.isArray(body.topics)) {
        return NextResponse.json({ error: "Topics array is required" }, { status: 400 });
    }

    if (!body.productSubscriptions || !Array.isArray(body.productSubscriptions)) {
        return NextResponse.json({ error: "Product subscriptions array is required" }, { status: 400 });
    }

    try {
        const newSettings = await Settings.create({
            topics: body.topics,
            productSubscriptions: body.productSubscriptions
        });

        console.log("Created settings", newSettings);

        // Here you can add additional logic if needed
        // For example, sending a confirmation email or triggering other actions

        return NextResponse.json({ message: "Settings created successfully", settings: newSettings });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}