
import Topbar from './Topbar';
import Footer from './Footer';
import Home from '../page/Home';
import LoginContextPage from '../page/LoginContextPage';
import { useTheme } from '../context/theme';

const Layout = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme.theme}`}>
      <Topbar />
      <div className="page">
        Page Content
        <Home />
        <LoginContextPage />
      </div>
      <Footer />
    </div>
  )
}

export default Layout