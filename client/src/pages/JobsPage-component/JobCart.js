import React from "react";
import { connect } from "react-redux";
import JobCartSkillsList from "./JobCartSkillsList";
import JobCartMatching from "./JobCartMatching";
import JobCartHeader from "./JobCartHeader";

import { jobMatch } from "../../helper";
const JobCart = ({ job, userSkills, isLoged, applyedJob, ...props }) => {
  const {
    Company,
    jobSkills,
    jobPosition,
    JobContractType,
    jobMinSalary,
    jobMaxSalary,
  } = job;
  const { location, companyName, type } = Company;
  //function return matching rate

  const matchRate = jobMatch(userSkills, jobSkills);

  const JobCartHeaderData = {
    location,
    type,
    companyName,
    jobPosition,
    JobContractType,
    jobMinSalary,
    jobMaxSalary,
  };
  return (
    <div className="kt-portlet">
      <div className="kt-portlet__body">
        <div className="kt-widget kt-widget--user-profile-3">
          <div className="kt-widget__top">
            <div className="kt-widget__media">
              <img src={Company.logo} alt="image" />
            </div>
            <div className="kt-widget__content">
              <JobCartHeader
                data={JobCartHeaderData}
                isLoged={isLoged}
                applyedJob={applyedJob}
                job={job}
              />

              {/* job description */}
              <div className="kt-widget__info" style={{ display: "flex" }}>
                <div className="kt-widget__desc" style={{ flex: "3" }}>
                  {job.jobDescription}
                  {job.jobDescription}
                  {job.jobDescription}
                </div>
                {props.userType && props.userType === "USER" ? (
                  <JobCartMatching rate={matchRate} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="kt-widget__bottom" style={{ position: "relative" }}>
            <div
              className="kt-widget__item"
              style={{
                display: "grid",
                padding: "10px",
                gridTemplateColumns: "repeat( auto-fill, minmax(120px, auto) )",
              }}
            >
              <JobCartSkillsList skills={jobSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  if (state.auth.isLoged && state.auth.userType === "USER") {
    return {
      userSkills: state.userProfile.resume.skills,
      applyedJob: state.userProfile.resume.applyedJob,
      userType: state.auth.userType,
    };
  }
  return state;
};
export default connect(mapStateToProps, null)(JobCart);
