import React, {Component} from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
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

const mapStateToProps = state => {
  return {products: state.products}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);