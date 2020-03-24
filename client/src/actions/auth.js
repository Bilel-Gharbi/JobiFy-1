import authAPI from "../API/authAPI";

//import type
import {
  LOGIN,
  SIGNUP,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  SIGNUP_SUCESS,
  SIGNUP_FAIL,
  LOGOUT
} from "./type";

//error actions
import { RETURN_ERRORS, CLEAR_ERRORS } from "./type";

export const login = obj => async dispatch => {
  try {
    const response = await authAPI.post("/login", obj);

    //delete error
    dispatch({
      type: CLEAR_ERRORS
    });

    //dispatch action login_sucess in case no error
    dispatch({
      type: LOGIN_SUCESS,
      payload: response.data.result.token
    });

    //dispatch and return LOGIN action to set state
    return dispatch({
      type: LOGIN,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userType: response.data.result.type,
        profile: response.data.result.profile,
        userData: response.data.result.profileDetails
      }
    });
  } catch (err) {
    // in case of Erro Dispatch and RETURN_ERROR action
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "login",
        status: err.response.data.status,
        message: err.response.data.err
      }
    });
  }
};

export const signup = data => async dispatch => {
  try {
    // try signup
    const response = await authAPI.post("/signup", data);

    // clear error
    dispatch({
      type: CLEAR_ERRORS
    });
    // if there is no error  disptach signup sucess
    dispatch({
      type: SIGNUP_SUCESS,
      payload: response.data.result.token
    });

    // return dispatch SIGNUP action
    return dispatch({
      type: SIGNUP,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userType: response.data.result.type,
        profile: response.data.result.profile,
        userData: response.data.result.profileDetails
      }
    });
  } catch (err) {
    //case signup fail dispatch RETURN_ERROR action to update the error state
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "signup",
        status: err.response.data.status,
        message: err.response.data.err
      }
    });
  }
};

export const logout = () => async dispatch => {
  try {
    return dispatch({
      type: LOGOUT
    });
  } catch (err) {
    //case signup fail
    return dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "logout",
        message: "logout problem"
      }
    });
  }
};
