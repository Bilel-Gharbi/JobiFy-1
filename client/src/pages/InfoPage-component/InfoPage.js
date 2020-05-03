import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { signup } from "../../actions/auth";

const InfoPage = () => {
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
      style={{ width: "50%", margin: "15% auto auto" }}
    >
      <>
        <div
          className="kt-login__logo"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href="#">
            <img src="assets/media/logos/logo-5.png" />
          </a>
        </div>
        <div className="kt-login__signin">
          <div
            className="kt-login__head"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h3 className="kt-login__title">
              {displayLogin ? "Login To JobiFy" : "Signup To JobiFy"}
            </h3>
          </div>

          {displayLogin && <Login />}
          {displaySignup && <Signup />}
        </div>
      </>
      {/* base  */}
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

export default InfoPage;
