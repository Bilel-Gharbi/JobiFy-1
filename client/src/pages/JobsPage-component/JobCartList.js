import React from "react";
import JobCart from "./JobCart";

const JobCartList = (props) => {
  const { jobs, isLoged } = props.data;
  return (
    <>
      {jobs.map((job) => {
        return <JobCart key={job.id} job={job} isLoged={isLoged} />;
      })}
    </>
  );
};

export default JobCartList;
