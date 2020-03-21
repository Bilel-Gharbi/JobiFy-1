import React, { Component } from "react";

import "./jobcard.css";
class JobCard extends Component {
  apply = e => {
    e.preventDefault();
  };
  render() {
    console.log(this.props);
    const { jobPosition, jobDescription, Company } = this.props.job;
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
            <a onClick={this.apply} href="" className="card-link">
              Apply
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default JobCard;
