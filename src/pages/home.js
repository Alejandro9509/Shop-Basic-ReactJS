import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import React from 'react'

const ADD = "ADD"
//Redux
const messageReducer = (p = [], action) => {
    switch (action.type) {
        case ADD:  
        return [...p, action.prd]
        default: 
        return p
    }
}

const addProduct = (product) => {
    return{
            type: ADD, 
            prd: product
        }
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
class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        this.subProd = this.subProd.bind(this)       
    }
    
    subProd() {
        this.props.submitNewProduct("Hola mundo")
    }
    render() {
        return(
            <>
                <button onClick={this.subProd}>Presioname</button>
                <div>{this.props.products}</div>
            </>
        )
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(AppProcessing)

export class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Container></Container>
      </Provider>
    )
  }
} 



