import React, { Component } from "react";

import Button from "../Button-component/Button";
import InputText from "../InputText-component/inputText";

class Form extends Component {
  state = {};

  componentDidMount() {
    //init from state depend from the formState props
    this.setState({ ...this.props.formState });
    console.log(this.state);
  }

  handelInputChange = e => {
    let name = e.target.name;
    let type = e.target.type;

    //check the type of input text to render and then we decide to set state depend on type
    type == "checkbox" || type == "radio"
      ? this.setState({ [name]: !this.state.name })
      : this.setState({ [name]: e.target.value });

    console.log(this.state);
  };

  initInputForm() {
    //iterate over the state keys
    // this.props.type array to check the type
    return (
      this.state &&
      Object.keys(this.state).map((el, i) => {
        return (
          <div key={el}>
            <InputText
              id={el}
              name={el}
              label={el}
              placeholder={`${el} placeholder`}
              onChange={this.handelInputChange}
              value={this.state[el]}
              type={this.props.types[i]}
            />
          </div>
        );
      })
    );
  }

  onHandelSubmit = e => {
    e.preventDefault();

    //action passed to the form
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onHandelSubmit} ref={this.myRef}>
        hello
        <div> {this.props.children} </div>
        {<div>{this.initInputForm()}</div>}
        <Button type="submit">Form Button</Button>
      </form>
    );
  }
}

export default Form;
