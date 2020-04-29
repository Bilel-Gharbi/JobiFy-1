const initialState = {
  modal: false,
  profileSection: "",
  queryTerm: null,
  page: 1,
  limit: 3,
  dataLength: 0,
  wizardForm: 0,
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
    default:
      return state;
  }
};

export default uiReducer;
