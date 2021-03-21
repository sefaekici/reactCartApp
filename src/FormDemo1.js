import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = {
    userName: "",
    city: "",
  };

  setChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };
  setChangeCity = (event) => {
    let name = event.target.name;

    this.setState({ [name]: event.target.value });
  };

  onSubmitHandler = (event) => {
    //submit işleminde oluşucak yenileme özelliğini ortadan kaldırır.
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label>
            User Name:
            <input
              name="userName"
              type="text"
              onChange={this.setChangeName}
            ></input>
          </label>
          <br></br>
          <label>
            City:
            <input
              name="city"
              type="text"
              onChange={this.setChangeCity}
            ></input>
          </label>

          <h5>User Name is {this.state.userName}</h5>
          <h5>User Name is {this.state.city}</h5>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
