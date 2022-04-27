
import Topbar from './Topbar';
import Footer from './Footer';
import Home from '../page/Home';
import Posts from '../page/Posts';
import Users from '../page/Users';
import { useTheme } from '../context/theme';

const Layout = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme.theme}`}>
      <Topbar />
      <div className="page">
        Page Content
        <Home />
        <Users />
        {/* <Posts /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout