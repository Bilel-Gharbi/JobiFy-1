//import type
import { SET_COMPANY_PROFILE, CLEAR_COMPANY_PROFILE } from "./type";

//action to fetech resume
export const setCompanyProfile = data => dispatch => {
  return dispatch({
    type: SET_COMPANY_PROFILE,
    payload: data
  });
};

export const clearCompanyProfile = () => dispatch => {
  return dispatch({
    type: CLEAR_COMPANY_PROFILE
  });
};
