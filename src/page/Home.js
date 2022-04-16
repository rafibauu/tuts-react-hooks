import { useTheme } from "../context/theme"

const Home = () => {
  const themeContext = useTheme()
  const { theme, SetDarkTheme, SetLightTheme } = themeContext
  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={SetDarkTheme}>Set Dark</button>
      <button onClick={SetLightTheme}>Set Light</button>
    </div>
  )
}

export default Home