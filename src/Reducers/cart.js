import * as types from '../Constants/ActionType';

//Lưu trên localstorage
var data = JSON.parse(localStorage.getItem('CART'));
var initialstate = [
  {
    product: {
      id: 1,
      name: 'iPhone X',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphon' +
          'eX-spacegray_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=15484599441' +
          '79',
      price: 1000,
      description: 'Apple',
      inventory: 10,
      rating: 3
    },
    quantity: 8
  }, {
    product: {
      id: 2,
      name: 'iPhone 11',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-sel' +
          'ect-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&' +
          'amp;.v=1567022175704',
      price: 700,
      description: 'Apple in California',
      inventory: 20,
      rating: 4
    },
    quantity: 11
  }
];

const cart = (state = initialstate, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state]
    default:
      return [...state]
  }
}

export default cart;