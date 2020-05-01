import * as actions from "../../actions/resumeAction";

const formProps = {
  //experience
  Experiences: {
    formState: {
      startDate: "",
      endDate: "",
      current: "",
      companyName: "",
      position: "",
      task: "",
    },
    types: ["date", "date", "checkbox", "text", "text", "text"],
    action: { add: actions.addExperience, update: actions.updateExperience },
  },
  //education
  Educations: {
    formState: {
      startDate: "",
      endDate: "",
      establishment: "",
      diplomaMajor: "",
      diplomaType: "",
      description: "",
    },
    types: ["date", "date", "text", "text", "text", "text"],
    action: { add: actions.addEducation, update: actions.updateEducation },
  },
  //new skills
  Skills: {
    formState: {
      name: "",
      level: "",
    },
    types: ["text", "text"],
    action: { add: actions.addSkill },
  },
  //new certif
  Certifications: {
    formState: {
      name: "",
      date: "",
      organization: "",
    },
    types: ["text", "date", "text"],
    action: { add: actions.addCertificate, update: actions.updateCertificate },
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
    action: { add: actions.addProject, update: actions.updateProject },
  },
  // language
  Languages: {
    formState: {
      name: "",
      level: "",
    },
    types: ["text", "text"],
    action: { add: actions.addLanguage },
  },
  // award
  Awards: {
    formState: {
      name: "",
      description: "",
      date: "",
    },
    types: ["text", "text", "date"],
    action: { add: actions.addAward, update: actions.updateAward },
  },
  // interest
  Interests: {
    formState: {
      name: "",
    },
    types: ["text"],
    action: { add: actions.addInterest },
  },

  // personal info
  PersonalInfo: {
    formState: {
      firstName: "",
      lastName: "",
      birthDate: "",
      phoneNumber: "",
      location: "",
    },
    types: ["text", "text", "date", "phone", "text"],
    action: { add: actions.addInterest },
  },
  // user resume info
  UserResumeInfo: {
    formState: {
      summary: "",
      expertiseLevel: "",
    },
    types: ["text", "text"],
    action: { add: actions.addInterest },
  },
};

export default formProps;
