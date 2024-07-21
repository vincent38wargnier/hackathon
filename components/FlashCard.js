import React, { useState } from 'react';

export default function FlashCard({ id, flashcard, index, createdAt, topic }) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Format the date
    const formattedDate = new Date(createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    return (
        <div key={index} className="max-w-md mx-auto my-8 text-sm hover:scale-105 transform duration-500 hover:shadow-xl flex items-start justify-start">
            <div
                className={`flashcard border-l-2 border-purple-700 bg-white rounded-r-xl shadow-lg transform transition duration-500 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="front backface-hidden p-6 h-full text-left">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600">{flashcard.topic}</h2>
                    <p className="text-xl mb-4">{flashcard.front}</p>
                    <div className="mt-4 flex flex-wrap items-center">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{flashcard.difficultyLevel}</span>
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{flashcard.ageGroup}</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Topic:</strong> {topic}</p>
                        <p><strong>Created:</strong> {formattedDate}</p>
                    </div>
                </div>
                <div className="back backface-hidden p-6 h-full rotate-y-180 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-600">Answer</h2>
                    <p className="text-xl mb-4">{flashcard.back}</p>
                    <h3 className="text-lg font-semibold mt-4 mb-2">Tech Keywords:</h3>
                    <ul className="list-disc list-inside">
                        {flashcard.techKeywords?.map((keyword, index) => (
                            <li key={index} className="mb-2">
                                <span className="font-medium">{keyword.term}:</span> {keyword.description}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                        <strong>Learning Objective:</strong> {flashcard.learningObjective}
                    </p>
                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Topic:</strong> {topic}</p>
                        <p><strong>Created:</strong> {formattedDate}</p>
                        <div className='  text-left text-xs font-light pt-1'>#{id}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
