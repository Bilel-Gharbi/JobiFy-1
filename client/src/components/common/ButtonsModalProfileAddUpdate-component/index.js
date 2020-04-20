import React from "react";
import Modal from "../modal-component/Modal";
import Form from "../Form-component/Form";
import ButtonModalProfil from "../ButtonModalProfil-component";
import formProps from "../../../pages/UserProfilePage-component/formCrudResume";

const ButtonModalProfilAddUpdate = ({
  selectedMenuSection,
  formRef,
  ...props
}) => {
  const handelDeleteAction = () => {
    console.log("delete butoon work", props.id);
    props.deleteAction(props.id);
  };
  return (
    <>
      <ButtonModalProfil
        icon={"flaticon2-delete"}
        onClick={handelDeleteAction}
      />
      &nbsp;
      <Modal
        customButton={<ButtonModalProfil icon={"flaticon2-refresh"} />}
        modalName={selectedMenuSection}
        body={
          <Form
            ref={formRef}
            {...formProps[selectedMenuSection]}
            formValue={props.formValue}
          />
        }
      />
    </>
  );
};

export default ButtonModalProfilAddUpdate;
