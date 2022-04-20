
import Topbar from './Topbar';
import Footer from './Footer';
import Home from '../page/Home';
// import Login from '../page/Login';
import LoginReducer from '../page/LoginReducer';
import { useTheme } from '../context/theme';

const Layout = () => {
  const theme = useTheme()
  // console.log('Layout Component', theme)

  return (
    <div className={`app ${theme.theme}`}>
      <Topbar />
      <div className="page">
        Page Content
        <Home />
        {/* <Login /> */}
        <LoginReducer />
      </div>
      <Footer />
    </div>
  )
}

export default Layout