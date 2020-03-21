//import error type
import { RETURN_ERRORS, CLEAR_ERRORS } from "./type";

//action to dispatch err and update the err reducer
export const returnErrors = obj => dispatch => {
  return dispatch({
    type: RETURN_ERRORS,
    payload: obj
  });
};

//to clear error
export const clearErrors = () => dispatch => {
  return dispatch({
    type: CLEAR_ERRORS
  });
};
