

const cartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            let {id, color, amount, product} = action.payload

            // Tackle the existing product
            let existingProduct = state.cart.find((curItem)=>curItem.id===id+color)
             
            if(existingProduct){
               let updatedProduct = state.cart.map((curElem)=>{
                if(curElem.id === id+color){
                    let newAmount = curElem.amount + amount
                    if(newAmount >= curElem.max){
                         newAmount = curElem.max
                    }
                    return {
                     ...curElem,
                     amount: newAmount
                 }
                }else{
                    return curElem
                }
               })
              return{
                ...state,
                cart: updatedProduct
              }
            }else{
                let cartProduct;
                cartProduct = {
                    id:id+color,
                    name:product.name,
                    color,
                    amount,
                    image:product.image[0].url,
                    price:product.price,
                    max: product.stock
                }
                return {
                    ...state,
                    //adding product to cart without disturbing the previous products in card
                    cart:[...state.cart, cartProduct]
                }
            }           

         

        case 'REMOVE_ITEM': 
           let updatedCart = state.cart.filter((curItem)=>curItem.id !== action.payload)
           return {
            ...state,
            cart:updatedCart
           }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
              };

        default:
            break;
    }

}

export default cartReducer