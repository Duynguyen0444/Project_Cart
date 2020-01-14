import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../Component/Products';
import ProductItem from '../Component/ProductItem';
import PropTypes from 'prop-types';

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

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
  return {products: state.products}
}

export default connect(mapStateToProps, null)(ProductsContainer);