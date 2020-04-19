import React from "react";
import Modal from "../../components/common/modal-component/Modal";
import Form from "../../components/common/Form-component/Form";
import ButtonModalProfil from "./ButtonModalProfil";
import formProps from "./formCrudResume";

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
        body={<Form ref={formRef} {...formProps[selectedMenuSection]} />}
      />
    </>
  );
};

export default ButtonModalProfilAddUpdate;
