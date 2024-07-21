import React, { useState } from 'react';

export default function FlashCard({ flashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);

    if (!flashcard) {
        return <div>No flashcard data available.</div>;
    }

    return (
        <div className="max-w-md mx-auto my-8">
            <div
                className={`flashcard bg-white rounded-xl shadow-lg transform transition duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="front backface-hidden p-6 h-full">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600">{flashcard.topic}</h2>
                    <p className="text-xl mb-4">{flashcard.front}</p>
                    <div className="mt-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{flashcard.difficultyLevel}</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{flashcard.ageGroup}</span>
                    </div>
                </div>
                <div className="back backface-hidden p-6 h-full rotate-y-180">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Answer</h2>
                    <p className="text-xl mb-4">{flashcard.back}</p>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Tech Keywords:</h3>
                    <ul className="list-disc list-inside">
                        {flashcard.techKeywords.map((keyword, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-medium">{keyword.term}:</span> {keyword.description}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Learning Objective:</strong> {flashcard.learningObjective}
                    </p>
                </div>
            </div>
        </div>
    );
}