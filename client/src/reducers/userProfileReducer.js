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

    default:
      return state;
  }
};

export default userProfileReducer;
