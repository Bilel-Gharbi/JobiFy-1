import React, { Component } from "react";
import { connect } from "react-redux";
import { login, signup } from "../../actions/auth";

import "./authPage.css";

import Login from "../../components/login-component/Login";
import SignUp from "../../components/signUp-component/SignUp";

import {} from "../../actions";
class AuthPage extends Component {
  componentDidUpdate() {
    if (this.props.auth.isLoged) {
      this.props.history.push("/profile");
    }
  }

  render() {
    return (
      <div className="page-container">
        <Login login={this.props.login} err={this.props.error} />
        <SignUp signUp={this.props.signup} err={this.props.error} />
      </div>
    );
  }
}
const mapStateToPropos = state => {
  return { auth: state.auth, error: state.error };
};
export default connect(mapStateToPropos, { login, signup })(AuthPage);
