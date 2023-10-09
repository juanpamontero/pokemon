import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetching = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        fetching()
    }, [url])
    return { data, loading, error }
}