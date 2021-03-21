import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Badge,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
/*bu class yardımı ile component drilling sağlanmıştır 
burada app.js den gelen data önce Naviye naviden de cartSummary ye iletilmiştir.
Bu iletim işleminin adı component drilling dir.
*/
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart-{this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((carts) => (
            <DropdownItem key={carts.product.id}>
              <Row className="d-flex justify-content-between">
                <Col>{carts.product.productName}</Col>
                <Col>
                  <Badge color="success">{carts.quantity}</Badge>
                </Col>
                <Col>
                  <Button
                    onClick={() => this.props.removeFromCart(carts.product)}
                    color="danger"
                    size="sm"
                  >
                    Delete From Cart
                  </Button>
                </Col>
              </Row>
              {/*burada divider ile her ürün arasına bir adet boşluk yerleştirilir.*/}
              <DropdownItem divider />
            </DropdownItem>
          ))}
          <DropdownItem>
            <Link to="cart">Go From Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Cart is Empty</NavLink>
      </NavItem>
    );
  }

  render() {
    //burada yapılan işlem eğer cart boşsa boş bir div döndür dolu ise cartı göster işlemidir.
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
