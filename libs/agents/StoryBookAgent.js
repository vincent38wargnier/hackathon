import { z } from "zod";
import Input from "@/models/Input"; // Make sure this path is correct
import connectMongo from "@/libs/mongoose"; // Make sure this path is correct
import { getJsonLlmResponse } from "../functions";

const storyElementsSchema = z.object({
    typeOfStory: z.string(),
    mainCharacter: z.object({
        name: z.string(),
        age: z.number(),
        gender: z.string(),
        description: z.string()
    }),
    plotSummary: z.string(),
    subliminalMessage: z.string(),
    otherRelevantDetails: z.string()
});

export const generateToddlerStoryElements = async (inputId) => {
    await connectMongo(); // Connect to MongoDB

    try {
        // Load the Input from the database
        const input = await Input.findById(inputId);
        if (!input) {
            throw new Error("Input not found");
        }

        const STORY_ELEMENTS_PROMPT = `
        Based on the following input for a toddler's story, generate appropriate story elements:

        "${input.value}"

        Create story elements suitable for toddlers (ages 1-3) that fit the following structure:

        1. Type of Story: Choose a simple, toddler-friendly story type (e.g., bedtime story, animal adventure, daily routine).
        2. Main Character:
           - Name: A simple, easy-to-pronounce name
           - Age: Between 2-4 years old
           - Gender: Choose appropriate for the story
           - Description: A brief, colorful description (2-3 words)
        3. Plot Summary: A very simple, one-sentence summary of the story's main action
        4. Subliminal Message: A basic life lesson appropriate for toddlers (e.g., sharing is good, be kind to others)
        5. Other Relevant Details: Any additional simple elements that could enhance the story

        Ensure all elements are very simple, colorful, and appropriate for toddlers. The story should be easy to understand and relate to their daily experiences.

        Provide only the requested information in a JSON format matching the given schema, without any additional explanation.
        `;

        const storyElements = await getJsonLlmResponse(storyElementsSchema, STORY_ELEMENTS_PROMPT, "gpt-4o");
        console.log("Story Elements:", storyElements);
        return { ...storyElements, typeOfStory: "Fairy Tale" }

    } catch (error) {
        console.error("Error generating toddler story elements:", error);
        return "Sorry, there was an error generating the story elements. Please try again.";
    }
};