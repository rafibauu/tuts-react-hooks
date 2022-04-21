import { useRef } from 'react'
import { useAuth } from '../context/auth'

const LoginContextPage = () => {
  const auth = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const OnSignIn = async (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const { SignIn } = auth
    await SignIn(email, password)
  }

  const OnSignOut = () => {
    const { SignOut } = auth
    SignOut()
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
        <p>Is Loading: {String(auth.isLoading)}</p>
        <p>Is Logged In: {String(auth.isLoggedIn)}</p>
        <p>Is Error: {String(auth.isError)}</p>
        <p>ID: {auth.user.id}</p>
        <p>Email: {auth.user.email}</p>
        <p>Full Name: {auth.user.fullName}</p>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr max-content', 
          alignItems: 'center',
          columnGap: 16
        }}
      >
        {auth.isLoggedIn ? (
          <button onClick={OnSignOut}>SIGN OUT</button>
        ) : (
          <form onSubmit={OnSignIn}>
            <input ref={emailRef} type="email" name="email" id="email" placeholder="Email" />
            <br />
            <input ref={passwordRef} type="password" name="password" id="password" placeholder="Password" />
            <br />
            <button disabled={auth.isLoading}>
              SIGN IN
            </button>
          </form>
        )}
      </div>

    </div>
  )
}

export default LoginContextPage