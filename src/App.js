import React, {Component} from 'react';
import Header from './Component/Header';
import ProductsContainer from './Containers/ProductsContainer';
import MessageContainer from './Containers/MessageContainer';
import CartContainer from './Containers/CartContainer';
import Footer from './Component/Footer';
class App extends Component {
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
          <MessageContainer />
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
