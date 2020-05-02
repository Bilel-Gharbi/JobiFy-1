import resumeAPI from "../API/resumeAPI";
import * as TYPE from "./type";

export const addExperience = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const experience = await resumeAPI.post(`${resumeId}/experience`, data);

  return dispatch({
    type: TYPE.ADD_EXPERIENCE,
    payload: experience.data.data,
  });
};

export const deleteExperience = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedExperience = await resumeAPI.delete(
    `${resumeId}/experience/${id}`
  );

  return dispatch({
    type: TYPE.DEL_EXPERIENCE,
    payload: deletedExperience.data.deletedExperience,
  });
};

export const updateExperience = (id, data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const experience = await resumeAPI.patch(
    `${resumeId}/experience/${id}`,
    data
  );

  return dispatch({
    type: TYPE.UPDATE_EXPERIENCE,
    payload: experience.data.newExperience,
  });
};

export const addEducation = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const eduction = await resumeAPI.post(`${resumeId}/education`, data);

  return dispatch({
    type: TYPE.ADD_EDUCATION,
    payload: eduction.data.newEducation,
  });
};

export const deleteEducation = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedEducation = await resumeAPI.delete(
    `${resumeId}/education/${id}`
  );

  return dispatch({
    type: TYPE.DEL_EDUCATION,
    payload: deletedEducation.data.deletedEducation,
  });
};

export const updateEducation = (id, data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const eduction = await resumeAPI.patch(`${resumeId}/education/${id}`, data);

  return dispatch({
    type: TYPE.UPDATE_EDUCATION,
    payload: eduction.data.newEducation,
  });
};

export const addSkill = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newSkill = await resumeAPI.post(`${resumeId}/skill`, data);
  return dispatch({
    type: TYPE.ADD_SKILL,
    payload: newSkill.data.newSkill,
  });
};

export const deleteSkill = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const delSkill = await resumeAPI.delete(`${resumeId}/skill/${id}`);

  return dispatch({
    type: TYPE.DEL_SKILL,
    payload: delSkill.data.deletedSkill,
  });
};

export const addCertificate = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newCertificate = await resumeAPI.post(`${resumeId}/certificate`, data);
  return dispatch({
    type: TYPE.ADD_CERTIFICATE,
    payload: newCertificate.data.newCertificate,
  });
};
export const deleteCertificate = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedCertificate = await resumeAPI.delete(
    `${resumeId}/certificate/${id}`
  );
  return dispatch({
    type: TYPE.DEL_CERTIFICATE,
    payload: deletedCertificate.data.deletedCertificate,
  });
};
export const updateCertificate = (id, data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newCertificate = await resumeAPI.patch(
    `${resumeId}/certificate/${id}`,
    data
  );
  return dispatch({
    type: TYPE.UPDATE_CERTIFICATE,
    payload: newCertificate.data.newCertificate,
  });
};

export const addProject = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newProject = await resumeAPI.post(`${resumeId}/project`, data);
  return dispatch({
    type: TYPE.ADD_PROJECT,
    payload: newProject.data.newProject,
  });
};
export const deleteProject = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedProject = await resumeAPI.delete(`${resumeId}/project/${id}`);
  return dispatch({
    type: TYPE.DEL_PROJECT,
    payload: deletedProject.data.deletedProject,
  });
};
export const updateProject = (id, data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newProject = await resumeAPI.patch(`${resumeId}/project/${id}`, data);
  return dispatch({
    type: TYPE.UPDATE_PROJECT,
    payload: newProject.data.newProject,
  });
};

export const addLanguage = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newLanguage = await resumeAPI.post(`${resumeId}/language`, data);
  return dispatch({
    type: TYPE.ADD_LANGUAGE,
    payload: newLanguage.data.newLanguage,
  });
};
export const deleteLanguage = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedLanguage = await resumeAPI.delete(`${resumeId}/language/${id}`);

  return dispatch({
    type: TYPE.DEL_LANGUAGE,
    payload: deletedLanguage.data.deletedLanguage,
  });
};

export const addAward = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newAward = await resumeAPI.post(`${resumeId}/award`, data);
  return dispatch({
    type: TYPE.ADD_AWARD,
    payload: newAward.data.newAward,
  });
};

export const deleteAward = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const deletedAward = await resumeAPI.delete(`${resumeId}/award/${id}`);
  return dispatch({
    type: TYPE.DEL_AWARD,
    payload: deletedAward.data.deletedAward,
  });
};

export const updateAward = (id, data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newAward = await resumeAPI.patch(`${resumeId}/award/${id}`, data);
  return dispatch({
    type: TYPE.UPDATE_AWARD,
    payload: newAward.data.newAward,
  });
};

export const addInterest = (data) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  const newInterest = await resumeAPI.post(`${resumeId}/interest`, data);
  return dispatch({
    type: TYPE.ADD_INTEREST,
    payload: newInterest.data.newInterest,
  });
};
export const deleteInterest = (id) => async (dispatch, getState) => {
  const resumeId = getState().userProfile.resume.userResume.id;
  //console.log("del interets", id);
  const deletedInterest = await resumeAPI.delete(`${resumeId}/interest/${id}`);

  return dispatch({
    type: TYPE.DEL_INTEREST,
    payload: deletedInterest.data.deletedInterest,
  });
};
