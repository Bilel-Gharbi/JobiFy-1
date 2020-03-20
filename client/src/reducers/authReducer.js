const initialState = {
  isLoged: false,
  userData: [],
  token: null,
  msg: "ënter you address mail and password to login"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };

    default:
      return initialState;
  }
};

export default authReducer;
