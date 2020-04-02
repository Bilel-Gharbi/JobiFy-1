import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Button from "../Button-component/Button";

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
    action();
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
        <ModalHeader toggle={toggle}> {title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
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

export default ModalComponent;
