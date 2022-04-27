import { useEffect, useState } from 'react'
import Delay from '../utils/Delay'

const useData = (path) => {
  const [isReady, setIsReady] = useState(false)
  const [isError, setIsError] = useState(null)
  const [data, setData] = useState(null)

  const GetData = async () => {
    try {
      console.log('Using useData Hooks')
      await Delay(2000)
      const mainUrl = 'https://jsonplaceholder.typicode.com/' + path
      const request = await fetch(mainUrl)
      const jsonResponse = await request.json()
      setData(jsonResponse)
      setIsReady(true)
    } catch (error) {
      setIsError(error.message)
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  return [data, isReady, isError]
}

export default useData