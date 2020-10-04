import{CART_ADD_ITEM} from "../consents/cartConsent";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type){
        case CART_ADD_ITEM:
            const item = action.payload

            const itemExist = state.cartItems.find(k => 
                k.product === item.product)

            if(itemExist) {
                return{
                    ...state,
                    cartItems: state.cartItems.map((k) => 
                    k.product === itemExist.product ? item : k ),
                }
            }else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state;
    }
}