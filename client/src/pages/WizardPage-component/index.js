import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WizardMenu from "./WizardMenu";
import WizardBody from "./WizardBody";

const WizardPage = ({ isLoged, isActive, userType, history }) => {
  useEffect(() => {
    if (isLoged && userType === "COMPANY") history.push("/dashbord");
    if (isLoged && isActive) history.push("/profile");
    if (!isLoged) history.push("/");
  }, [isLoged]);
  return (
    <div
      className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app"
      style={{ display: "grid" }}
    >
      <WizardMenu />
      <WizardBody />
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.isLoged && state.auth.userType === "USER") {
    return {
      isLoged: state.auth.isLoged,
      isActive: state.userProfile.user.active,
      userType: state.auth.userType,
    };
  }
  return {
    isLoged: state.auth.isLoged,
    userType: state.auth.userType,
  };
};

export default withRouter(connect(mapStateToProps)(WizardPage));
