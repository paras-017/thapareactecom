

const cartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            let {id, color, amount, product} = action.payload
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
           
    
        default:
            break;
    }

}

export default cartReducer