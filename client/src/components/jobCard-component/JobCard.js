import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./jobcard.css";

import { connect } from "react-redux";
import { applyToJob } from "../../actions/jobsAction";

import { checkBeforApply } from "../../helper";

import Modal from "../modal-component/Modal";
class JobCard extends Component {
  state = {
    disable: false,
    autorized: true
  };
  componentWillReceiveProps() {
    let check = checkBeforApply(this.props.job.id, this.props.applyedJob);
    this.setState({ autorized: !check, disable: !check });
  }
  apply = e => {
    e.preventDefault();
    //function to check befor applying

    this.props.applyToJob(this.props.job.id, this.props.resumeId);
  };

  render() {
    const {
      jobPosition,
      jobDescription,
      Company,
      JobContractType,
      jobMinSalary,
      jobMaxSalary,
      createdAt
    } = this.props.job;
    return (
      <>
        <Container>
          <Row>
            <Col xs="3">
              <img src={Company.logo} width="100px" height="100px" />
            </Col>

            <Col className="jobInfo">
              <Row>{jobPosition}</Row>
              <Row>{Company.companyName}</Row>
            </Col>
            <Col xs="2">
              <div>matching</div>
            </Col>
            <Col xs="2">
              <Modal>
                {this.state.autorized ? "Apply" : "alreday applyed"}
              </Modal>
            </Col>
          </Row>
          <Row className="details">
            <Col className="info" xs="3">
              <Row>location</Row>
              <Row>{JobContractType}</Row>
              <Row>
                {" "}
                min : {jobMinSalary} - max: {jobMaxSalary}{" "}
              </Row>
              <Row>{createdAt.slice(0, 10)}</Row>
            </Col>
            <Col className="description">
              <Row className="jobDecription">
                {jobDescription}
                job description Some quick example text to build on the card
                title and make up the bulk of the card's content. job
                description Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </Row>
              <Row className="jobSkills">
                <Col>
                  <div className="skill">skill 1</div>
                  <div className="skill">skill 2</div>
                  <div className="skill">skill 3</div>
                  <div className="skill">skill 3</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToPropos = (state, ownProps) => {
  if (ownProps.isLoged) {
    return {
      resumeId: state.userProfile.resume.userResume.id,
      applyedJob: state.userProfile.resume.applyedJob
    };
  }
  return {};
};

export default connect(mapStateToPropos, { applyToJob })(JobCard);
