import {
  addExperience,
  addEducation,
  addSkill,
  addCertificate,
  addProject,
  addLanguage,
  addAward,
  newInterest,
} from "../../actions/resumeAction";

const formProps = {
  //experience
  Experiences: {
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
  Educations: {
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
  Skills: {
    formState: {
      name: "",
      level: "",
    },
    types: ["text", "text"],
    action: addSkill,
  },
  //new certif
  Certifications: {
    formState: {
      name: "",
      date: "",
      organization: "",
    },
    types: ["text", "date", "text"],
    action: addCertificate,
  },
  // project
  Projects: {
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
  Languages: {
    formState: {
      name: "",
      level: "",
    },
    types: ["text", "text"],
    action: addLanguage,
  },
  // award
  Awards: {
    formState: {
      name: "",
      description: "",
      date: "",
    },
    types: ["text", "text", "date"],
    action: addAward,
  },
  // interest
  Interests: {
    formState: {
      name: "",
    },
    types: ["text"],
    action: newInterest,
  },
};

export default formProps;
