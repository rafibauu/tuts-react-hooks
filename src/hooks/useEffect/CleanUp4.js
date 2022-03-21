import React, { useState, useEffect } from 'react'
import Delay from '../../utils/Delay'

const FetchChild = () => {
	const [posts, setPosts] = useState(null)

	useEffect(() => {
    let isUnmount = false
    console.log('Initial', isUnmount)

    const GetPosts = async () => {
      await Delay(3000)
      const fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
      const jsonPosts = await fetchPosts.json()
      console.log('On load', isUnmount)
      if (!isUnmount) {
        setPosts(jsonPosts)
      }
    }

    GetPosts()

    return () => {
      isUnmount = true
      console.log('On unmount', isUnmount)
    }
  }, [])

	return (
		<div style={{ textAlign: 'left' }}>
			{!posts && <p>Loading...</p>}
			{posts && posts.map((post) => <h5 key={post.id}>{post.title}</h5>)}
		</div>
	)
}

const CleanUp4 = () => {
	const [showChild, setShowChild] = useState(true)

  return (
    <div className="functional-app">
			<h1>Fetch CleanUp</h1>
			<h2>Try to remove posts list component</h2>
			<button onClick={() => setShowChild(!showChild)}>
				Show / Remove
			</button>
			{showChild && <FetchChild />}
		</div>
  )
}

export default CleanUp4