import React, { Component } from "react";

import Button from "../Button-component/Button";
import ReCaptcha from "../../common/ReCaptcha";
import InputText from "../InputText-component/inputText";

import "./Form.css";
class Form extends Component {
  state = {
    formState: {},
    formId: null,
    verifiedCaptcha: false,
  };

  componentWillMount() {
    //init from state depend from the formState props
    this.setState({ formState: { ...this.props.formState } });

    //set form default value for update
    if (this.props.formValue) {
      const {
        id,
        createdAt,
        updatedAt,
        ResumeId,
        ...defaultValue
      } = this.props.formValue;
      this.setState({ formState: { ...defaultValue }, formId: id });
    }
  }

  handelInputChange = (e) => {
    let name = e.target.name;
    let type = e.target.type;

    //check the type of input text to render and then we decide to set state depend on type
    type === "checkbox" || type === "radio"
      ? this.setState(
          {
            formState: {
              ...this.state.formState,
              [name]: !this.props.formState[name],
            },
          },
          () => {
            //change the value of input checkbox or radio from true to false
            this.props.formState[name] = !this.props.formState[name];
          }
        )
      : this.setState({
          formState: { ...this.state.formState, [name]: e.target.value },
        });
  };

  initInputForm() {
    //iterate over the state keys
    const { formState } = this.state;
    return (
      <div className="kt-form">
        <div className="kt-portlet__body">
          {formState &&
            Object.keys(formState).map((el, i) => {
              const { types, disabledFiled } = this.props;

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
                    value={formState[el]}
                    type={types[i]}
                    disabled={disabledFiled ? disabledFiled[i] : null}
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
    //console.log(this.state);
  };

  //captcha verfication function
  verifyCallback = (response) => {
    if (response) this.setState({ verifiedCaptcha: true });
  };

  render() {
    const { withSubmitButton, withReCaptcha } = this.props;

    return (
      <>
        <form onSubmit={this.onHandelSubmit}>
          {<>{this.initInputForm()}</>}
          <> {this.props.children} </>
          {withSubmitButton ? <Button type="submit">Form Button</Button> : null}

          {withReCaptcha ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReCaptcha verifyCallback={(res) => this.verifyCallback(res)} />
            </div>
          ) : null}
        </form>
      </>
    );
  }
}

export default Form;
