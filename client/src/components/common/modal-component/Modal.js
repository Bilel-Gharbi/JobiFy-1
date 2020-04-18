import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Button from "../Button-component/Button";

import store from "../../../store";
const ModalComponent = (props) => {
  const {
    className,
    title,
    body,
    disabled,
    modalName,
    btnOneText,
    btnTwoText,
    action,
    customButton,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const executeActionAndToggle = () => {
    const { action } = props.body.props;
    const data = props.body.ref.current.state;
    //get the form state from props or children using ref

    /*   let stateFormValue;
    props.body
      ? (stateFormValue = props.body.ref.current.state)
      : (stateFormValue = props.children.ref.current.state);

  */
    //dispatch action
    //TODO: validation before dispatch actions
    console.log(data);
    //console.log(props.body.props.action);
    //console.log(props.body.ref.current.state);
    store.dispatch(action({ ...data }));
    toggle();
  };
  /* const renderModalMainButton = () => {
    if (customButton) {
      return (
        <div onClick={toggle} disabled={disabled}>
          {customButton}
        </div>
      );
    }
    return (
      <Button className={className} onClick={toggle} disabled={disabled}>
        {modalName}
      </Button>
    );
  }; */

  return (
    <>
      {/* {renderModalMainButton()} */}
      <Button
        className={className}
        onClick={toggle}
        disabled={disabled}
        customButton={customButton}
      >
        {modalName}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> {modalName}</ModalHeader>
        <ModalBody>{body || props.children}</ModalBody>
        <ModalFooter>
          <Button className="btn btn-secondary" onClick={toggle} type="reset">
            {btnOneText || "cancel"}
          </Button>
          <Button
            className="btn btn-success"
            type="submit"
            onClick={executeActionAndToggle}
          >
            {btnTwoText || "Do Something"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default connect(null /* { addExperience } */)(ModalComponent);
