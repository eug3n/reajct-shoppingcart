import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col} from 'reactstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      cartProducts: []
    };

    this.updateCart = this.updateCart.bind(this);
  }
  
  updateCart(product) {
    let products = this.state.cartProducts;
    products.push(product);
    this.setState({ cartProducts: products});
  }

  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="9">
              <ProductList updateCart={this.updateCart}/>
            </Col>
            <Col xs="3">
              <Cart products={this.state.cartProducts} handler={this.updateCart} />
            </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
