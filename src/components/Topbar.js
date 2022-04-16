import { useTheme } from '../context/theme'

const Topbar = () => {
  const theme = useTheme()
  // console.log('Topbar', theme)

  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div>
          <h1>Topbar App</h1>
        </div>
        <div>
          {/* <UserContext.Consumer>
            {(values) =><p>{values.email}</p>}
          </UserContext.Consumer> */}
        </div>
      </div>
    </nav>
  )
}

export default Topbar