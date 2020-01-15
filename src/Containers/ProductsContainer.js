import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../Component/Products';
import ProductItem from '../Component/ProductItem';
import PropTypes from 'prop-types';
import * as actions from '../Actions/index';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // ----------------------------FUNCTION----------------------------
  showProducts = products => {
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
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
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {products: state.products}
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onAddToCart: product =>{
      dispatch(actions.actAddToCart(product, 1));
    },  
    onChangeMessage: message => {
      dispatch(actions.actChangeMessage(message));
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);