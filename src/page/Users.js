import useData from '../custom-hooks/useData'

const Users = () => {
  const users = useData('users')
  const [data, isReady, isError] = users

  if (isError) {
    return <p>Error while loading data, Error: {isError}</p>
  }

  if (!isReady) {
    return <p>Loading data...</p>
  }

  return (
    <div>
      Users
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <b>{item.name}</b>
              <br />
              <p>{item.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users