import React, {Component} from 'react';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    var {children} = this.props;
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
              {/* CartItem + CartResult*/}
              {children}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;