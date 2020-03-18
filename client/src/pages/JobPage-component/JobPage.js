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
    const { jobs } = this.props;
    return (
      <div className="jobPage-conatianer">
        <JobList jobs={jobs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps, { fetechJobs })(JobPage);
