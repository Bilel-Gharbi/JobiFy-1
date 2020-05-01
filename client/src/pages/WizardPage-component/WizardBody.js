import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setWizardForm, addFirstExperience } from "../../actions/ui";
import Button from "../../components/common/Button-component/Button";

import {
  FormUserInfo,
  FormUserResumeInfo,
  FormUserExperience,
  FormUserEducation,
  FormUserSkill,
} from "./WizardFormInfo";

const WizardBody = ({ wizardForm, setWizardForm, ...props }) => {
  const handelSubmit = () => {};

  const next = () => {
    setWizardForm(wizardForm++);
  };
  const pervious = () => {
    setWizardForm(wizardForm--);
  };

  useEffect(() => {
    //console.log(props.experience);
  }, []);
  const renderFormBody = () => {
    switch (wizardForm) {
      case 1:
        return (
          <>
            <h5>Please complete your personal Info</h5>
            <br />
            <FormUserInfo next={next} data={props.userInfo} />
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
              data={props.resumeInfo}
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
              data={props.experience}
              action={props.addFirstExperience}
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
              data={props.education}
            />
          </>
        );
      case 5:
        return (
          <>
            <h5>Please add a least one Skills</h5>
            <FormUserSkill next={next} pervious={pervious} data={props.skill} />
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
    userInfo: state.userProfile.user,
    resumeInfo: state.userProfile.resume.userResume,
    experience:
      state.userProfile.resume.experiences[
        state.userProfile.resume.experiences.length - 1
      ],
    education:
      state.userProfile.resume.educations[
        state.userProfile.resume.educations.length - 1
      ],

    skill: state.userProfile.resume.skills[state.userProfile.resume.skills - 1],
  };
};

export default connect(mapStateToProps, { setWizardForm, addFirstExperience })(
  WizardBody
);
