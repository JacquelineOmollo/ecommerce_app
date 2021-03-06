import{ createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import{ composeWithDevTools} from "redux-devtools-extension";
import {productReducer, productDetailsReducer} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";

const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
    })

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
    

const initialState = {
    cart:{ 
        cartItems: cartItemsFromStorage,
        // shippingAddress: shippingAddressFromStorage,
      },
    //   userLogin: { userInfo: userInfoFromStorage },
    }

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

    export default store;