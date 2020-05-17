import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Button from "../Button-component/Button";

const ModalDashboard = (props) => {
  const { className, btn, body, title, size } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        className={className}
        onClick={() => toggle()}
        customButton={btn}
      />

      <Modal isOpen={modal} toggle={toggle} className={className} size={size}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button className="btn btn-outline-brand btn-square" onClick={toggle}>
            Save & Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDashboard;
