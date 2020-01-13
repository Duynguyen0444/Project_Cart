import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../Component/Products';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var {products} = this.props;
        return (  
            <Products products={products} />
        );
    }
}
const mapStateToProps = state => {
    return {products: state.products}
  }
 
export default connect(mapStateToProps,null)(ProductsContainer);