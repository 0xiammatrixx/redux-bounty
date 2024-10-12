// src/app/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from '../features/cartSlice';
import userReducer from '../features/userSlice';
import productReducer from '../features/productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  users: userReducer,
  products: productReducer,
  // Add other reducers here if necessary
});

export default rootReducer;
