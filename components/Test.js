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
            const res = await apiClient.post('/input', { value: "test", topic: "test" });
    

            console.log("Settings created", res);
        }
        catch (e) {
            console.error("Error:", e);
        }
    }

    return (
        <button onClick={test} className='bg-red-400   p-5'>TEST</button>
    )
}
