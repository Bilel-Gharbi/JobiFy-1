import React from "react";
import Modal from "../../components/common/modal-component/Modal";

const ApplyButton = ({ apply }) => {
  const customButton = () => {
    return (
      <button
        type="button"
        onClick={apply}
        className="btn btn-success btn-sm btn-upper"
      >
        apply
      </button>
    );
  };

  const modalAction = () => {
    console.log("modal action job apply ");
  };

  return (
    <>
      {
        <Modal
          modalName="Job application"
          customButton={customButton()}
          modalAction={modalAction}
        />
      }
    </>
  );
};

export default ApplyButton;
