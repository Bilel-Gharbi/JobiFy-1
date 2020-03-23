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
    //set token
    //localStorage.setItem("token", response.data.token);
    //delete error
    dispatch({
      type: CLEAR_ERRORS
    });
    //dispatch action login_sucess
    dispatch({
      type: LOGIN_SUCESS,
      payload: response.data.result.token
    });

    //dispatch action login
    return dispatch({
      type: LOGIN,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userData: response.data.result.user
      }
    });
  } catch (err) {
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
    dispatch({
      type: CLEAR_ERRORS
    });
    console.log("hello", response);
    dispatch({
      type: SIGNUP_SUCESS,
      payload: response.data.result.token
    });
    return dispatch({
      type: SIGNUP,
      payload: {
        isLoged: true,
        token: response.data.result.token,
        userData: response.data.result.user
      }
    });
  } catch (err) {
    //case signup fail
    console.log(err);
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
