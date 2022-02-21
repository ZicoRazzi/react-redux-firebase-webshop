import cartTypes from './cart.types';

export const addProduct = (nextCartItems) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItems,
});

export const removeCartItem = (cartItem) => ({
  type: cartTypes.REMOVE_CART_ITEMS,
  payload: cartItem,
});

export const reduceCartItem = (cartItem) => ({
  type: cartTypes.REDUCE_CART_ITEM,
  payload: cartItem,
});
