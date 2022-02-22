import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData'],
};

export default persistReducer(configStorage, rootReducer);
