import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col} from 'reactstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="9">
              <ProductList />
            </Col>
            <Col xs="3">
              <Cart />
            </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
