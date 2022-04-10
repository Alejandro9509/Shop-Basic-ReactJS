ADD = "ADD"
REMOVE = "REMOVE"

const Products = [

]

const Reducer = (p = [], action) => {
    switch (action.type) {
        case ADD: 
            Products.push(action.producto)
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
            producto
        }, 
        {
            type: REMOVE, 
            producto
        }
    )
}