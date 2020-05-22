import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createCompanyProfileInfo } from "../../actions/comapny";

import WizardMenu from "./WizardMenu";
import WizardBody from "./WizardBody";
import { FormCompanyInfo } from "./WizardFormInfo";

const WizardPage = ({ isLoged, isActive, userType, history, ...props }) => {
  useEffect(() => {
    if (isLoged && isActive && userType === "COMPANY") {
      console.log("rr");
      history.push("/dashboard");
    }
    if (isLoged && isActive && userType === "USER") history.push("/profile");
    if (!isLoged) history.push("/auth");
  }, [isLoged, isActive, userType]);

  const renderWizard = () => {
    if (userType === "COMPANY") {
      return (
        <div className="kt-portlet" style={{ margin: "0% 20%" }}>
          <FormCompanyInfo action={props.createCompanyProfileInfo} />
        </div>
      );
    }
    return (
      <>
        <WizardMenu />
        <WizardBody />
      </>
    );
  };
  return (
    <div
      className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app"
      style={{ display: "grid" }}
    >
      {renderWizard()}
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
  } else if (state.auth.isLoged && state.auth.userType === "COMPANY") {
    return {
      isLoged: state.auth.isLoged,
      isActive: state.companyProfile.company.active,
      userType: state.auth.userType,
    };
  }
};

export default withRouter(
  connect(mapStateToProps, { createCompanyProfileInfo })(WizardPage)
);
