import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup } from "../../actions/auth";
import Login from "../../components/Login-component";
import Signup from "../../components/Signup-component";

const AuthPage = ({ history, isLoged, error, login, signup, userType }) => {
  useEffect(() => {
    if (isLoged && userType === "USER") history.push("/profile");
    if (isLoged && userType === "COMPANY") history.push("/dashboard");
  }, [isLoged, userType]);

  const [formToDisplay, setFormToDisplay] = useState({
    displayLogin: true,
    displaySignup: false,
  });

  const handelClick = () => {
    setFormToDisplay((values) => ({
      displayLogin: !values.displayLogin,
      displaySignup: !values.displaySignup,
    }));
  };
  const { displayLogin, displaySignup } = formToDisplay;
  return (
    <div
      className="kt-login__container"
      style={{ width: "50%", margin: "10% auto 15% auto" }}
    >
      <>
        <div
          className="kt-login__logo"
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <a href="#" style={{ height: 130 }}>
            <img src="logo.png" />
          </a>
        </div>
        <div className="kt-login__signin" style={{ padding: "0 100px" }}>
          <div
            className="kt-login__head"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h3 className="kt-login__title">
              {displayLogin ? "Login To JobiFy" : "Signup To JobiFy"}
            </h3>
          </div>
          {/* component  */}

          {displayLogin && <Login login={login} err={error} />}
          {displaySignup && <Signup signup={signup} err={error} />}

          {/* component  */}
        </div>
      </>
      <>
        <div
          className="kt-login__account"
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <span className="kt-login__account-msg">
            {displayLogin
              ? "Don't have an account yet ?"
              : "You already have account"}
          </span>
          &nbsp;&nbsp;
          <a href="#" className="kt-login__account-link" onClick={handelClick}>
            {displayLogin ? <b>Create Account</b> : <b>Login</b>}
          </a>
        </div>
      </>
    </div>
  );
};

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
