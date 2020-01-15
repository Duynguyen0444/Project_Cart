import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Component/Cart';
import CartItem from '../Component/CartItem';
import CartResult from '../Component/CartResult';
import * as Message from '../Constants/Message';

class CartContainer extends Component {
  // ----------------------------FUNCTION---------------------------- Show các sản
  // phẩm trong giỏ
  showCartItem = cart => {
    var result = <tr>
      <td>{Message.MSG_EMPTY_CART}</td>
    </tr>
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item}/>
      })
    }
    return result;
  }

  //Tính tổng tiền các sản phẩm trong giỏ hàng
  showTotalAmount = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}/>
    }
    return result;
  }

  // ----------------------------END FUNCTION----------------------------
  render() {
    var {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount((cart))}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    }),
    quantity: PropTypes.number.isRequired
  })).isRequired
}

const mapStateToProps = state => {
  return {cart: state.cart}
}

export default connect(mapStateToProps, null)(CartContainer);