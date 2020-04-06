const initialState = {
  user: null,
  resume: null
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return { ...state, ...action.payload };

    case "CLEAR_USER_PROFILE":
      return { ...initialState };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        resume: {
          ...state.resume,
          experiences: [...state.resume.experiences, action.payload]
        }
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        resume: {
          ...state.resume,
          educations: [...state.resume.educations, action.payload]
        }
      };

    case "ADD_SKILL":
      return {
        ...state,
        resume: {
          ...state.resume,
          skills: [...state.resume.skills, action.payload]
        }
      };

    case "ADD_CERTIFICATE":
      return {
        ...state,
        resume: {
          ...state.resume,
          certificates: [...state.resume.certificates, action.payload]
        }
      };

    case "ADD_PROJECT":
      return {
        ...state,
        resume: {
          ...state.resume,
          projects: [...state.resume.projects, action.payload]
        }
      };

    case "ADD_LANGUAGE":
      return {
        ...state,
        resume: {
          ...state.resume,
          languages: [...state.resume.languages, action.payload]
        }
      };

    case "ADD_AWARD":
      return {
        ...state,
        resume: {
          ...state.resume,
          awards: [...state.resume.awards, action.payload]
        }
      };

    case "ADD_INTEREST":
      return {
        ...state,
        resume: {
          ...state.resume,
          interests: [...state.resume.interests, action.payload]
        }
      };
    default:
      return state;
  }
};

export default userProfileReducer;
