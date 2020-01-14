import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../Component/Products';
import ProductItem from '../Component/ProductItem';

class ProductsContainer extends Component {
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
        //Truyền props dạng children
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }
}
const mapStateToProps = state => {
  return {products: state.products}
}

export default connect(mapStateToProps, null)(ProductsContainer);