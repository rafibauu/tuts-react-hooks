import { useRef, useState } from 'react'
import { LoginToServer } from '../services/Auth'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState({})

  const emailRef = useRef()
  const passwordRef = useRef()

  const SignIn = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const user = await LoginToServer(email, password)
      setIsLoggedIn(true)
      setUser(user)
    } catch (error) {
      setIsError(error.message)
    }
    setIsLoading(false)
  }

  const SignOut = () => {
    setUser({})
    setIsLoggedIn(false)
    setIsError(false)
    setIsLoading(false)
  }

  return (
    <div 
      style={{ 
        marginTop: 32, 
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 16, 
        rowGap: 12, 
        gridTemplateColumns: 'max-content' 
      }}
    >

      <div>
        <p>Is Loading: {String(isLoading)}</p>
        <p>Is Logged In: {String(isLoggedIn)}</p>
        <p>Is Error: {String(isError)}</p>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Full Name: {user.fullName}</p>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr max-content', 
          alignItems: 'center',
          columnGap: 16
        }}
      >
        <form onSubmit={SignIn}>
          <input ref={emailRef} type="email" name="email" id="email" placeholder="Email" />
          <br />
          <input ref={passwordRef} type="password" name="password" id="password" placeholder="Password" />
          <br />
          <button>
            SIGN IN
          </button>
        </form>

        <button onClick={SignOut}>
          SIGN OUT
        </button>
      </div>

    </div>
  )
}

export default Login