import React, { useEffect, useState } from 'react'

const ChildListener = () => {
  const OnScroll = () => {
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', OnScroll)

    return () => {
      window.removeEventListener('scroll', OnScroll)
    }
  }, [])

  return (
    <div>
      <h1>Window Listener CleanUp</h1>
      <h2>Try to scroll</h2>
      <h3>Start</h3>
      <div style={{ height: 300 }}>
        ...
      </div>
      <div style={{ height: 300 }}>
        ...
      </div>
      <div style={{ height: 300 }}>
        ...
      </div>
      <div style={{ height: 300 }}>
        ...
      </div>
      <h3>End</h3>
    </div>
  )
}


const CleanUp3 = () => {
  const [showChild, setShowChild] = useState(true);

  return (
    <div className="functional-app">
      <h1>How to add clean up function once</h1>
      <button onClick={() => setShowChild(!showChild)}>
        Show / Hide Child
      </button>
      <div>
        <div style={{ height: 300 }}>
          Parent Text
        </div>
        <div style={{ height: 300 }}>
          Parent Text
        </div>
        <div style={{ height: 300 }}>
          Parent Text
        </div>
        <div style={{ height: 300 }}>
          Parent Text
        </div>
      </div>
      {showChild && <ChildListener />}
    </div>
  );
}

export default CleanUp3