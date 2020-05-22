import { filterElementFromState, updateElementFromState } from "../helper";

const initialState = {
  user: null,
  resume: null,
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
          experiences: [...state.resume.experiences, action.payload],
        },
      };

    case "DEL_EXPERIENCE":
      const newExperiences = filterElementFromState(
        state.resume.experiences,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          experiences: [...newExperiences],
        },
      };

    case "UPDATE_EXPERIENCE":
      const newUpdatedExperiences = updateElementFromState(
        state.resume.experiences,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          experiences: [...newUpdatedExperiences],
        },
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        resume: {
          ...state.resume,
          educations: [...state.resume.educations, action.payload],
        },
      };

    case "DEL_EDUCATION":
      const newEducations = filterElementFromState(
        state.resume.educations,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          educations: [...newEducations],
        },
      };

    case "UPDATE_EDUCATION":
      const newUpdatedEducations = updateElementFromState(
        state.resume.educations,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          educations: [...newUpdatedEducations],
        },
      };

    case "ADD_SKILL":
      return {
        ...state,
        resume: {
          ...state.resume,
          skills: [...state.resume.skills, action.payload],
        },
      };

    case "DEL_SKILL":
      const newSkills = filterElementFromState(
        state.resume.skills,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          skills: [...newSkills],
        },
      };

    case "ADD_CERTIFICATE":
      return {
        ...state,
        resume: {
          ...state.resume,
          certificates: [...state.resume.certificates, action.payload],
        },
      };
    case "DEL_CERTIFICATE":
      const newCertificates = filterElementFromState(
        state.resume.certificates,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          certificates: [...newCertificates],
        },
      };

    case "UPDATE_CERTIFICATE":
      const newUpdatedCertificates = updateElementFromState(
        state.resume.certificates,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          certificates: [...newUpdatedCertificates],
        },
      };

    case "ADD_PROJECT":
      return {
        ...state,
        resume: {
          ...state.resume,
          projects: [...state.resume.projects, action.payload],
        },
      };

    case "DEL_PROJECT":
      const newProjects = filterElementFromState(
        state.resume.projects,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          projects: [...newProjects],
        },
      };

    case "UPDATE_PROJECT":
      const newUpdatedProjects = updateElementFromState(
        state.resume.projects,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          projects: [...newUpdatedProjects],
        },
      };

    case "ADD_LANGUAGE":
      return {
        ...state,
        resume: {
          ...state.resume,
          languages: [...state.resume.languages, action.payload],
        },
      };

    case "DEL_LANGUAGE":
      const newLanguages = filterElementFromState(
        state.resume.languages,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          languages: [...newLanguages],
        },
      };

    case "ADD_AWARD":
      return {
        ...state,
        resume: {
          ...state.resume,
          awards: [...state.resume.awards, action.payload],
        },
      };

    case "DEL_AWARD":
      const newAwards = filterElementFromState(
        state.resume.awards,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          awards: [...newAwards],
        },
      };
    case "UPDATE_AWARD":
      const newUpdatedAwards = updateElementFromState(
        state.resume.awards,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          awards: [...newUpdatedAwards],
        },
      };

    case "ADD_INTEREST":
      return {
        ...state,
        resume: {
          ...state.resume,
          interests: [...state.resume.interests, action.payload],
        },
      };
    case "DEL_INTEREST":
      const newInterests = filterElementFromState(
        state.resume.interests,
        action.payload
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          interests: [...newInterests],
        },
      };

    case "APPLY_JOB":
      return {
        ...state,
        resume: {
          ...state.resume,
          applyedJob: [...state.resume.applyedJob, action.payload],
        },
      };

    case "UPDATE_USER_INFO":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          photo: action.payload.photo,
          location: action.payload.location,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    default:
      return state;
  }
};

export default userProfileReducer;
