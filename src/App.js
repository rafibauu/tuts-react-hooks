import { createContext } from 'react';
import Layout from './components/Layout';
import ThemeProvider from './context/theme';

export const UserContext = createContext({
  email: 'erdecode@gmail.com',
  name: 'Erdecode Channel',
  id: '123wefdsf4'
})

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App;
