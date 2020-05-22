import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

import JobCartList from "./JobCartList";
import SearchBar from "./SearchBar";
import PaginationBar from "./PaginationBar";
import FilterBar from "./FilterBar";

const JobsPage = ({ ...props }) => {
  useEffect(() => {
    props.fetechJobs(1, props.limitPagination);
  }, []);

  return (
    <div
      className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
      id="kt_content"
      style={{ width: "80%", margin: "auto" }}
    >
      <div className="kt-container  kt-grid__item kt-grid__item--fluid">
        <SearchBar />
        <FilterBar />
        <JobCartList data={props} />
        <PaginationBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobs: state.jobs.jobs,
    isLoged: state.auth.isLoged,
    userProfile: state.userProfile,
    jobDetails: state.jobs.jobDetails,
    limitPagination: state.UI.limit,
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobsPage);
