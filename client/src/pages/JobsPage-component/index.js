import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

import JobCartList from "./JobCartList";
import SearchBar from "./SearchBar";
import PaginationBar from "./PaginationBar";

const JobsPage = ({ ...props }) => {
  useEffect(() => {
    props.fetechJobs();
  }, []);

  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
      id="kt_content"
    >
      <div className="kt-container  kt-grid__item kt-grid__item--fluid">
        <SearchBar />
        <PaginationBar />

        <JobCartList data={props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.jobs,
    isLoged: state.auth.isLoged,
    userProfile: state.userProfile,
    jobDetails: state.jobs.jobDetails,
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobsPage);
