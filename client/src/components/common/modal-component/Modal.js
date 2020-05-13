import React, { useState, useEffect } from "react";
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
    btnTwoDisabled,
    modalAction,
    customButton,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const executeActionAndToggle = () => {
    if (modalAction) {
      modalAction();
      toggle();
      return;
    }
    if (body.props.action) {
      const { action } = body.props;
      if (body.ref.current.state.formId) {
        const data = body.ref.current.state;
        store.dispatch(action.update(data.formId, data.formState));
      } else {
        const data = body.ref.current.state;
        store.dispatch(action.add({ ...data.formState }));
      }
      toggle();
    } else toggle();
  };

  return (
    <>
      <Button
        className={className}
        onClick={() => (!disabled ? toggle() : null)}
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
            disabled={btnTwoDisabled}
            onClick={executeActionAndToggle}
          >
            {btnTwoText || "Do Something"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalComponent;
