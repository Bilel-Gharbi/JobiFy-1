import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./header.css";

class Header extends Component {
  logout = () => {
    this.props.logout();
    this.props.history.push("/home");
  };
  renderProfileTag = () => {
    const { isLoged, profile } = this.props.auth;
    if (isLoged) {
      return (
        <Link to="/profile" href="#">
          <i className="fa fa-fw fa-user" />
          {profile.firstName}
        </Link>
      );
    }
  };

  renderLogoutBtn = () => {
    const { isLoged } = this.props.auth;
    if (isLoged) {
      return (
        <a onClick={this.logout}>
          <i className="fa fa-fw fa-sign-out" /> logout
        </a>
      );
    }
    return (
      <Link to="/auth" href="#">
        <i className="fa fa-fw fa-sign-in" /> Login
      </Link>
    );
  };

  render() {
    return (
      <div className="navbar">
        <Link to="/home" className="active" href="#">
          <i className="fa fa-fw fa-home" /> Home
        </Link>
        <Link to="/jobs" href="#">
          <i className="fa fa-fw fa-suitcase" /> local job
        </Link>
        <Link to="/internationaljob" href="#">
          <i className="fa fa-fw fa-globe" /> international job
        </Link>
        {this.renderProfileTag()}
        {this.renderLogoutBtn()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default withRouter(connect(mapStateToProps, { logout })(Header));
