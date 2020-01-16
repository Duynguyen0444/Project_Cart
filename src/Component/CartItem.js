import React, {Component} from 'react';
import * as messages from '../Constants/Message';

class CartItem extends Component {
  // ----------------------------FUNCTION----------------------------
  subTotal = (price, quantity) => {
    return price * quantity;
  }
  onDelete =  product => {
    this.props.onDeleteProduct(product);
    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_CART);
  }
  // ----------------------------END FUNCTION----------------------------
  render() {
    //Nhận props item từ Cart
    var {item} = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"/>
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}
          </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.subTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            onClick={() => this.onDelete(item.product)}
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}


export default CartItem;;