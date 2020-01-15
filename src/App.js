import React, {Component} from 'react';
import Header from './Component/Header';
import ProductsContainer from './Containers/ProductsContainer';
import Message from './Component/Message';
import CartContainer from './Containers/CartContainer';
import Footer from './Component/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      {/* Header */}
      <Header/>      
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <ProductsContainer />          
          {/* Message */}
          <Message />
          {/* Cart */}
          <CartContainer />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>      
    )
  }
}

export default App;
