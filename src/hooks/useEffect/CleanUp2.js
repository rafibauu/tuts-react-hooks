import React, { useState, useEffect } from 'react';

const CleanUpChild = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Component did mount once")

    return () => {
      console.log("Compoennt unmount once")
    }
  }, [])

  return (
    <div style={{ background: 'orange', padding: 16, marginTop: 16 }}>
      <h1>Clean Up Child Component</h1>
      <p> counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Add Counter
      </button>
    </div>
  )
}

const CleanUp2 = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div className="functional-app">
      <h1>How to add clean up function once</h1>
      <button onClick={() => setShowChild(!showChild)}>
        Show / Hide Child
      </button>
      {showChild && <CleanUpChild />}
    </div>
  );
}

export default CleanUp2