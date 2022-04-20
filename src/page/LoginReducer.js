import { useRef, useReducer, useEffect } from 'react'
import { LoginToServer } from '../services/Auth'

const InitialLoginState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  user: {}
}

const LoginActions = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT: 'SIGN_OUT'
}

const LoginReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case LoginActions.SET_LOADING:
      return { ...state, isLoading: true }
    case LoginActions.SIGN_IN_SUCCESS:
      return { 
        ...state, 
        isLoggedIn: true, 
        isLoading: false,
        isError: false,
        user: action.payload.user 
      }
    case LoginActions.SIGN_IN_FAILED:
      return {
        ...state, 
        isLoading: false,
        isLoggedIn: false, 
        isError: action.payload.error
      }
    case LoginActions.SIGN_OUT: 
      return InitialLoginState
    default:
      break;
  }
}

const Login = () => {
  const [state, dipatch] = useReducer(LoginReducer, InitialLoginState)

  useEffect(() => {
    console.log(state)
  }, [state])

  const emailRef = useRef()
  const passwordRef = useRef()

  const SignIn = async (event) => {
    event.preventDefault()
    dipatch({ type: LoginActions.SET_LOADING })
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const user = await LoginToServer(email, password)
      dipatch({ 
        type: LoginActions.SIGN_IN_SUCCESS, 
        payload: { user } 
      })
    } catch (error) {
      dipatch({ 
        type: LoginActions.SIGN_IN_FAILED, 
        payload: { error: error.message }  
      })
    }
  }

  const SignOut = () => {
    dipatch({ type: LoginActions.SIGN_OUT })
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
        <p>Is Loading: {String(state.isLoading)}</p>
        <p>Is Logged In: {String(state.isLoggedIn)}</p>
        <p>Is Error: {String(state.isError)}</p>
        <p>ID: {state.user.id}</p>
        <p>Email: {state.user.email}</p>
        <p>Full Name: {state.user.fullName}</p>
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