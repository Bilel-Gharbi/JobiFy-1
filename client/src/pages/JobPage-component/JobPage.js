import React, { Component } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

import JobList from "../../components/JobList-component/JobList";
import JobDescription from "../../components/JobDescription-component/JobDescription";

import "./JobPage.css";

class JobPage extends Component {
  componentDidMount() {
    this.props.fetechJobs();
  }

  render() {
    const { jobs, isLoged, jobDetails } = this.props;
    return (
      <>
        <div> search bar </div>
        <div> pagination bar </div>
        <div className="jobPagecontainer">
          <div className="listContainer">
            <JobList jobs={jobs} isLoged={isLoged} />
          </div>
          <div className="jobDetailsContainer">
            {jobDetails ? (
              <div className="jobDetails">
                <JobDescription jobDetails={jobDetails} />
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.jobs,
    isLoged: state.auth.isLoged,
    userProfile: state.userProfile,
    jobDetails: state.jobs.jobDetails,
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobPage);
