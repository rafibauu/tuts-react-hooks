import React, { useState, useCallback } from 'react'
import Display from './Display'

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(1)
  const [showData, setShowData] = useState(false)

  const GetCounterData = useCallback(
    () => {
      return [counter * 2, counter * 3, counter * 4]
    }, 
    [counter]
  )

  const GetRandomData = useCallback(
    () => {
      const random = Math.floor(Math.random() * 100) + 1
      return [random * 2, random * 3, random * 4]
    },
    []
  )

  return (
    <div className="functional-app">
      <h1>UseCallbackComponent</h1>

      <div style={{ marginBottom: 24 }}>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
          Add Counter
        </button>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2>Show Data: {showData.toString()}</h2>
        <button onClick={() => setShowData(!showData)}>
          Show / Hide Data
        </button>
      </div>

      <Display GetData={GetRandomData} />
    </div>
  )
}

export default UseCallbackComponent