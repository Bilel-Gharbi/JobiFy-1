import React, { Component } from "react";

import "./signup.css";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
    disabled: ""
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //action sign up
    this.props.signUp({ ...this.state });
  };
  handelChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
    this.state.password !== this.state.confirmPassword &&
    this.state.password.length > 0 &&
    this.state.password.length > 0
      ? this.setState({ [name]: e.target.value, disabled: true })
      : this.setState({ [name]: e.target.value, disabled: false });

    console.log(this.state);
  };
  render() {
    console.log(this.props);
    const { email, password, confirmPassword } = this.state;
    return (
      <>
        <div className="signup">
          <form onSubmit={this.handelSubmit}>
            <h3>Create new account </h3>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              {this.props.err.id === "signup" && this.props.err.message ? (
                <div className="alert alert-danger" role="alert">
                  {this.props.err.message}
                </div>
              ) : null}
              <input
                type="email"
                name="email"
                id="eamil"
                className="form-control"
                value={email}
                placeholder="email"
                onChange={this.handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                className="form-control"
                placeholder="confirmPassword"
                onChange={this.handelChange}
              />
            </div>
            {this.state.password !== this.state.confirmPassword &&
            this.state.confirmPassword !== "" ? (
              <div className="alert alert-danger" role="alert">
                Passwords are not matching
              </div>
            ) : null}

            <div className="form-group">
              <label htmlFor="inputState">Company or User </label>
              <select
                id="inputState"
                name="type"
                onChange={this.handelChange}
                value={this.state.type}
                className="form-control"
                required
              >
                <option value="">choose ...</option>
                <option value="USER">Candidate</option>
                <option value="COMPANY">Company</option>
              </select>
            </div>

            <button
              disabled={this.state.disabled}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
