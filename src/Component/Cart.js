import React, {Component} from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th/>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {/* CartItem */}
              <CartItem/>
              <CartItem/>
              <CartItem/>
              {/* CartResult */}
              <CartResult />
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;