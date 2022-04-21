import { createContext } from 'react';
import Layout from './components/Layout';
import ThemeProvider from './context/theme';
import AuthProvider from './context/auth';

export const UserContext = createContext({
  email: 'erdecode@gmail.com',
  name: 'Erdecode Channel',
  id: '123wefdsf4'
})

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
