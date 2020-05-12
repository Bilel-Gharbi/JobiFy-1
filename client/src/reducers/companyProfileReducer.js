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
    default:
      return state;
  }
};

export default companyProfileReducer;
