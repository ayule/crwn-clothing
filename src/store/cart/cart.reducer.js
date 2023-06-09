import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.UPDATE_CART:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
