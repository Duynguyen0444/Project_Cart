import React, {Component} from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {    
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* Product */}
          {this.props.children}          
        </div>
      </section>
    );
  }
}


export default Products;