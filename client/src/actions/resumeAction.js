import resumeAPI from "../API/resumeAPI";

//import type
import {
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  ADD_PROJECT,
  ADD_LANGUAGE,
  ADD_SKILL,
  ADD_CERTIFICATE,
  ADD_INTEREST,
  ADD_AWARD,
} from "./type";

import store from "../store";

// get resume id from the store
let resumeId = store.getState().userProfile.resume.userResume.id;

export const addExperience = (data) => async (dispatch) => {
  const experience = await resumeAPI.post(`${resumeId}/experience`, data);

  return dispatch({
    type: ADD_EXPERIENCE,
    payload: experience.data.data,
  });
};

export const addEducation = (data) => async (dispatch) => {
  const eduction = await resumeAPI.post(`${resumeId}/education`, data);
  // const result = await resumeAPI.post(`${resumeId}/experience`,data)

  return dispatch({
    type: ADD_EDUCATION,
    payload: eduction.data.newEducation,
  });
};

export const addSkill = (data) => async (dispatch) => {
  const newSkill = await resumeAPI.post(`${resumeId}/skill`, data);
  return dispatch({
    type: ADD_SKILL,
    payload: newSkill.data.newSkill,
  });
};

export const addCertificate = (data) => async (dispatch) => {
  const newCertificate = await resumeAPI.post(`${resumeId}/certificate`, data);
  return dispatch({
    type: ADD_CERTIFICATE,
    payload: newCertificate.data.newCertificate,
  });
};

export const addProject = (data) => async (dispatch) => {
  const newProject = await resumeAPI.post(`${resumeId}/project`, data);
  return dispatch({
    type: ADD_PROJECT,
    payload: newProject.data.newProject,
  });
};

export const addLanguage = (data) => async (dispatch) => {
  const newLanguage = await resumeAPI.post(`${resumeId}/language`, data);
  return dispatch({
    type: ADD_LANGUAGE,
    payload: newLanguage.data.newLanguage,
  });
};

export const addAward = (data) => async (dispatch) => {
  const newAward = await resumeAPI.post(`${resumeId}/award`, data);
  return dispatch({
    type: ADD_AWARD,
    payload: newAward.data.newAward,
  });
};

export const newInterest = (data) => async (dispatch) => {
  const newInterest = await resumeAPI.post(`${resumeId}/interest`, data);
  return dispatch({
    type: ADD_INTEREST,
    payload: newInterest.data.newInterest,
  });
};
