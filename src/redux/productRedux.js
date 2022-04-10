import { createStore } from 'redux'
const ADD = "ADD"
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
export const store = createStore(messageReducer)

export const  mapStateToProps = (state) => {
    return {
      products: state
    }
  }
  
export const mapDispatchToProps = (dispatch) => {
    return  {
      submitNewProduct :(prod) => {
        dispatch(addProduct(prod))
      } 
    }
  }
