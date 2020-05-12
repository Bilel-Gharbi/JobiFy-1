import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createCompanyProfileInfo } from "../../actions/comapny";

import WizardMenu from "./WizardMenu";
import WizardBody from "./WizardBody";
import { FormCompanyInfo } from "./WizardFormInfo";

const WizardPage = ({ isLoged, isActive, userType, history, ...props }) => {
  useEffect(() => {
    if (isLoged && isActive && userType === "COMPANY")
      history.push("/dashboard");
    if (isLoged && isActive && userType === "USER") history.push("/profile");
    if (!isLoged) history.push("/");
  }, [isLoged, isActive]);

  const renderWizard = () => {
    if (userType === "COMPANY") {
      return (
        <>
          <FormCompanyInfo action={props.createCompanyProfileInfo} />
        </>
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
  }
  if (state.auth.isLoged && state.auth.userType === "COMPANY") {
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
