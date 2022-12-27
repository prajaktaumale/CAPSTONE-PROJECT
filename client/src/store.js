import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addPizzaReducer, getAllPizzasReducer, getPizzaByIdReducer } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducers'
import { registerReducer } from './reducers/userReducers'
import { loginReducer } from './reducers/userReducers'
import { placeOrderReducer } from './reducers/orderReducer'
import {getUserOrdersReducer} from './reducers/orderReducer'
import {getAllOrdersReducer} from './reducers/orderReducer'
import { getAllRestaurantReducer } from './reducers/restaurantReducer'
 import { addRestaurantReducer } from './reducers/restaurantReducer'
 import {editPizzaReducer} from './reducers/pizzaReducers'
 import {getRestaurantByIdReducer} from './reducers/restaurantReducer'
 import {editRestaurantReducer} from './reducers/restaurantReducer'
 import { adminRegisterReducer } from './reducers/adminReducer'
 import { adminloginReducer } from './reducers/adminReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerReducer: registerReducer,
    loginReducer : loginReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzaReducer :addPizzaReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllRestaurantReducer : getAllRestaurantReducer,
    addRestaurantReducer : addRestaurantReducer,
    getPizzaByIdReducer : getPizzaByIdReducer,
    editPizzaReducer : editPizzaReducer,
    adminRegisterReducer : adminRegisterReducer,
    adminloginReducer : adminloginReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginReducer:{
        currentUser: currentUser
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store