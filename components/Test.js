"use client"
import apiClient from '@/libs/api';
import React from 'react'

export default function Test() {

    const test = async () => {
        try {

            // const res = await apiClient.post("/settings", {
            //     topics: ["Healthcare", "Children Development", "Cooking"],
            //     productSubscriptions: [
            //         {
            //             name: "StoryBook",
            //             recurring: "monthly",  // Assuming it's a monthly subscription
            //             startDate: new Date().toISOString()  // Current date as the start date
            //         },
            //         {
            //             name: "Newsletter",
            //             recurring: "weekly",  // Assuming it's a weekly newsletter
            //             startDate: new Date().toISOString()  // Current date as the start date
            //         }
            //     ]
            // });
            // const res = await apiClient.get('/input/list');

            // await apiClient.post('/input/create', { value: "flashcard1", topic: "healthcare" });
            // await apiClient.post('/input/create', { value: "flashcard2", topic: "healthcare" });
            // await apiClient.post('/input/create', { value: "flashcard3", topic: "healthcare" });
            // await apiClient.post('/input/create', { value: "flashcard4", topic: "healthcare" });
            await apiClient.post('/test');
    

        }
        catch (e) {
            console.error("Error:", e);
        }
    }

    return (
        <button onClick={test} className='bg-red-400   p-5'>Get Started</button>
    )
}
