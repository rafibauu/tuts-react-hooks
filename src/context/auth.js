import { createContext, useContext, useReducer } from 'react';
import { LoginToServer } from '../services/Auth';

const InitialAuthState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  user: {}
}

const AuthActions = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_OUT: 'SIGN_OUT'
}

const AuthReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case AuthActions.SET_LOADING:
      return { ...state, isLoading: true }
    case AuthActions.SIGN_IN_SUCCESS:
      return { 
        ...state, 
        isLoggedIn: true, 
        isLoading: false,
        isError: false,
        user: action.payload.user 
      }
    case AuthActions.SIGN_IN_FAILED:
      return {
        ...state, 
        isLoading: false,
        isLoggedIn: false, 
        isError: action.payload.error
      }
    case AuthActions.SIGN_OUT: 
      return InitialAuthState
    default:
      break;
  }
}

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [state, dipatch] = useReducer(AuthReducer, InitialAuthState)

  const SignIn = async (email, password) => {
    dipatch({ type: AuthActions.SET_LOADING })
    try {
      const user = await LoginToServer(email, password)
      dipatch({ 
        type: AuthActions.SIGN_IN_SUCCESS, 
        payload: { user } 
      })
    } catch (error) {
      dipatch({ 
        type: AuthActions.SIGN_IN_FAILED, 
        payload: { error: error.message }  
      })
    }
  }

  const SignOut = () => {
    dipatch({ type: AuthActions.SIGN_OUT })
  }

  return (
    <AuthContext.Provider value={{ ...state, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider