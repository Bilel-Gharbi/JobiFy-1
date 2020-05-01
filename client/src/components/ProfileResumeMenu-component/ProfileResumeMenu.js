import React, { useRef } from "react";

import Modal from "../common/modal-component/Modal";

import Form from "../../components/common/Form-component/Form";
import {
  addExperience,
  addEducation,
  addSkill,
  addCertificate,
  addProject,
  addLanguage,
  addAward,
  addInterest,
} from "../../actions/resumeAction";

const ProfileResumeMenu = ({ menu }) => {
  const formRef = useRef();

  //props form
  const formProps = [
    //experience
    {
      formState: {
        startDate: "",
        endDate: "",
        current: "",
        companyName: "",
        position: "",
        task: "",
      },
      types: ["date", "date", "checkbox", "text", "text", "text"],
      action: addExperience,
    },
    //education
    {
      formState: {
        diplomaMajor: "",
        diplomaType: "",
        startDate: "",
        endDate: "",
        establishment: "",
        description: "",
      },
      types: ["text", "text", "date", "date", "text", "text"],
      action: addEducation,
    },
    //new skills
    {
      formState: {
        name: "",
        level: "",
      },
      types: ["text", "text"],
      action: addSkill,
    },
    //new certif
    {
      formState: {
        name: "",
        Date: "",
        organization: "",
      },
      types: ["text", "date", "text"],
      action: addCertificate,
    },
    // project
    {
      formState: {
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
      types: ["text", "text", "text", "text"],
      action: addProject,
    },
    // language
    {
      formState: {
        name: "",
        level: "",
      },
      types: ["text", "text"],
      action: addLanguage,
    },
    // award
    {
      formState: {
        name: "",
        description: "",
        date: "",
      },
      types: ["text", "text", "date"],
      action: addAward,
    },
    // interest
    {
      formState: {
        name: "",
      },
      types: ["text"],
      action: addInterest,
    },
  ];

  return (
    <div>
      {menu &&
        menu.map((element, i) => {
          return (
            <Modal
              key={element}
              modalName={`Add new ${element}`}
              body={<Form ref={formRef} {...formProps[i]} />}
              action={formProps[i].action}
            >
              {/* <Form
                ref={formRef}
                formState={{ name: "", email: "", check: false }}
                types={["text", "text", "checkbox"]}
                withSubmitButton={false}
              /> */}
            </Modal>
          );
        })}
    </div>
  );
};

export default ProfileResumeMenu;
