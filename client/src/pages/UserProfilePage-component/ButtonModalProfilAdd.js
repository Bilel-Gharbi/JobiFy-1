import React from "react";
import Modal from "../../components/common/modal-component/Modal";
import Form from "../../components/common/Form-component/Form";
import ButtonModalProfil from "./ButtonModalProfil";
import formProps from "./formCrudResume";

const ButtonModalProfilAdd = ({ selectedMenuSection, formRef }) => {
  return (
    <Modal
      customButton={<ButtonModalProfil />}
      modalName={selectedMenuSection}
      body={<Form ref={formRef} {...formProps[selectedMenuSection]} />}
    />
  );
};

export default ButtonModalProfilAdd;
