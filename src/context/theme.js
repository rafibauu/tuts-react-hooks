import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    console.log('Theme provider', theme)
  }, [theme])

  const SetDarkTheme = () => setTheme('dark')

  const SetLightTheme = () => setTheme('light')

  return (
    <ThemeContext.Provider value={{ theme, SetDarkTheme, SetLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider