import React, {Component} from 'react';
import ProductItem from './ProductItem';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // ----------------------------FUNCTION----------------------------
  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product}/>
      })
    }
    return result;
  }

  // ----------------------------END FUNCTION----------------------------
  render() {
    //Props này nhận từ ProductsContainer
    var {products} = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* Product */}
          {this.showProducts(products)}
        </div>
      </section>
    );
  }
}


export default Products;