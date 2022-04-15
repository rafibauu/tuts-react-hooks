import { createContext } from 'react';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import './App.css';

export const UserContext = createContext({
  email: 'erdecode@gmail.com',
  name: 'Erdecode Channel',
  id: '123wefdsf4'
})

export const ThemeContext = createContext({
  theme: 'dark',
  primary: 'red'
})

function App() {
  return (
    <div className="app">
      <Topbar />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App;
