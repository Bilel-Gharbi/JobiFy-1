import React from "react";
import JobSkillsList from "../JobSkillsList - component/JobSkillsList";
import Button from "../common/Button-component/Button";
import "./JobDescription.css";

const JobDescription = ({ jobDetails }) => {
  const {
    jobPosition,
    jobDescription,
    JobContractType,
    jobMinSalary,
    createdAt,
    jobSkills,
    Company
  } = jobDetails;
  return (
    <div className="jobDescriptionContainer">
      <div className="header-job-description">
        <div className="one">
          <div className="infoDiv">
            <div className="job-title">{jobPosition}</div>
            <div className="job-comapny-name">
              {Company ? Company.companyName : null}
            </div>
          </div>
          <div className="btnDiv">
            <div>
              <Button>Apply</Button>
            </div>
            <div>
              <Button>Save Me</Button>
            </div>
          </div>
        </div>
        <div className="two">
          <div>{JobContractType}</div>
          <div>{jobMinSalary}</div>
          <div>{createdAt ? createdAt.slice(0, 10) : null}</div>
        </div>
        <div className="tree">
          <div className="job-skills">
            <JobSkillsList jobSkills={jobSkills} />
          </div>
        </div>
      </div>
      <div className="content-job-comapny-description">
        <h5>company info</h5>
        <li>company info1</li>
        <li>company info1</li>
        <li>company info1</li>
        <li>company info1</li>
      </div>
      <div className="content-job-description">
        <h5>job offer description</h5>
        {jobDescription}
      </div>
    </div>
  );
};

export default JobDescription;
