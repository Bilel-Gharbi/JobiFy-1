//import error type
import { SET_PROFILE_SECTION } from "./type";

//action to dispatch err and update the err reducer
export const setProfileSectionToRender = (element) => (dispatch) => {
  return dispatch({
    type: SET_PROFILE_SECTION,
    payload: element,
  });
};

/* //to clear error
export const clearErrors = () => dispatch => {
  return dispatch({
    type: CLEAR_ERRORS
  });
}; */
