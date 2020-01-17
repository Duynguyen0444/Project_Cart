import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Component/Cart';
import CartItem from '../Component/CartItem';
import CartResult from '../Component/CartResult';
import * as Message from '../Constants/Message';
import * as actions from '../Actions/index';

class CartContainer extends Component {
  // ----------------------------FUNCTION---------------------------- Show các sản
  // phẩm trong giỏ
  showCartItem = cart => {
    var result = <tr>
      <td>{Message.MSG_EMPTY_CART}</td>
    </tr>
    var {onDeleteProduct, onChangeMessage, onUpdateProductInCart} = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem
          key={index}
          item={item}
          onDeleteProduct={onDeleteProduct}
          onChangeMessage={onChangeMessage}
          onUpdateProductInCart={onUpdateProductInCart}/>
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
  })).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {cart: state.cart}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: product => {
      dispatch(actions.actRemoveProductCart(product));
    },
    onChangeMessage: message => {
      dispatch(actions.actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actions.actUpdateProductInCart(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);