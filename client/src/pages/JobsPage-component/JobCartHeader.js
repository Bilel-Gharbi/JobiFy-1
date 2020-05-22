import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { applyToJob, fetechJobDetails } from "../../actions/jobsAction";
import { withRouter } from "react-router-dom";
import ApplyButton from "./ApplyButton";
import DetailsButton from "./DetailsButton";
import SaveButton from "./SaveButton";

import { checkBeforeSave, checkBeforApply } from "../../helper";

const JobCartHeader = ({ data, isLoged, applyedJob, job, ...props }) => {
  const {
    companyName,
    jobPosition,
    JobContractType,
    jobMinSalary,
    jobMaxSalary,
    location,
    type,
  } = data;

  //save component
  const [saveDisabled, setSaveDisabled] = useState(
    checkBeforeSave(job.id, JSON.parse(localStorage.getItem("savedJobs")))
  );
  const [saveButtonProps, setSaveButtonProps] = useState({
    text: "Save",
    icon: null,
  });

  //apply button
  const [applyDisabled, setApplyDisabled] = useState(
    checkBeforApply(job.id, applyedJob)
  );
  const [applyButtonProps, setApplyButtonProps] = useState({
    text: "Apply",
    icon: null,
  });

  useEffect(() => {
    if (saveDisabled)
      setSaveButtonProps({ text: "Saved", icon: "flaticon2-check-mark" });

    if (applyDisabled)
      setApplyButtonProps({ text: "Applyed", icon: "flaticon2-check-mark" });
  }, []);

  const apply = () => {
    if (!isLoged) {
      props.history.push("/auth");
      return;
    }
    //dispatch action
    props.applyToJob(job.id);
    setApplyButtonProps({ text: "Applyed", icon: "flaticon2-check-mark" });
    setApplyDisabled(true);
  };

  const showDetails = () => {
    props.fetechJobDetails(job);
  };

  const save = () => {
    const savedJobs = localStorage.getItem("savedJobs");
    if (savedJobs) {
      const newSavedJobsTab = JSON.parse(savedJobs);
      newSavedJobsTab.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(newSavedJobsTab));
      setSaveButtonProps({ text: "Saved", icon: "flaticon2-check-mark" });
      setSaveDisabled(true);
    }
  };

  return (
    <>
      <div className="kt-widget__head">
        <div style={{ display: "grid" }}>
          <a className="kt-widget__username">{jobPosition}</a>
          <a className="kt-widget__username">
            {companyName}
            <i className="flaticon2-correct" />
          </a>
        </div>

        <div className="kt-widget__action" style={{ display: "flex" }}>
          <DetailsButton showDetails={showDetails} job={job} save={save} />
          &nbsp;
          {props.userType === "USER" ? (
            <ApplyButton
              apply={apply}
              disabled={applyDisabled}
              applyButtonProps={applyButtonProps}
              userInfo={{ info: props.userInfo, email: props.email }}
              isLoged={isLoged}
            />
          ) : null}
          &nbsp;
          <SaveButton
            save={save}
            disabled={saveDisabled}
            saveButtonProps={saveButtonProps}
          />
        </div>
      </div>
      {/* tags header */}
      <div className="kt-widget__subhead">
        <a>
          <i className="flaticon2-placeholder" />
          <b>{location}</b>
        </a>
        <a>
          <i className="flaticon2-new-email" />
          <b>{type}</b>
        </a>
        <a>
          <i className="flaticon2-calendar-3" />
          <b>{JobContractType}</b>
        </a>
        <a>
          <i className="flaticon2-placeholder" />
          <b>Averge Salary </b>
          {(parseInt(jobMaxSalary) + parseInt(jobMinSalary)) / 2} $
        </a>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.userType === "USER") {
    return {
      userInfo: state.userProfile.user,
      email: state.auth.email,
      userType: state.auth.userType,
    };
  }
  return { userType: state.auth.userType };
};

export default withRouter(
  connect(mapStateToProps, { applyToJob, fetechJobDetails })(JobCartHeader)
);
