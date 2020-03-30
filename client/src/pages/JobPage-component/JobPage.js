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
    const { jobs, isLoged } = this.props;
    return (
      <>
        <div> search bar </div>
        <div className="jobPagecontainer">
          <div className="listContainer">
            <JobList jobs={jobs} isLoged={isLoged} />
          </div>
          <div className="jobDetailsContainer">
            <div className="jobDetails">
              <JobDescription />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs.jobs,
    isLoged: state.auth.isLoged,
    userProfile: state.userProfile
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobPage);
