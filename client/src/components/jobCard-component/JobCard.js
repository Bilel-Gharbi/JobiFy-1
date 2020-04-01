import React, { Component } from "react";
import "./jobcard.css";

import { connect } from "react-redux";
import { applyToJob, fetechJobDetails } from "../../actions/jobsAction";

import { checkBeforApply, jobMatch } from "../../helper";

/* import Modal from "../modal-component/Modal";
import JobSkillsList from "../JobSkillsList - component/JobSkillsList"; */
class JobCard extends Component {
  state = {
    disable: false,
    autorized: true,
    match: null
  };
  componentDidMount() {
    let check = checkBeforApply(this.props.job.id, this.props.applyedJob);
    let match = jobMatch(this.props.resumeSkills, this.props.job.jobSkills);
    this.setState({ autorized: !check, disable: !check, match });
  }
  apply = e => {
    e.preventDefault();
    this.props.applyToJob(this.props.job.id, this.props.resumeId);
  };

  renderMatching() {
    if (this.state.match) {
      return (
        <div>
          <strong>{this.state.match} %</strong>
        </div>
      );
    }
  }

  render() {
    const { jobPosition, Company } = this.props.job;
    return (
      <div
        className="jobcart"
        onClick={() => this.props.fetechJobDetails(this.props.job)}
      >
        <div className="back"> Click to show details </div>
        <div className="header">
          <div className="info">
            <div className="companyImg">
              <img src={Company.logo} alt="company logo" />
            </div>
            <div className="offerInfo">
              <span className="jobPostion">{jobPosition}</span>
              <span className="companyName">{Company.companyName}</span>
            </div>
          </div>
          <div className="match">{this.renderMatching()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToPropos = (state, ownProps) => {
  if (ownProps.isLoged) {
    return {
      resumeId: state.userProfile.resume.userResume.id,
      resumeSkills: state.userProfile.resume.skills,
      applyedJob: state.userProfile.resume.applyedJob
    };
  }
  return {};
};

export default connect(mapStateToPropos, { applyToJob, fetechJobDetails })(
  JobCard
);
