import { z } from "zod";
import Input from "@/models/Input";
import Output from "@/models/Output";
import connectMongo from "@/libs/mongoose";
import { getJsonLlmResponse } from "../functions";
import Anthropic from "@anthropic-ai/sdk";

const summarySchema = z.object({
    summary: z.string(),
    keyPoints: z.array(z.string()),
    topic: z.string(),
    wordCount: z.number(),
    targetAudience: z.string(),
    techKeywords: z.array(z.object({
        term: z.string(),
        description: z.string()
    }))
});

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});
const modelClaude = "claude-3-sonnet-20240229";

export const generateSummary = async (inputId) => {
    await connectMongo();

    try {
        const input = await Input.findById(inputId);
        if (!input) {
            throw new Error("Input not found");
        }

        const SUMMARY_PROMPT = `
        Based on the following input, generate a comprehensive summary:

        "${input.value}"

        Create a summary with the following components:

        1. Summary: A concise overview of the main points (aim for 100-150 words)
        2. Key Points: An array of 3-5 important takeaways from the input
        3. Topic: A brief description of the subject area this summary covers (1-3 words)
        4. Word Count: The number of words in the summary
        5. Target Audience: Specify the appropriate audience for this summary (e.g., General public, Students, Professionals)
        6. Tech Keywords: An array of 2-4 objects, each containing:
           - term: A technical term or keyword from the summary content
           - description: A brief, simple explanation of the term (1-2 sentences)

        Ensure the summary is clear, concise, and directly related to the input content. Include descriptions for any complicated tech keywords used in the summary.

        Provide only the requested information in a JSON format matching the given schema, without any additional explanation.
        `;

        const summaryData = await getJsonLlmResponse(summarySchema, SUMMARY_PROMPT, "gpt-4o");
        console.log("Summary Data:", summaryData);

        // Create a new output document
        const outputContent = {
            summary: summaryData.summary,
            keyPoints: summaryData.keyPoints,
            topic: summaryData.topic,
            wordCount: summaryData.wordCount,
            targetAudience: summaryData.targetAudience,
            techKeywords: summaryData.techKeywords,
            originalInput: input.value
        };

        const newOutput = new Output({
            value: JSON.stringify(outputContent),
            type: "summary",
            topic: input.topic  // Copying the topic from the input
        });

        await newOutput.save();

        return newOutput;

    } catch (error) {
        console.error("Error generating summary:", error);
        return "Sorry, there was an error generating the summary. Please try again.";
    }
};