import React, { useRef } from "react";

import Modal from "../common/modal-component/Modal";

import Form from "../../components/common/Form-component/Form";

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
        comapanyName: "",
        position: "",
        task: ""
      },
      types: ["date", "date", "checkbox", "text", "text", "text"]
    },
    //education
    {
      formState: {
        diplomaMajor: "",
        diplomaType: "",
        StartDate: "",
        EndDate: "",
        establishment: "",
        description: ""
      },
      types: ["text", "text", "date", "date", "text", "text"]
    },
    //new skills
    {
      formState: {
        name: "",
        level: ""
      },
      types: ["text", "text"]
    },
    //new certif
    {
      formState: {
        name: "",
        Date: "",
        organization: ""
      },
      types: ["text", "date", "text"]
    },
    // project
    {
      formState: {
        name: "",
        description: "",
        technologies: "",
        link: ""
      },
      types: ["text", "text", "text", "text"]
    },
    // language
    {
      formState: {
        name: "",
        level: ""
      },
      types: ["text", "text"]
    },
    // award
    {
      formState: {
        name: "",
        description: "",
        date: ""
      },
      types: ["text", "text", "date"]
    },
    // interest
    {
      formState: {
        name: ""
      },
      types: ["text"]
    }
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
