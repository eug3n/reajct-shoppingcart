import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getSessionData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return JSON.parse(localStorage.getItem(key));
  }

  renderProducts() {
    return this.props.products.map((product) => (
        <tr>
          <td>{product.name}</td>
          <td>${product.price}</td>
        </tr>
        )
    );
  }

  getTotal() {
    return this.props.products.reduce((sum, product) => sum + product.price, 0);
  }
  
  render() {
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProducts()}
          </tbody>
          <tfoot>
            <tr>
              <td>Sum</td>
              <td>${this.getTotal()}</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default Cart;
