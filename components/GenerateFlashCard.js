"use client"
import apiClient from '@/libs/api'
import React, { useEffect, useState } from 'react'
import FlashCard from './FlashCard'

export default function GenerateFlashCard() {
    const [flashCard, setFlashCard] = useState({})
    useEffect(() => {
        init()
    }, [])


    const init = async () => {
        try {
            const res = await apiClient.post('/flashcard')
            console.log('FlashCard:', res)
            setFlashCard(res)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            {flashCard && flashCard.flashCard && <FlashCard flashcard={flashCard.flashCard} />}
        </>
    )
}
