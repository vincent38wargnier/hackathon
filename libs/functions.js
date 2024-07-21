import { z } from "zod";
import Instructor from "@instructor-ai/instructor";
import OpenAI from "openai";

/**
 * Convert output to JSON format based on a given Zod schema using Instructor AI.
 * @param {z.ZodType} StoryElementsSchema - Zod schema to validate the JSON structure.
 * @param {string} input - The raw output string that needs to be converted to JSON.
 * @param {string} model - The model name to use for conversion.
 * @returns {Promise<Object>} - The JSON object validated against the provided schema.
 */
export const getJsonLlmResponse = async (StoryElementsSchema, input, model, temperature = 1) => {
    // Initialize the OpenAI and Instructor clients
    const oai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY ?? undefined,
    });

    const client = new Instructor({
        client: oai,
        mode: "JSON"
    });
    try {
        const response = await client.chat.completions.create({
            messages: [{ role: "system", content: input }],
            model: model,
            temperature: temperature,
            response_model: {
                schema: StoryElementsSchema,
                name: "ValidatedOutput"
            }
        });
        // console.log("RESPONSE INSTRUCTOR", response);

        return response;
    } catch (error) {
        console.error('Failed to convert to valid JSON:', error);
        throw error;
    }
}