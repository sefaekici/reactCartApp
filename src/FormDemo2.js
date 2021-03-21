import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 3);
    alertify.success(this.state.password + " added to db!", 3);
    alertify.success(this.state.city + " added to db!", 3);
    alertify.success(this.state.description + " added to db!", 3);
  };

  render() {
    var array = [
      "İstanbul",
      "Ankara",
      "Samsun",
      "Sakarya",
      "İzmir",
      "Rize",
      "Trabzon",
      "Ardahan",
      "Gümüşhane",
      "Bayburt",
      "Eskişehir",
      "Konya",
      "Uşak",
      "Tokat",
    ];
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="m-2 p-1">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email!"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
              placeholder="Please select your city!"
            >
              {array.map((cities) => (
                <option>{cities}</option>
              ))}
            </Input>
          </FormGroup>
          <Button
            type="submit"
            onSubmit={this.handleSubmit}
            size="lg"
            color="primary"
            block
          >
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
