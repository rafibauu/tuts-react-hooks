import useData from '../custom-hooks/useData'

const Posts = () => {
  const posts = useData('posts')
  const [data, isReady, isError] = posts

  if (isError) {
    return <p>Error while loading data, Error: {isError}</p>
  }

  if (!isReady) {
    return <p>Loading data...</p>
  }

  return (
    <div>
      Posts
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <b>{item.title}</b>
              <br />
              <p>{item.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts