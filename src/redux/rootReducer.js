import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});
