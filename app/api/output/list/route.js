import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Output from "@/models/Output";

export async function GET(req) {
    await connectMongo();

    try {
        // If you need user authentication, uncomment this block
        // const session = await getSession({ req });
        // if (session?.user) {
        //     const user = await User.findOne({ email: session.user.email });
        // }

        // Find all outputs of type "flashcard"
        let flashcards = await Output.find().exec();

        if (!flashcards || flashcards.length === 0) {
            return new NextResponse(JSON.stringify({ error: 'No flashcards found' }), { status: 404 });
        }

        // Convert the flashcards to plain JavaScript objects and parse the value
        flashcards = flashcards.map(flashcard => {
            const obj = flashcard.toObject();
            obj.value = JSON.parse(obj.value);
            return obj;
        });

        // You can add any additional processing here if needed
        // For example, you might want to format the createdAt date

        return new NextResponse(JSON.stringify({ flashcards }), { status: 200 });
    } catch (e) {
        console.error(e);
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 500 });
    }
}