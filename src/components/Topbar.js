import { useAuth } from '../context/auth'

const Topbar = () => {
  const auth = useAuth()

  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div>
          <h1>Topbar App</h1>
        </div>
        <div>
          {auth.isLoggedIn ? (
            <p>{auth.user.email}</p>
          ) : (
            <div>
              <button>Register</button>
              <button>Signin</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Topbar