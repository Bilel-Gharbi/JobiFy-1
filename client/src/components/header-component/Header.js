import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./header.css";

//import { ReactComponent as Logo } from "../../assets/Logo.svg";

class Header extends Component {
  state = {
    userName: "userName "
  };
  logout = () => {
    this.props.logout();
    this.props.history.push("/home");
  };
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg p-3 mb-5 mb-md-0 navbar-dark bg-primary rounded">
        <div className="container">
          <Link to="/home" className="navbar-brand d-40 text-center">
            JobiFY
          </Link>
          <button
            className="navbar-toggler is-active collapsed hamburger hamburger--elastic"
            type="button"
            data-toggle="collapse"
            data-target="#nav-inner-primary"
            aria-controls="nav-inner-primary"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" /> Menu
            </span>
          </button>
          <div className="collapse navbar-collapse" id="nav-inner-primary">
            <ul className="navbar-nav ml-lg-auto mt-md-0 mt-2">
              <li className="nav-item">
                <Link to="/jobs" className="nav-link" href="#">
                  Local Job
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/internationaljob" className="nav-link" href="#">
                  international Job
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-lg-auto mt-md-0 mt-2">
              <li className="nav-link">
                <Link to="/login" className="nav-link" href="#">
                  signUp
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="nav-inner-primary_dropdown_1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.userName}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="nav-inner-primary_dropdown_1"
                >
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" onClick={this.logout}>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default withRouter(connect(mapStateToProps, { logout })(Header));
