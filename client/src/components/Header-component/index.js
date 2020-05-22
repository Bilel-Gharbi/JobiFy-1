import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import AuthButton from "./AuthButton";

import ProfileButton from "./ProfileButton";

const NewHeader = ({
  logout,
  companyProfile,
  userProfile,
  isLoged,
  userType,
}) => {
  return (
    <div
      id="kt_header"
      className="kt-header kt-grid__item  kt-header--fixed "
      data-ktheader-minimize="on"
    >
      <div
        className="kt-header__top"
        style={{ backgroundColor: "#4d91e4", height: 60 }}
      >
        <div className="kt-container ">
          {/* band photo */}
          <div className="kt-header__brand kt-grid__item">
            <div className="kt-header__brand-logo">
              <Link to="jobsPage">
                <img
                  alt="Logo"
                  src="logo.png"
                  className="kt-header__brand-logo-default"
                  style={{ height: "100px" }}
                />
              </Link>
            </div>
          </div>
          <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
            {isLoged ? (
              <ProfileButton
                userType={userType}
                logout={logout}
                companyProfile={companyProfile}
                userProfile={userProfile}
              />
            ) : (
              <AuthButton />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoged: state.auth.isLoged,
    userType: state.auth.userType,
    companyProfile: state.companyProfile,
    userProfile: state.userProfile,
  };
};
export default connect(mapStateToProps, { logout })(NewHeader);
