//import error type
import {
  SET_PROFILE_SECTION,
  SET_PAGE,
  SET_QUERY_TERM,
  SET_LIMIT,
  SET_WIZARD_FORM,
  SET_WIZARD_FORM_FIRST_INFO,
  SET_WIZARD_FORM_FIRST_RESUME_INFO,
  SET_WIZARD_FORM_FIRST_EXPERIENCE,
  SET_WIZARD_FORM_FIRST_EDUCATION,
  SET_WIZARD_FORM_FIRST_SKILL,
  CLEAR_WIZARD_FORM_DATA,
} from "./type";

import resumeAPI from "../API/resumeAPI";
import userAPI from "../API/userAPI";
import authAPI from "../API/authAPI";

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

export const setWizardFormExperience = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM_FIRST_EXPERIENCE,
    payload: element,
  });
};

export const setWizardFormInfo = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM_FIRST_INFO,
    payload: element,
  });
};

export const setWizardFormResumeInfo = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM_FIRST_RESUME_INFO,
    payload: element,
  });
};

export const setWizardFormEducation = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM_FIRST_EDUCATION,
    payload: element,
  });
};

export const setWizardFormSkill = (element) => (dispatch) => {
  return dispatch({
    type: SET_WIZARD_FORM_FIRST_SKILL,
    payload: element,
  });
};

export const AddUserWizardInfo = () => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const authId = getState().userProfile.user.AuthId;
  const userId = getState().userProfile.user.id;
  const wizardFromData = getState().UI.wizardFormData;
  console.log("wizard data ", wizardFromData);
  const {
    personalInfo,
    resumeInfo,
    experience,
    education,
    skill,
  } = wizardFromData;

  const AddUserInfo = userAPI.post(`${authId}/info`, {
    ...personalInfo,
  });

  const AddResumeInfo = resumeAPI.post(`${resumeId}/info`, { ...resumeInfo });

  const AddExperience = resumeAPI.post(`${resumeId}/experience`, {
    ...experience,
  });
  const AddEducation = resumeAPI.post(`${resumeId}/education`, {
    ...education,
  });
  const AddSkill = resumeAPI.post(`${resumeId}/skill`, { ...skill });

  const activeProfile = userAPI.patch(`active?id=${userId}`);

  await Promise.all([
    AddUserInfo,
    AddResumeInfo,
    AddExperience,
    AddEducation,
    AddSkill,
    activeProfile,
  ])
    .then(() => console.log("done"))
    .catch((err) => console.log(err));

  return dispatch({
    type: CLEAR_WIZARD_FORM_DATA,
  });
};
