import authAPI from "../API/authAPI";

//import type
import {
  LOGIN,
  SIGNUP,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  SIGNUP_SUCESS,
  SIGNUP_FAIL,
  LOGOUT,
  FETCH_USER_DATA,
  CHANGE_PASSWORD,
} from "./type";

//error actions
import { RETURN_ERRORS, CLEAR_ERRORS } from "./type";

//Resume action
import {
  SET_USER_PROFILE,
  CLEAR_USER_PROFILE,
  SET_COMPANY_PROFILE,
  CLEAR_COMPANY_PROFILE,
} from "./type";

export const login = (obj) => async (dispatch) => {
  try {
    const response = await authAPI.post("/login", obj);

    //delete error
    dispatch({
      type: CLEAR_ERRORS,
    });

    //disptach resume action or company action
    response.data.result.type === "USER"
      ? dispatch({
          type: SET_USER_PROFILE,
          payload: response.data.result.profileDetails,
        })
      : dispatch({
          type: SET_COMPANY_PROFILE,
          payload: response.data.result.profileDetails,
        });
    //dispatch action login_sucess in case no error
    dispatch({
      type: LOGIN_SUCESS,
      payload: response.data.result.token,
    });
    //dispatch and return LOGIN action to set state
    return dispatch({
      type: LOGIN,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userType: response.data.result.type,
        email: response.data.result.email,
        /*  profile: response.data.result.profile,
        userData: response.data.result.profileDetails */
      },
    });
  } catch (err) {
    // in case of Erro Dispatch and RETURN_ERROR action
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "login",
        status: err.response.data.status,
        message: err.response.data.err,
      },
    });
  }
};

//
export const signup = (data) => async (dispatch) => {
  try {
    // try signup
    const response = await authAPI.post("/signup", data);

    // clear error
    dispatch({
      type: CLEAR_ERRORS,
    });
    //added
    response.data.result.type === "USER"
      ? dispatch({
          type: SET_USER_PROFILE,
          payload: response.data.result.profileDetails,
        })
      : dispatch({
          type: SET_COMPANY_PROFILE,
          payload: response.data.result.profileDetails,
        });

    //added
    // if there is no error  disptach signup sucess
    dispatch({
      type: SIGNUP_SUCESS,
      payload: response.data.result.token,
    });

    // return dispatch SIGNUP action
    return dispatch({
      type: SIGNUP,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userType: response.data.result.type,
        email: response.data.result.email,
        /* profile: response.data.result.profile,
        userData: response.data.result.profileDetails, */
      },
    });
  } catch (err) {
    //case signup fail dispatch RETURN_ERROR action to update the error state
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "signup",
        status: err.response.data.status,
        message: err.response.data.err,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
    dispatch({
      type: CLEAR_ERRORS,
    });
    dispatch({
      type: CLEAR_USER_PROFILE,
    });
    dispatch({
      type: CLEAR_COMPANY_PROFILE,
    });
  } catch (err) {
    //case signup fail
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "logout",
        message: "logout problem",
      },
    });
  }
};

export const changePassword = (data) => async (dispatch) => {
  try {
    const response = await authAPI.patch(`changePassword`, data);
    dispatch({
      type: CLEAR_ERRORS,
    });
    dispatch({
      type: CHANGE_PASSWORD,
    });
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "changePwd",
        status: err.response.data.status,
        message: err.response.data.err,
      },
    });
  }
};

export const fetechUserData = (token) => async (dispatch) => {
  try {
    authAPI.defaults.headers.common["x-auth-token"] = token;
    let response = await authAPI.get("login");

    dispatch({
      type: CLEAR_ERRORS,
    });

    //dispatch action login_sucess in case no error
    dispatch({
      type: LOGIN_SUCESS,
      payload: response.data.result.token,
    });

    //disptach resume action or company action
    response.data.result.type === "USER"
      ? dispatch({
          type: SET_USER_PROFILE,
          payload: response.data.result.profileDetails,
        })
      : dispatch({
          type: SET_COMPANY_PROFILE,
          payload: response.data.result.profileDetails,
        });

    return dispatch({
      type: FETCH_USER_DATA,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userType: response.data.result.type,
        email: response.data.result.email,
      },
    });
  } catch (err) {
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "token login err",
      },
    });
  }
};
