import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { applyToJob, fetechJobDetails } from "../../actions/jobsAction";
import { withRouter } from "react-router-dom";
import ApplyButton from "./ApplyButton";
import DetailsButton from "./DetailsButton";
import SaveButton from "./SaveButton";

import { checkBeforeSave } from "../../helper";

const JobCartHeader = ({ data, isLoged, job, ...props }) => {
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
  const [disabled, setDisabled] = useState(
    checkBeforeSave(job.id, JSON.parse(localStorage.getItem("savedJobs")))
  );
  const [saveButtonProps, setSaveButtonProps] = useState({
    text: "Save",
    icon: null,
  });

  useEffect(() => {
    if (disabled)
      setSaveButtonProps({ text: "Saved", icon: "flaticon2-check-mark" });
  }, []);

  const apply = () => {
    //console.log("hello", props, isLoged);
    if (!isLoged) {
      props.history.push("/auth");
    }
  };

  const showDetails = () => {
    props.fetechJobDetails(job);
    console.log("details");
  };

  const save = () => {
    const savedJobs = localStorage.getItem("savedJobs");
    if (savedJobs) {
      const newSavedJobsTab = JSON.parse(savedJobs);
      newSavedJobsTab.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(newSavedJobsTab));
      setSaveButtonProps({ text: "Saved", icon: "flaticon2-check-mark" });
      setDisabled(true);
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
          <DetailsButton showDetails={showDetails} />
          &nbsp;
          <ApplyButton apply={apply} />
          &nbsp;
          <SaveButton
            save={save}
            disabled={disabled}
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

export default withRouter(
  connect(null, { applyToJob, fetechJobDetails })(JobCartHeader)
);
