
import Topbar from './Topbar';
import Footer from './Footer';
import Home from '../page/Home';
import { useTheme } from '../context/theme';

const Layout = () => {
  const theme = useTheme()
  console.log('Layout Component', theme)

  return (
    <div className={`app ${theme.theme}`}>
      <Topbar />
      <div className="page">
        Page Content
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default Layout