import React from "react";

import "./JobDescription.css";

const JobDescription = () => {
  return (
    <div className="jobDescriptionContainer">
      <div className="header-job-description">
        <div className="job-title">job and company</div>
        <div className="job-save-share">save and share</div>
        <div className="job-contract-date">job contract type and date </div>
        <div className="job-skills">skills here </div>
      </div>
      <div className="content-job-description">
        Job description and requirement{" "}
      </div>

      <div className="footer-job-description">footer</div>
    </div>
  );
};

export default JobDescription;
