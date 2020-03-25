import React, { Component } from "react";
import "./jobcard.css";

import { connect } from "react-redux";
import { applyToJob } from "../../actions/jobsAction";
class JobCard extends Component {
  state = {
    disable: this.props.isLoged
  };
  apply = e => {
    e.preventDefault();
    console.log("apply button work");
  };
  render() {
    const { jobPosition, jobDescription, Company } = this.props.job;
    const { disable } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{jobPosition}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {Company.companyName}
            </h6>
            <p className="card-text">
              {jobDescription}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              disabled={!disable}
              onClick={this.apply}
              href=""
              className="card-link"
            >
              Apply
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { applyToJob })(JobCard);
