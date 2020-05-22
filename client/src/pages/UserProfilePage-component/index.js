import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProfileRightDetails from "./ProfileRightDetails";
import ProfileLeftMenu from "./ProfileLeftMenu";

const UserProfilePage = ({ isActive, userType, isLoged, ...props }) => {
  useEffect(() => {
    if (!isLoged) props.history.push("/auth");
    if (!isActive) props.history.push("/info");
    if (userType === "COMPANY") props.history.push("/dashboard");
  }, [isActive, userType, isLoged]);
  return (
    <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
      <ProfileLeftMenu />
      <ProfileRightDetails />
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.isLoged && state.auth.userType === "USER") {
    return {
      isLoged: state.auth.isLoged,
      isActive: state.userProfile.user.active,
    };
  }
  return {
    userType: state.auth.userType,
  };
};

export default withRouter(connect(mapStateToProps)(UserProfilePage));
