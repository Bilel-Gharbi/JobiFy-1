import React, { useRef } from "react";
import Modal from "../../components/common/modal-component/Modal";
import Form from "../../components/common/Form-component/Form";

const ApplyButton = ({ apply, applyButtonProps, disabled, ...props }) => {
  const formRef = useRef();

  const customButton = (event) => {
    return (
      <button
        type="button"
        className="btn btn-success btn-sm btn-upper"
        onClick={event}
      >
        <a className={`${applyButtonProps.icon}`}> {applyButtonProps.text}</a>
      </button>
    );
  };

  const formApply = () => {
    const { firstName, lastName, phoneNumber } = props.userInfo.info;
    const { email } = props.userInfo;

    //config or props form component
    const formState = { Email: "", "Full Name": "", phoneNumber: "" };
    const types = ["email", "text", "number"];
    const disabledFiled = [true, false, false];
    const formValue = {
      Email: email,
      "Full Name": `${firstName} ${lastName}`,
      PhoneNumber: phoneNumber,
    };
    return (
      <Form
        ref={formRef}
        formState={formState}
        formValue={formValue}
        types={types}
        disabledFiled={disabledFiled}
        withReCaptcha={true}
      />
    );
  };

  const renderApplyButton = () => {
    if (props.isLoged) {
      return (
        <Modal
          modalName="Job application confirmation"
          customButton={customButton()}
          modalAction={() => apply()}
          body={formApply()}
          disabled={disabled}
        />
      );
    }
    return customButton(() => apply());
  };

  return <>{renderApplyButton()}</>;
};

export default ApplyButton;
