import './App.scss'
import { BrowserRouter as Router, 
         Routes,
         Route, 
         NavLink
        } from "react-router-dom"
import { Home } from './pages/home'
import { About } from './pages/about'
import { NotFound } from './pages/NotFound'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound /> }></Route>
      </Routes>
    </Router>
  );
}

function Nav() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About</NavLink>
    </div>
  )
}

export default App;
