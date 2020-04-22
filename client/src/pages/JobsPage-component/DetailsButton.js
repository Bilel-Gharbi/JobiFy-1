import React from "react";
import Modal from "../../components/common/modal-component/Modal";

const DetailsButton = ({ showDetails }) => {
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
  const modalAction = () => {
    console.log("modal action from details button component");
  };
  return (
    <>
      {
        <Modal
          modalName="Job offer details "
          customButton={customButton()}
          modalAction={modalAction}
          btnOneText="Close"
          btnTwoText="Save"
          body={<div>job details component</div>}
        />
      }
    </>
  );
};

export default DetailsButton;
