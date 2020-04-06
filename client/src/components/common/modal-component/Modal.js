import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Button from "../Button-component/Button";
import { addExperience } from "../../../actions/resumeAction";

import store from "../../../store";
const ModalComponent = props => {
  const {
    className,
    title,
    body,
    disabled,
    modalName,
    btnOneText,
    btnTwoText,
    action
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const executeActionAndToggle = () => {
    //get the form state from props or children using ref
    let stateFormValue;
    props.body
      ? (stateFormValue = props.body.ref.current.state)
      : (stateFormValue = props.children.ref.current.state);

    /*  action(); */
    console.log(stateFormValue);
    //dispatch action
    store.dispatch(props.action({ ...stateFormValue }));
    toggle();
  };

  return (
    <>
      <Button
        className={className}
        icon="fa fa-fw fa-suitcase"
        onClick={toggle}
        disabled={disabled}
      >
        {modalName}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> {modalName}</ModalHeader>
        <ModalBody>{body || props.children}</ModalBody>
        <ModalFooter>
          <Button className={className} onClick={toggle}>
            {btnOneText || "cancel"}
          </Button>
          <Button className={className} onClick={executeActionAndToggle}>
            {btnTwoText || "Do Something"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default connect(null, { addExperience })(ModalComponent);
