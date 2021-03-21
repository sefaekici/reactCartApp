import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Product PerUnit</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((carts) => (
              <tr key={carts.product.id}>
                <th scope="row">{carts.product.id}</th>
                <td>{carts.product.productName}</td>
                <td>{carts.quantity}</td>
                <td>{carts.product.unitPrice}</td>
                <td>
                  {parseInt(carts.quantity) * parseInt(carts.product.unitPrice)}
                </td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => this.props.removeFromCart(carts.product)}
                  >
                    Delete Product
                  </Button>
                </td>
                <td>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => this.props.setQuantity(carts.product)}
                  >
                    Reduce Product
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
