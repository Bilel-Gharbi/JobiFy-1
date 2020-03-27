//import type
import { SET_USER_PROFILE, CLEAR_USER_PROFILE } from "./type";

//action to fetech user
export const setUserProfile = data => dispatch => {
  return dispatch({
    type: SET_USER_PROFILE,
    payload: data
  });
};

export const clearUserProfile = () => dispatch => {
  return dispatch({
    type: CLEAR_USER_PROFILE
  });
};
