import { UserContext } from '../App'

const Topbar = () => {
  return (
    <div>
      Topbar
      <br />
      <UserContext.Consumer>
        {(values) => {
          return (
            <h1>
              ID: {values.id}
              <br />
              Name: {values.name}
              <br />
              Email: {values.email}
              <br />
            </h1>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default Topbar