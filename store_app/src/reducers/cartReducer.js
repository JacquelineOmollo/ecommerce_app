import{CART_ADD_ITEM,
     CART_REMOVE_ITEM, 
     CART_SAVE_PAYMENT_METHOD, 
     CART_SAVE_SHIPPING_ADDRESS} from "../consents/cartConsent";

export const cartReducer = (state = {cartItems: [], shippingAddress: {}}, action) => {
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

            case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.product !== action.payload),
                }
                case CART_SAVE_SHIPPING_ADDRESS:
                return {
                    ...state,
                    shippingAddress: action.payload,
                }
                case CART_SAVE_PAYMENT_METHOD:
                return {
                    ...state,
                    paymentMethod: action.payload,
                }
        default:
            return state;
    }
}