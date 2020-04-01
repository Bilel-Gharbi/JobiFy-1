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
  renderProfileTag() {
    const { isLoged, userType } = this.props.auth;
    const { user } = this.props.userProfile;
    const { company } = this.props.companyProfile;

    if (isLoged) {
      if (userType === "USER") {
        return (
          <Link to="/profile" href="#">
            <i className="fa fa-fw fa-user" />
            {user ? user.firstName : null}
          </Link>
        );
      }
      return (
        <Link to="/dashboard" href="#">
          <i className="fa fa-fw fa-user" />
          {company ? company.companyName : null}
        </Link>
      );
    }
  }

  renderLogoutBtn = () => {
    const { isLoged } = this.props.auth;
    if (isLoged) {
      return (
        <Link to="/home" onClick={this.logout}>
          <i className="fa fa-fw fa-sign-out" /> logout
        </Link>
      );
    }
    return (
      <Link to="/auth">
        <i className="fa fa-fw fa-sign-in" /> Login
      </Link>
    );
  };

  render() {
    console.log(this.props);
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
    auth: state.auth,
    userProfile: state.userProfile,
    companyProfile: state.companyProfile
  };
};
export default withRouter(connect(mapStateToProps, { logout })(Header));
