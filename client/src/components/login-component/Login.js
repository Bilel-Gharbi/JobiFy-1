import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.login({ ...this.state });
  };
  handelChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="login">
          <form onSubmit={this.handelSubmit}>
            <h3>Login </h3>
            {this.props.err.id === "login" && this.props.err.message ? (
              <div className="alert alert-danger" role="alert">
                {this.props.err.message}
              </div>
            ) : null}

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="eamil"
                className="form-control"
                value={email}
                placeholder="email"
                onChange={this.handelChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
