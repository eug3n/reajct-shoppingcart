import React, { Component } from 'react';
import { CardColumns, Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

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

export default ProductList;