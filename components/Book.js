import Image from 'next/image'
import React from 'react'

export default function Book() {
    return (
        <div>
            <div className='max-w-3xl mx-auto my-12 shadow-md p-8 border border-gray-200 relative hover:scale-105 transform duration-500 hover:shadow-xl bg-perso-darkPurple text-white rounded-b-lg'>
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-300"></div>
                <h1 className="text-3xl font-serif mb-6 text-white">Story Book</h1>
                <Image src="/images/book-example.png" alt="health" width={500} height={500} />
                <a href="http://localhost:3001/edit/669d5792929633c266c5b94a" target="_blank" className=' text-blue-400 hover:underline cursor-pointer pt-8 font-semibold'>See the book</a>
            </div>
        </div>
    )
}
