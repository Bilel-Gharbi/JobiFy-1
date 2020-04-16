import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup } from "../../actions/auth";

import "./authPage.css";

import Login from "../../components/login-component/Login";
import SignUp from "../../components/signUp-component/SignUp";

class AuthPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
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
const mapStateToPropos = (state) => {
  return { auth: state.auth, error: state.error };
};
export default withRouter(
  connect(mapStateToPropos, { login, signup })(AuthPage)
);
