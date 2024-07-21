import { z } from "zod";
import Input from "@/models/Input";
import connectMongo from "@/libs/mongoose";
import { getJsonLlmResponse } from "../functions";
import Anthropic from "@anthropic-ai/sdk";

const flashcardSchema = z.object({
    front: z.string(),
    back: z.string(),
    topic: z.string(),
    difficultyLevel: z.string(),
    ageGroup: z.string(),
    learningObjective: z.string(),
    techKeywords: z.array(z.object({
        term: z.string(),
        description: z.string()
    }))
});

const flashcardsSetSchema = z.object({
    flashcards: z.array(flashcardSchema),
});

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});
const modelClaude = "claude-3-sonnet-20240229";

export const generateFlashcards = async (inputId) => {
    await connectMongo();

    try {
        const input = await Input.findById(inputId);
        if (!input) {
            throw new Error("Input not found");
        }

        const FLASHCARDS_PROMPT = `
        Based on the following input, generate a set of 5 flashcards:

        "${input.value}"

        Create 5 flashcards suitable for learning. Each flashcard should have:

        1. Front: A clear question, prompt, or concept (keep it concise, ideally under 15 words)
        2. Back: A concise answer or explanation (aim for under 30 words)
        3. Topic: A brief description of the subject area this flashcard covers (1-3 words)
        4. Difficulty Level: Specify the difficulty level (e.g., Beginner, Intermediate, Advanced)
        5. Age Group: Specify the appropriate age group for this flashcard (e.g., 7-9 years, 10-12 years, Teens, Adults)
        6. Learning Objective: A brief statement of what the learner should gain from this flashcard (1 sentence)
        7. Tech Keywords: An array of 1-3 objects, each containing:
           - term: A technical term or keyword from the flashcard content
           - description: A brief, simple explanation of the term (1-2 sentences)

        Ensure the flashcards are clear, concise, and directly related to the input content. Include descriptions for any complicated tech keywords used in the flashcard content.

        Provide only the requested information in a JSON format matching the given schema, without any additional explanation.
        `;

        const flashcardsSet = await getJsonLlmResponse(flashcardsSetSchema, FLASHCARDS_PROMPT, "gpt-4o");
        console.log("Flashcards Set:", flashcardsSet);

        // Now, let's use Anthropic's Claude to select the best flashcard
        const BEST_FLASHCARD_PROMPT = `
        Analyze the following set of flashcards and select the best one based on these criteria:
        1. Relevance to the original input
        2. Clarity of the question (front) and answer (back)
        3. Appropriateness for the specified age group
        4. Alignment with the learning objective
        5. Overall educational value
        6. Quality and relevance of the tech keyword descriptions

        Flashcards:
        ${JSON.stringify(flashcardsSet.flashcards, null, 2)}

        Original Input: "${input.value}"

        Your response should be ONLY the index (0 to 4) of the best flashcard. Do not include any explanation or additional text.
        `;

        const sonnetResponse = await anthropic.messages.create({
            model: modelClaude,
            max_tokens: 1024,
            temperature: 0,
            messages: [
                {
                    role: "user",
                    content: BEST_FLASHCARD_PROMPT
                }
            ]
        });

        const bestFlashcardIndex = parseInt(sonnetResponse.content[0].text.trim());

        if (isNaN(bestFlashcardIndex) || bestFlashcardIndex < 0 || bestFlashcardIndex >= flashcardsSet.flashcards.length) {
            throw new Error("Invalid flashcard index returned by the model");
        }

        const bestFlashcard = flashcardsSet.flashcards[bestFlashcardIndex];

        return { ...bestFlashcard, originalInput: input.value };

    } catch (error) {
        console.error("Error generating flashcards:", error);
        return "Sorry, there was an error generating the flashcards. Please try again.";
    }
};