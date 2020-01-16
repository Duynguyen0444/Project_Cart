import * as types from '../Constants/ActionType';

//Lưu trên localstorage
var data = JSON.parse(localStorage.getItem('cart'));
var initialstate = data
  ? data
  : '';

//Tìm vị trí sản phẩm trong mảng
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) { //Id của sản phẩm trong giỏ = sản phẩm định mua
        index = i;
        break;
      }
    }
  }
  return index;
}

const cart = (state = initialstate, action) => {
  var {product, quantity} = action;
  var index = -1;
  switch (action.type) {
      //----------------Add product to cart----------------
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({product, quantity});
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state]
      //----------------Delete product in cart----------------
    case types.DELETE_PRODUCT_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state));
      return [...state];
    default:
      return [...state]

  }
}

export default cart;