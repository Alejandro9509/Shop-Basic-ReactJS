import './App.scss'
import { BrowserRouter as Router, 
         Routes,
         Route, 
         NavLink
        } from "react-router-dom"
import { Home } from './pages/home'
import { About } from './pages/about'
import { NotFound } from './pages/NotFound'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound /> }></Route>
      </Routes>
    </Router>
  );
}

function Navigation() {
  return (
    <header>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand >Barra de Navegacion</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Inicio</NavLink>
            <NavLink className='nav-link' to="about">Acerca</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default App;
