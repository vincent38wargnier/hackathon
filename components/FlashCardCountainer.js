"use client"
import React from 'react';
import FlashCard from './FlashCard';

export default function FlashCardContainer() {
    const flashcardData = {
        "front": "What is Type 1 Diabetes?",
        "back": "An autoimmune condition where the body's immune system attacks insulin-producing cells.",
        "topic": "Medical",
        "difficultyLevel": "Beginner",
        "ageGroup": "Teens",
        "learningObjective": "Understand the basic definition of Type 1 Diabetes.",
        "techKeywords": [
            {
                "term": "Autoimmune",
                "description": "A condition in which the immune system attacks the body's own cells."
            },
            {
                "term": "Insulin",
                "description": "A hormone that helps glucose enter cells to be used for energy."
            }
        ],
        "originalInput": "Doctor patient- Dr. Patel: Hello everyone. I'm Dr. Patel, and I understand that your daughter, Emma, has been diagnosed with type 1 diabetes. ..."
    };

    return (
        <div>
            <FlashCard flashcard={flashcardData} />
        </div>
    );
}