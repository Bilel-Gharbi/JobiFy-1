const initialState = {
  id: null,
  message: "",
  status: null
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RETURN_ERRORS":
      return { ...state, ...action.payload };

    case "CLEAR_ERRORS":
      return { id: null, message: "", status: null };

    default:
      return state;
  }
};

export default errorsReducer;
