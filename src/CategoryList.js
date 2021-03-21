import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  //componentler yerleşti kategorileri getir bu her state değişiminde çalışacağı için bu sayede datalar sürekli güncel şekilde çekilmiş olur.
  componentDidMount() {
    this.getCategories();
  }

  //api dan verinin çekilmesi işlemi
  getCategories = () => {
    //api ın çalıştığı adres fetche verilir
    fetch("http://localhost:3000/categories")
      //gelen response jsona çevrilir
      .then((response) => response.json())
      //çevrilen response data isimli değişkene atanır ve bu atanan değişkenle state içinde bulunan categories set edilir.
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.data.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            /*verilen key değeri oluşturulan her list group itemi birbirinden ayrıacak değerler için oluştururlur
            bu sayede üzerinde işlem istediğimizde id ye göre işlem yapabiliriz.
            */
            <ListGroupItem
              //active seçeneğinde eşitse true döndür değilse false döndür
              active={
                this.props.currentCategory === category.categoryName
                  ? true
                  : false
              }
              //onClick eventi tıklama işlemi gerçekleştiğinde çalışır.
              onClick={() => this.props.changeCategoryFunction(category)}
              //key özelleştirmek için kullanılır oluşan her item eşsiz olur.
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
