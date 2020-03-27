import React, { Component } from "react";
import { connect } from "react-redux";
import { fetechJobs } from "../../actions/jobsAction";

import JobList from "../../components/JobList-component/JobList";

import "./JobPage.css";

class JobPage extends Component {
  componentDidMount() {
    this.props.fetechJobs();
  }
  render() {
    console.log(this.props);
    const { jobs, isLoged } = this.props;
    return (
      <div className="jobPage-conatianer">
        <JobList jobs={jobs} isLoged={isLoged} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    isLoged: state.auth.isLoged,
    jobs: state.jobs,
    userProfile: state.userProfile
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobPage);
