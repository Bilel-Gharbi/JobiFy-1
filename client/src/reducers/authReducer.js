const initialState = {
  isLoged: false,
  token: localStorage.getItem("token"),
  userType: null,
  profile: {},
  userData: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };
    case "SIGNUP":
      return { ...state, ...action.payload };

    case "LOGIN_FAIL":
    case "SIGNUP_FAIL":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoged: false,
        userData: []
      };

    case "LOGIN_SUCESS":
    case "SIGNUP_SUCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isLoged: true
      };
    default:
      return state;
  }
};

export default authReducer;