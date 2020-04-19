import React, { Component, useRef } from "react";

import ButtonModalProfil from "../UserProfilePage-component/ButtonModalProfil";
import Modal from "../../components/common/modal-component/Modal";
import Form from "../../components/common/Form-component/Form";

/* import {
  addExperience,
  addEducation,
  addSkill,
  addCertificate,
  addProject,
  addLanguage,
  addAward,
  addInterest,
} from "../../actions/resumeAction"; */
const InfoPage = () => {
  const formRef = useRef();

  /* const formProps = {
    //experience
    experience: {
      formState: {
        startDate: "",
        endDate: "",
        comapanyName: "",
        position: "",
        task: "",
        current: "",
      },
      types: ["date", "date", "text", "text", "text", "checkbox"],
      action: addExperience,
    },
    //education
    education: {
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
    skills: {
      formState: {
        name: "",
        level: "",
      },
      types: ["text", "text"],
      action: addSkill,
    },
    //new certif
    certification: {
      formState: {
        name: "",
        Date: "",
        organization: "",
      },
      types: ["text", "date", "text"],
      action: addCertificate,
    },
    // project
    project: {
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
    language: {
      formState: {
        name: "",
        level: "",
      },
      types: ["text", "text"],
      action: addLanguage,
    },
    // award
    award: {
      formState: {
        name: "",
        description: "",
        date: "",
      },
      types: ["text", "text", "date"],
      action: addAward,
    },
    // interest
    interest: {
      formState: {
        name: "",
      },
      types: ["text"],
      action: addInterest,
    },
  }; */

  return (
    <div>
      Complete Your Info
      <ButtonModalProfil></ButtonModalProfil>
      <Modal customButton={<ButtonModalProfil />} />
      <Modal
        customButton={<ButtonModalProfil />}
        modalName="hello basic modal"
        //body={<Form ref={formRef} {...formProps.experience} />}
      ></Modal>
    </div>
  );
};

export default InfoPage;
