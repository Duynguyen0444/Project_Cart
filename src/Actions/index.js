import * as types from '../Constants/ActionType';

export const actAddToCart = (product, quantity) => {
  return {type: types.ADD_TO_CART, product, quantity}
}