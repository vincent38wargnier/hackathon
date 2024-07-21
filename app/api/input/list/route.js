import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Input from "@/models/Input";

export async function GET(req) {
    await connectMongo();

    try {
        // If you need user authentication, uncomment this block
        // const session = await getSession({ req });
        // if (session?.user) {
        //     const user = await User.findOne({ email: session.user.email });
        // }

        let inputs = await Input.find().exec();

        if (!inputs || inputs.length === 0) {
            return new NextResponse(JSON.stringify({ error: 'No inputs found' }), { status: 404 });
        }

        // Convert the inputs to plain JavaScript objects
        inputs = inputs.map(input => input.toObject());

        // You can add any additional processing here if needed
        // For example, you might want to format the createdAt date

        return new NextResponse(JSON.stringify({ inputs }), { status: 200 });
    } catch (e) {
        console.error(e);
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 500 });
    }
}
