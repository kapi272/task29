import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetch_data = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(url, { signal: controller.signal })

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }

        const json = await res.json()
        setData(json)
        setLoading(false)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Error: failed to fetch')
          setLoading(false)
          setData(null)
        }
      }
    }

    if (url) {
      fetch_data()
    }

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
