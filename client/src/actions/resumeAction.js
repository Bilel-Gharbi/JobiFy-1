import store from "../store";
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
  DEL_SKILL,
  DEL_LANGUAGE,
  DEL_INTEREST,
} from "./type";

// get resume id from the store
//FIXME: problem resumeId undefined
const state = store.getState();
const resumeId = state.userProfile.resume.userResume.id;

export const addExperience = (data) => async (dispatch) => {
  const experience = await resumeAPI.post(`${resumeId}/experience`, data);

  return dispatch({
    type: ADD_EXPERIENCE,
    payload: experience.data.data,
  });
};

export const deleteExperience = (data) => async (dispatch) => {
  const experience = await resumeAPI.post(`${resumeId}/experience`, data);

  return dispatch({
    type: ADD_EXPERIENCE,
    payload: experience.data.data,
  });
};

export const updateExperience = (data) => async (dispatch) => {
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

export const deleteEducation = (data) => async (dispatch) => {
  const eduction = await resumeAPI.post(`${resumeId}/education`, data);
  // const result = await resumeAPI.post(`${resumeId}/experience`,data)

  return dispatch({
    type: ADD_EDUCATION,
    payload: eduction.data.newEducation,
  });
};
export const updateEducation = (data) => async (dispatch) => {
  const eduction = await resumeAPI.post(`${resumeId}/education`, data);
  // const result = await resumeAPI.post(`${resumeId}/experience`,data)

  return dispatch({
    type: ADD_EDUCATION,
    payload: eduction.data.newEducation,
  });
};

export const addSkill = (data) => async (dispatch) => {
  const newSkill = await resumeAPI.post(`${resumeId}/skill`, data);
  console.log(newSkill.data.newSkill);
  return dispatch({
    type: ADD_SKILL,
    payload: newSkill.data.newSkill,
  });
};

export const deleteSkill = (id) => async (dispatch) => {
  const delSkill = await resumeAPI.delete(`${resumeId}/skill/${id}`);
  console.log(delSkill.data.deletedSkill);
  //console.log("hello it's work", id);
  return dispatch({
    type: DEL_SKILL,
    payload: delSkill.data.deletedSkill,
  });
};

export const addCertificate = (data) => async (dispatch) => {
  const newCertificate = await resumeAPI.post(`${resumeId}/certificate`, data);
  return dispatch({
    type: ADD_CERTIFICATE,
    payload: newCertificate.data.newCertificate,
  });
};
export const deleteCertificate = (data) => async (dispatch) => {
  const newCertificate = await resumeAPI.post(`${resumeId}/certificate`, data);
  return dispatch({
    type: ADD_CERTIFICATE,
    payload: newCertificate.data.newCertificate,
  });
};
export const updateCertificate = (data) => async (dispatch) => {
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

export const deleteProject = (data) => async (dispatch) => {
  const newProject = await resumeAPI.post(`${resumeId}/project`, data);
  return dispatch({
    type: ADD_PROJECT,
    payload: newProject.data.newProject,
  });
};

export const updateProject = (data) => async (dispatch) => {
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
export const deleteLanguage = (id) => async (dispatch) => {
  const deletedLanguage = await resumeAPI.delete(`${resumeId}/language/${id}`);

  return dispatch({
    type: DEL_LANGUAGE,
    payload: deletedLanguage.data.deletedLanguage,
  });
};

export const addAward = (data) => async (dispatch) => {
  const newAward = await resumeAPI.post(`${resumeId}/award`, data);
  return dispatch({
    type: ADD_AWARD,
    payload: newAward.data.newAward,
  });
};

export const deleteAward = (data) => async (dispatch) => {
  const newAward = await resumeAPI.post(`${resumeId}/award`, data);
  return dispatch({
    type: ADD_AWARD,
    payload: newAward.data.newAward,
  });
};

export const updateAward = (data) => async (dispatch) => {
  const newAward = await resumeAPI.post(`${resumeId}/award`, data);
  return dispatch({
    type: ADD_AWARD,
    payload: newAward.data.newAward,
  });
};

export const addInterest = (data) => async (dispatch) => {
  const newInterest = await resumeAPI.post(`${resumeId}/interest`, data);
  return dispatch({
    type: ADD_INTEREST,
    payload: newInterest.data.newInterest,
  });
};
export const deleteInterest = (id) => async (dispatch) => {
  //console.log("del interets", id);
  const deletedInterest = await resumeAPI.delete(`${resumeId}/interest/${id}`);

  return dispatch({
    type: DEL_INTEREST,
    payload: deletedInterest.data.deletedInterest,
  });
};
