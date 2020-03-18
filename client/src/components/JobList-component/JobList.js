import React from "react";

import "./jobList.css";

const JobList = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
      {jobs &&
        jobs.map(({ id, jobPosition, jobDescription, Company }) => {
          return (
            <div key={id} className="jobList-container">
              <span>
                <strong>{Company.companyName}</strong>
              </span>
              <span>
                <strong>{jobPosition}</strong>
              </span>
              <p>{jobDescription}</p>
            </div>
          );
        })}
      <button className="custom-custom">apply </button>
    </div>
  );
};

export default JobList;
