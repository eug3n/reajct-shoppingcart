import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { products: state.products };
}

class Cart extends Component {

  renderProducts() {
    return this.props.products.map((product) => (
        <tr key={product.name}>
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

export default connect(mapStateToProps)(Cart);
