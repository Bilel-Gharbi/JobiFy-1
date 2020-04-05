import React, { Component } from "react";

import Button from "../Button-component/Button";
import InputText from "../InputText-component/inputText";

class Form extends Component {
  state = {};

  componentDidMount() {
    //init from state depend from the formState props
    this.setState({ ...this.props.formState }, () => console.log(this.state));
  }

  handelInputChange = e => {
    let name = e.target.name;
    let type = e.target.type;

    //check the type of input text to render and then we decide to set state depend on type
    type === "checkbox" || type === "radio"
      ? this.setState({ [name]: !this.props.formState[name] }, () => {
          //change the value of input checkbox or radio from true to false
          this.props.formState[name] = !this.props.formState[name];
          //console.log(this.state);
        })
      : this.setState({ [name]: e.target.value }, () =>
          console.log(this.state)
        );
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
              ref={this.FormRef}
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
    //button
    const { withSubmitButton } = this.props;

    return (
      <form onSubmit={this.onHandelSubmit}>
        {<div>{this.initInputForm()}</div>}
        <div> {this.props.children} </div>
        {withSubmitButton ? <Button type="submit">Form Button</Button> : null}
      </form>
    );
  }
}

export default Form;
