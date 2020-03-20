import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

import "./loginPage.css";

import {} from "../../actions";
class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidUpdate() {
    if (this.props.auth.isLoged) {
      this.props.history.push("/jobs");
    }
  }
  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.login({ ...this.state });
    //this.props.auth.isLoged ? this.props.
  };
  handelChange = e => {
    const name = e.target.name;
    //console.log(e.target);
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { password, email } = this.state;
    return (
      <div className="page-container">
        <div className="login">
          <form onSubmit={this.handelSubmit}>
            <h3>Login </h3>
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

        <div className="signup">
          <form onSubmit={this.handelSubmit}>
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
      </div>
    );
  }
}
const mapStateToPropos = state => {
  return { auth: state.auth };
};
export default connect(mapStateToPropos, { login })(LoginPage);
