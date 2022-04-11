import { createStore } from 'redux'
const ADD = "ADD"
const REMOVE = 'REMOVE'
const CLEAR = 'CLEAR'
const messageReducer = (p = [], action) => {
    switch (action.type) {
        case ADD:  
        return [...p, action.prd]
        case CLEAR: 
        return []
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

const removeProduct = (product) => {
  return {
    type: REMOVE, 
    prd: product
  }
} 
const clearProducts =  () => {
  return {
    type: CLEAR,
    prd: null
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
      } , 
      clear: () => {
        dispatch(clearProducts())
      }, 
      removeAProduct: (prod) => {
        dispatch(removeProduct(prod))
      }
    }
  }
