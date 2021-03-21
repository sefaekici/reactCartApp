import React, { Component } from "react";
import CartSummary from "./CartSummary.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NorthWind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/*aşağıdaki açıklama çok önemli.*/}
                {/*bu şekilde class ismi nav-link yapılırsa görüntü nav-link olur ancak işlevi react-routerdaki link gibi olur.*/}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/form1" className="nav-link">
                  Form Demo1
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/form2" className="nav-link">
                  Form Demo2
                </Link>
              </NavItem>
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
