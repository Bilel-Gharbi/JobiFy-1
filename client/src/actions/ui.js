//import error type
import {
  SET_PROFILE_SECTION,
  SET_PAGE,
  SET_QUERY_TERM,
  SET_LIMIT,
  SET_WIZARD_FORM,
} from "./type";

//action to dispatch err and update the err reducer
export const setProfileSectionToRender = (element) => (dispatch) => {
  return dispatch({
    type: SET_PROFILE_SECTION,
    payload: element,
  });
};

export const setPaginationPage = (element) => (dispatch) => {
  return dispatch({
    type: SET_PAGE,
    payload: element,
  });
};

export const setPaginationLimit = (element) => (dispatch) => {
  return dispatch({
    type: SET_LIMIT,
    payload: element,
  });
};

export const setQuerySearch = (element) => (dispatch) => {
  return dispatch({
    type: SET_QUERY_TERM,
    payload: element,
  });
};

export const setWizardForm = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM,
    payload: element,
  });
};
