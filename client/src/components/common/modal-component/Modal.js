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
    //const { action } = props.body.props;
    //const data = props.body.ref.current.state;
    //get the form state from props or children using ref

    /*   let stateFormValue;
    props.body
      ? (stateFormValue = props.body.ref.current.state)
      : (stateFormValue = props.children.ref.current.state);

  */
    //dispatch action
    //TODO: validation before dispatch actions
    //console.log(data);
    //console.log(props.body.props.action);
    //console.log(props.body.ref.current.state);

    // console.log(body.ref.current);
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

        {/* <div className="alert alert-solid-danger alert-bold">
          <div className="alert-text">A simple danger alert—check it out!</div>
        </div> */}

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
