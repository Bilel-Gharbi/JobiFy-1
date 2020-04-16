const initialState = {
  modal: false,
  profileSection: "",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE_SECTION":
      return { ...state, profileSection: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
