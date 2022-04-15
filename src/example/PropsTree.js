const ActionLink = ({ user }) => {
  return <a href={`www.google.com/${user.email}`}>User Link</a>
}

const Topbar = ({ user }) => {
  return (
    <nav>
      <ActionLink user={user} />
    </nav>
  )
}

const Footer = ({ user }) => {
  return (
    <footer>
      <ActionLink user={user} />
    </footer>
  )
}

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Selamat datang,</h1>
      <h2>Name {user.name}</h2>
      <h2>Email {user.email}</h2>
    </div>
  )
}

const App = () => {
  const user = { 
    email: 'erdecode@gmail.com', 
    name: 'Erdecode', 
    avatar: 'https://image.com/djd9s.jpg' 
  }

  return (
    <div>
      <Topbar user={user} />
        <Dashboard user={user} />
      <Footer user={user} />
    </div>
  )
}

export default App

