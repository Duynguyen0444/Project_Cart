import React, { Component } from 'react';
import ProductItem from './ProductItem';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
              {/* Product */}
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </section>            
        );
    }
}
 
export default Products;