import './App.scss'
import { BrowserRouter as Router, 
         Routes,
         Route, 
         NavLink
        } from "react-router-dom"
import { Home } from './pages/home'
import { About } from './pages/about'
import { NotFound } from './pages/NotFound'
import { createStore } from 'redux'

const ADD = "ADD"
const REMOVE = "REMOVE"

const Products = [

]
//Redux
const messageReducer = (p = [], action) => {
    switch (action.type) {
        case ADD: 
            Products.push(action.product)
        return  Products
        case REMOVE: 
        return Products
        default: 
        return p
    }
}

const addProduct = (product) => {
    return(
        {
            type: ADD, 
            product
        }, 
        {
            type: REMOVE, 
            product
        }
    )
}
const store = createStore(messageReducer)
//React

const  mapStateToProps = (state) => {
  return {
    products: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    submitNewProduct :(prod) => {
      dispatch(addProduct(prod))
    } 
  }
}



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
