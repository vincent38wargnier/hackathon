import React from 'react';

export default function Summary({ id, summary, createdAt, topic }) {
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
        <div className="max-w-3xl mx-auto my-12 bg-white bg-opacity-50 shadow-md p-8 border border-gray-200 relative hover:scale-105 transform duration-500 hover:shadow-xl">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            <h1 className="text-3xl font-serif mb-6 text-gray-800">{summary.topic}</h1>

            <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Abstract</h2>
                <p className="text-gray-600 leading-relaxed text-left">{summary.summary}</p>
            </div>

            {/* <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Key Points</h2>
                <ul className="list-disc list-inside space-y-2">
                    {summary.keyPoints.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                    ))}
                </ul>
            </div> */}

            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
                <p><span className="font-semibold">Topic:</span> {topic}</p>
                <p><span className="font-semibold">Date:</span> {formattedDate}</p>
                <div className='  text-center text-xs font-light pt-1'>#{id}</div>
            </div>
        </div>
    );
}