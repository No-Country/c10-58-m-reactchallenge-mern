import { useState, useEffect } from 'react'

export const useAsync = (requestFunction) => {
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function fetchData () {
    setIsLoading(true)
    try {
      const response = await requestFunction()
      setResult(response)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { isLoading, result, error }
}
