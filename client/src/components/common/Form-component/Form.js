import React, { Component } from "react";

import Button from "../Button-component/Button";
import InputText from "../InputText-component/inputText";

import "./Form.css";
class Form extends Component {
  state = {};

  componentWillMount() {
    //init from state depend from the formState props
    this.setState({ ...this.props.formState }, () => console.log(this.state));
  }

  handelInputChange = (e) => {
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
      <div className="kt-form">
        <div className="kt-portlet__body">
          {this.state &&
            Object.keys(this.state).map((el, i) => {
              return (
                <div key={el} className="form-group">
                  <InputText
                    key={el}
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
            })}
        </div>
      </div>
    );
  }

  onHandelSubmit = (e) => {
    e.preventDefault();

    //action passed to the form
    console.log(this.state);
  };

  render() {
    //button
    const { withSubmitButton } = this.props;

    return (
      <form onSubmit={this.onHandelSubmit}>
        {<>{this.initInputForm()}</>}
        <> {this.props.children} </>
        {withSubmitButton ? <Button type="submit">Form Button</Button> : null}
      </form>
    );
  }
}

export default Form;
