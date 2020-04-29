import React, { useRef, useEffect, useState, Component } from "react";
import { connect } from "react-redux";
import formProps from "../UserProfilePage-component/formCrudResume";
//import Form from "../../components/common/Form-component/Form";

const WizardBody = ({ wizardForm }) => {
  const renderFormBody = () => {
    const Form = React.lazy(() =>
      import("../../components/common/Form-component/Form")
    );
    switch (wizardForm) {
      case 1:
        return (
          <>
            <h5>Please complete your personal Info</h5>
            <br />
            <Form {...formProps["PersonalInfo"]} />
          </>
        );
      case 2:
        return (
          <>
            <h5>Please add you resume description </h5>
            <br />
            <Form {...formProps["UserResumeInfo"]} />
          </>
        );
      case 3:
        return (
          <>
            <h5>Please add a least one experience</h5>
            <br />
            <Form {...formProps["Experiences"]} />
          </>
        );
      case 4:
        return (
          <>
            <h5>Please add a least one education</h5>
            <br />
            <Form {...formProps["Educations"]} />
          </>
        );
      case 5:
        return (
          <>
            <h5>Please add a least one Skills</h5>
            <Form {...formProps["Skills"]} />
          </>
        );

      default:
        return (
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Please complete your personal Info to activate your profile</h3>
            <p>All filed are required make sure to complete it </p>
          </div>
        );
    }
  };
  return <div style={{ width: "80%", margin: "auto" }}>{renderFormBody()}</div>;
};

const mapStateToProps = (state) => {
  return {
    wizardForm: state.UI.wizardForm,
  };
};

export default connect(mapStateToProps)(WizardBody);
