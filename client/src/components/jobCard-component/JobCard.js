import React, { Component } from "react";
import "./jobcard.css";

import { connect } from "react-redux";
import { applyToJob } from "../../actions/jobsAction";

import { checkBeforApply, jobMatch } from "../../helper";

import Modal from "../modal-component/Modal";
class JobCard extends Component {
  state = {
    disable: false,
    autorized: true,
    match: null
  };
  componentWillReceiveProps() {
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
  renderSkills() {
    const { jobSkills } = this.props.job;
    if (jobSkills) {
      return jobSkills.map(skill => {
        return (
          <span className="skill" key={skill.id}>
            <strong>{skill.name} </strong>
          </span>
        );
      });
    }
  }

  render() {
    const { jobPosition, Company } = this.props.job;
    return (
      <div className="element">
        <div className="back"> Click to show details </div>
        <div className="jobcart" onClick={() => console.log(this.props)}>
          <div className="header">
            <div className="info">
              <div className="companyImg">
                <img src={Company.logo} />
              </div>
              <div className="offerInfo">
                <span className="jobPostion">{jobPosition}</span>
                <span className="companyName">{Company.companyName}</span>
              </div>
            </div>
            <div className="match">{this.renderMatching()}</div>
          </div>
          <div className="footer">{this.renderSkills()}</div>
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

export default connect(mapStateToPropos, { applyToJob })(JobCard);
