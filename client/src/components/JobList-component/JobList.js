import React from "react";

import JobCard from "../jobCard-component/JobCard";

import "./jobList.css";

const JobList = ({ jobs }) => {
  return (
    <div className="jobList">
      {jobs &&
        jobs.map(job => {
          return <JobCard className="job" job={job} key={job.id} />;
        })}
    </div>
  );
};

export default JobList;
