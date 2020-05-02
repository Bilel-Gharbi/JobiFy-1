import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup } from "../../actions/auth";

import "./authPage.css";

import Login from "../../components/login-component/Login";
import SignUp from "../../components/signUp-component/SignUp";

function AuthPage({ history, isLoged, error, login, signup, userType }) {
  useEffect(() => {
    if (isLoged && userType === "USER") history.push("/profile");
    if (isLoged && userType === "COMPANY") history.push("/dashbord");
  }, [isLoged, userType]);

  return (
    <div className="page-container">
      <Login login={login} err={error} />
      <SignUp signUp={signup} err={error} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged,
    userType: state.auth.userType,
    error: state.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { login, signup })(AuthPage)
);
