import React from "react";
import Modal from "../../components/common/modal-component/Modal";
import { checkBeforeSave } from "../../helper";

const DetailsButton = ({ showDetails, job, save }) => {
  const customButton = () => {
    return (
      <button
        type="button"
        className="btn btn-sm btn-upper"
        style={{ background: "#edeff6" }}
        onClick={showDetails}
      >
        Details
      </button>
    );
  };
  const checkSavedJobs = () => {
    let jobs = JSON.parse(localStorage.getItem("savedJobs"));
    return checkBeforeSave(job.id, jobs);
  };
  const JobDetails = () => {
    return (
      <div className="kt-portlet__body">
        <h3>{job.Company.companyName}</h3>
        <b>{job.jobDescription}</b>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </div>
    );
  };
  return (
    <>
      {
        <Modal
          modalName={`${job.jobPosition}`}
          customButton={customButton()}
          modalAction={() => save()}
          btnOneText="Close"
          btnTwoText="Save"
          btnTwoDisabled={checkSavedJobs()}
          body={<JobDetails />}
        />
      }
    </>
  );
};

export default DetailsButton;
