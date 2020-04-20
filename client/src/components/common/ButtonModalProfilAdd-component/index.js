import React from "react";
import Modal from "../modal-component/Modal";
import Form from "../Form-component/Form";
import ButtonModalProfil from "../ButtonModalProfil-component";
import formProps from "../../../pages/UserProfilePage-component/formCrudResume";

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
