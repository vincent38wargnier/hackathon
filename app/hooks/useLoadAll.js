import apiClient from '@/libs/api'
import React, { useEffect, useState } from 'react'

export default function useLoadAll() {
    const [outputs, setOutputs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        console.log('FlashCards CHANGED:', outputs)
    }, [outputs])

    const loadMore = async () => {
        setLoading(true)
        try {
            const res = await apiClient.post('/test')
            setOutputs((prev) => [...prev, {...res.flashcard, value:JSON.parse(res.flashcard.value)}, {...res.summary, value:JSON.parse(res.summary.value)}])
            console.log('RESULT DATA:', res)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }


    const init = async () => {
        try {
            const res = await apiClient.get('/output/list')
            console.log('FlashCard:', res)
            setOutputs(res.flashcards)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return [{
        outputs,
        loading
    }, {
        loadMore
    }]
}
