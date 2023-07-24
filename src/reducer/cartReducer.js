

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
    
        case 'SET_DECREMENT':
            let updatedProductData = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                  let decAmount = curElem.amount - 1;
          
                  if (decAmount <= 1) {
                    decAmount = 1;
                  }
          
                  return {
                    ...curElem,
                    amount: decAmount,
                  };
                } else {
                  return curElem;
                }
              });
              return { ...state, cart: updatedProductData };
    
        case 'SET_INCREMENT':
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload) {
                  let incAmount = curElem.amount + 1;
          
                  if (incAmount >= curElem.max) {
                    incAmount = curElem.max;
                  }
          
                  return {
                    ...curElem,
                    amount: incAmount,
                  };
                } else {
                  return curElem;
                }
              });
              return { ...state, cart: updatedProduct };

        default:
            return {
                ...state
            }
    }

}

export default cartReducer