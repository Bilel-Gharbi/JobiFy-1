const initialState = {
  modal: false,
  profileSection: "",
  queryTerm: null,
  page: 1,
  limit: 3,
  dataLength: 0,
  wizardForm: 0,
  wizardFormData: {
    personalInfo: {},
    resumeInfo: {},
    experience: {},
    education: {},
    skill: {},
  },
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_SECTION":
      return { ...state, profileSection: action.payload };

    case "SET_QUERY_TERM":
      return { ...state, queryTerm: action.payload };

    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "SET_DATA_LENGTH":
      return { ...state, dataLength: action.payload };

    case "SET_LIMIT":
      return { ...state, limit: action.payload };

    case "SET_WIZARD_FORM":
      return { ...state, wizardForm: action.payload };

    case "SET_WIZARD_FORM_FIRST_INFO":
      return {
        ...state,
        wizardFormData: {
          ...state.wizardFormData,
          personalInfo: {
            ...state.wizardFormData.personalInfo,
            ...action.payload,
          },
        },
      };

    case "SET_WIZARD_FORM_FIRST_RESUME_INFO":
      return {
        ...state,
        wizardFormData: {
          ...state.wizardFormData,
          resumeInfo: {
            ...state.wizardFormData.resumeInfo,
            ...action.payload,
          },
        },
      };

    case "SET_WIZARD_FORM_FIRST_EDUCATION":
      return {
        ...state,
        wizardFormData: {
          ...state.wizardFormData,
          education: {
            ...state.wizardFormData.education,
            ...action.payload,
          },
        },
      };

    case "SET_WIZARD_FORM_FIRST_EXPERIENCE":
      return {
        ...state,
        wizardFormData: {
          ...state.wizardFormData,
          experience: {
            ...state.wizardFormData.experience,
            ...action.payload,
          },
        },
      };

    case "SET_WIZARD_FORM_FIRST_SKILL":
      return {
        ...state,
        wizardFormData: {
          ...state.wizardFormData,
          skill: {
            ...state.wizardFormData.skill,
            ...action.payload,
          },
        },
      };

    default:
      return state;
  }
};

export default uiReducer;
