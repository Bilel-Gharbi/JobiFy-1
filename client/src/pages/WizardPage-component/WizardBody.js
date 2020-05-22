import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/ui";
import { fetechUserData } from "../../actions/auth";
import Button from "../../components/common/Button-component/Button";

import {
  FormUserInfo,
  FormUserResumeInfo,
  FormUserExperience,
  FormUserEducation,
  FormUserSkill,
} from "./WizardFormInfo";

const WizardBody = ({
  wizardForm,
  setWizardForm,
  wizardFormData,
  ...props
}) => {
  const submitAllData = (e) => {
    e.preventDefault();
    props.AddUserWizardInfo();
    props.fetechUserData(localStorage.getItem("token")).then(() => {
      props.history.push("/profile");
    });
  };

  const next = (e) => {
    // e.preventDefault();
    setWizardForm(wizardForm + 1);
  };
  const pervious = (e) => {
    // e.preventDefault();
    setWizardForm(wizardForm - 1);
  };

  const renderFormBody = () => {
    switch (wizardForm) {
      case 1:
        return (
          <>
            <h5>Please complete your personal Info</h5>
            <br />
            <FormUserInfo
              next={next}
              data={wizardFormData.personalInfo}
              action={props.setWizardFormInfo}
            />
          </>
        );

      case 2:
        return (
          <>
            <h5>Please add you resume description </h5>
            <br />
            <FormUserResumeInfo
              next={next}
              pervious={pervious}
              data={wizardFormData.resumeInfo}
              action={props.setWizardFormResumeInfo}
            />
          </>
        );
      case 3:
        return (
          <>
            <h5>Please add a least one experience</h5>
            <br />
            <FormUserExperience
              next={next}
              pervious={pervious}
              data={wizardFormData.experience}
              action={props.setWizardFormExperience}
            />
          </>
        );
      case 4:
        return (
          <>
            <h5>Please add a least one education</h5>
            <br />
            <FormUserEducation
              next={next}
              pervious={pervious}
              data={wizardFormData.education}
              action={props.setWizardFormEducation}
            />
          </>
        );
      case 5:
        return (
          <>
            <h5>Please add a least one Skills</h5>
            <FormUserSkill
              next={next}
              pervious={pervious}
              data={wizardFormData.skill}
              action={props.setWizardFormSkill}
            />
          </>
        );

      case 6:
        return (
          <>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                gridGap: "20px",
              }}
            >
              <h5>Confirm and submit</h5>
              <div>
                <Button
                  className="btn btn-outline-brand btn-square"
                  onClick={() => pervious()}
                >
                  Pervious
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="btn btn-outline-brand btn-square"
                  type="submit"
                  onClick={submitAllData}
                >
                  Submit
                </Button>
              </div>
            </div>
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
            <div>
              <h3>
                Please complete your personal Info to activate your profile
              </h3>
              <p>All filed are required make sure to complete it </p>
            </div>

            <Button
              style={{ marginTop: "30px" }}
              className="btn btn-outline-brand btn-square"
              onClick={next}
            >
              Start
            </Button>
          </div>
        );
    }
  };

  return (
    <div style={{ position: "relative", width: "80%", margin: "auto" }}>
      {renderFormBody()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wizardForm: state.UI.wizardForm,
    wizardFormData: state.UI.wizardFormData,
  };
};

export default withRouter(
  connect(mapStateToProps, { ...actions, fetechUserData })(WizardBody)
);
