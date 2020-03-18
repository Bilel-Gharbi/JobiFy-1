import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

class Header extends Component {
  render() {
    return (
      <nav className="navBar-container">
        <Link to="/jobs" className="option">
          JobOffer
        </Link>
        <Link to="/" className="option">
          Profile
        </Link>

        <Link to="/home" className="option">
          <div className="logo-container">
            <Logo className="logo" />
          </div>
        </Link>

        <Link to="/auth" className="option">
          SignUp
        </Link>
        <Link to="/company" className="option">
          Company
        </Link>
      </nav>
    );
  }
}

export default Header;
