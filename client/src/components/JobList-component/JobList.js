import React from "react";

import JobCard from "../jobCard-component/JobCard";

import "./jobList.css";

const JobList = ({ jobs, isLoged }) => {
  return (
    <div className="jobList">
      {jobs &&
        jobs.map(job => {
          return (
            <JobCard className="job" job={job} key={job.id} isLoged={isLoged} />
          );
        })}
    </div>
  );
};

export default JobList;
