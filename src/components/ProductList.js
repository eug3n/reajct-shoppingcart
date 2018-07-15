import React, { Component } from 'react';
import { CardColumns, Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateCart } from '../actions/index';

const mapStateToProps = state => {
    return { products: state.products };
}

const mapDispatchToProps = dispatch => {
    return {
      updateCart: product => dispatch(updateCart(product))
    };
};

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'products': [
                {'name': 'Apple', 'price': 1},
                {'name': 'Banana', 'price': 2},
                {'name': 'Plum', 'price': 4}
            ]
        }
    }

    renderProducts() {
        return this.state.products.map((product) => (
                <Card key={product.name}>
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>${product.price}</CardText>
                        <Button onClick={() => this.props.updateCart(product)}>Add to cart</Button>
                    </CardBody>
                </Card>
            )
        );
    }

    render() {
        return (
            <div>
            <h2>Product List</h2>
            <CardColumns>{this.renderProducts()}</CardColumns>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);