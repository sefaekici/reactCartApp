import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList.js";
import Navi from "./Navi.js";
import ProductList from "./ProductList.js";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import NotFound from "./NotFound.js";
import CartList from "./CartList.js";
import FormDemo1 from "./FormDemo1.js";
import FormDemo2 from "./FormDemo2.js";

export default class App extends Component {
  state = {
    currentCategory: "Kategori Seçilmedi",
    products: [],
    cart: [],
    totalPrice: 0,
  };

  //sepete ekleme işlemi yapıcak olan fonksiyon
  addToCart = (product) => {
    /*concat fonksiyonu bizim yukarıdaki stati kopyalar*/
    let newArray = this.state.cart;
    //item daha önceden var mı o kontrol edilir.
    var addedItem = newArray.find((c) => c.product.id === product.id);
    //eğer olan item ise quantity sayısı arttırılır.
    if (addedItem) {
      addedItem.quantity += 1;
    }
    //değilse item eklenir
    else {
      newArray.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newArray });
    //alertify js ile alert gösterme işlemi 1 saniye ekranda kalması sağlanmıştır.
    alertify.success(product.productName + " Added From Cart", 1);
  };

  removeFromCart = (product) => {
    //Burada yapılan işlem gönderilen parametredeki producta idsi eşit olmayanları bulmaktır.
    let newArray = this.state.cart.filter((c) => c.product.id !== product.id);

    this.setState({ cart: newArray });

    alertify.error(product.productName + " Deleted From Cart", 1);
  };

  //Adet sayısını azaltır.
  setQuantity = (product) => {
    let newArray = this.state.cart;
    var reduceItem = newArray.find((c) => c.product.id === product.id);
    //bu sayede sayısı 1 den küçükse itemi direkt sepetten siler.
    if (reduceItem.quantity > 1) {
      reduceItem.quantity -= 1;
      this.setState({ cart: newArray });
    } else {
      this.removeFromCart(product);
    }
  };

  /*currentCategory Statenin üzerinde değişiklik yapıcak fonksiyon*/
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((data) => data.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryList = {
      title: "Category List",
      message: "Merhabalar ben category listin mesajıyım",
    };

    let productList = {
      title: "Product List",
      message: "Merhabalar ben product listin mesajıyım",
    };

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />

          <Row className="m-5">
            <Col>
              {/*switch sayesinde içerisine verilen routelar sırasayıla kontrol edilir hangi path uyuyorsa o component gösterilir.*/}
              <Switch>
                {/*exact path='/' anasayfayı işaret eder exact path='/cart' dersek eğer bu sayede anasayfanın pathini yazmamız gerekmez.*/}
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Row>
                      <Col xs="3">
                        <CategoryList
                          currentCategory={this.state.currentCategory}
                          changeCategoryFunction={this.changeCategory}
                          data={categoryList}
                        ></CategoryList>
                      </Col>
                      <Col xs="9">
                        <ProductList
                          {...props}
                          addToCart={this.addToCart}
                          products={this.state.products}
                          currentCategory={this.state.currentCategory}
                          data={productList}
                        ></ProductList>
                      </Col>
                    </Row>
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      removeFromCart={this.removeFromCart}
                      setQuantity={this.setQuantity}
                      cart={this.state.cart}
                    ></CartList>
                  )}
                ></Route>
                <Route exact path="/form1" component={FormDemo1}></Route>
                <Route exact path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
