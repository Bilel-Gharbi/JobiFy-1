import {
  addSkillToJobOffer,
  filterElementFromState,
  updateElementFromState,
  delSkillFromJobOffer,
} from "../helper";
const initialState = {
  company: null,
  jobOffers: null,
};

const companyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPANY_PROFILE":
      return { ...state, ...action.payload };

    case "CLEAR_COMAPNY_PROFILE":
      return { ...initialState };

    case "CREATE_COMPANY_PROFILE_INFO":
      return { ...state, ...action.payload };

    case "ADD_COMPANY_JOB_OFFER_SKILL":
      let newJobOffers = addSkillToJobOffer(state.jobOffers, action.payload);
      return {
        ...state,
        jobOffers: [...newJobOffers],
      };

    case "ADD_COMPANY_JOB_OFFER_WITH_SKILLS":
      return { ...state, jobOffers: [...action.payload] };

    case "DELETE_COMPANY_JOB_OFFER":
      return {
        ...state,
        jobOffers: [...filterElementFromState(state.jobOffers, action.payload)],
      };

    case "UPDATE_COMPANY_JOB_OFFER":
      return {
        ...state,
        jobOffers: [...updateElementFromState(state.jobOffers, action.payload)],
      };
    case "DELETE_COMPANY_JOB_OFFER_SKILL":
      /* return {
        ...state,
        jobOffers: [
          ...filterElementFromState(
            filterElementFromState(state.jobOffers, {
              id: action.payload.JobOfferId,
            }),

            action.payload
          ),
        ],
      }; */

      /* return {
        ...state,
        jobOffers: [
          ...delSkillFromJobOffer(
            state.jobOffers,
            action.payload.id,
            action.payload.JobOfferId
          ),
        ],
      }; */
      return {
        ...state,
        jobOffers: [
          ...delSkillFromJobOffer(
            state.jobOffers,
            action.payload.id,
            action.payload.JobOfferId
          ),
        ],
      };
    default:
      return state;
  }
};

export default companyProfileReducer;
