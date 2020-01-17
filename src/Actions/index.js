import * as types from '../Constants/ActionType';

export const actAddToCart = (product, quantity) => {
  return {type: types.ADD_TO_CART, product, quantity}
}
export const actChangeMessage = message => {
  return {type: types.CHANGE_MESSAGE, message}
}
export const actRemoveProductCart = product => {
  return {type: types.DELETE_PRODUCT_CART, product}
}

export const actUpdateProductInCart = (quantity, product) => {
  return {type: types.UPDATE_PRODUCT_IN_CART, quantity, product}
}