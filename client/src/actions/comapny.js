//import type
import {
  SET_COMPANY_PROFILE,
  CLEAR_COMPANY_PROFILE,
  ADD_COMPANY_JOB_OFFER,
  ADD_COMPANY_JOB_OFFER_SKILLS,
  ADD_COMPANY_JOB_OFFER_SKILL,
  ADD_COMPANY_JOB_OFFER_WITH_SKILLS,
  CREATE_COMPANY_PROFILE_INFO,
  UPDATE_COMPANY_JOB_OFFER,
  DELETE_COMPANY_JOB_OFFER,
  DELETE_COMPANY_JOB_OFFER_SKILL,
} from "./type";

import companyAPI from "../API/comapnyAPI";

//action to fetech resume
export const setCompanyProfile = (data) => (dispatch) => {
  return dispatch({
    type: SET_COMPANY_PROFILE,
    payload: data,
  });
};

export const clearCompanyProfile = () => (dispatch) => {
  return dispatch({
    type: CLEAR_COMPANY_PROFILE,
  });
};

//http://localhost:5000/api/company/3/info
export const createCompanyProfileInfo = (data) => async (
  dispatch,
  getState
) => {
  const authId = getState().companyProfile.company.AuthId;
  const companyId = getState().companyProfile.company.id;

  const activeProfile = await companyAPI.patch(`active?id=${companyId}`);
  const result = await companyAPI.patch(`${authId}/info`, data);

  return dispatch({
    type: CREATE_COMPANY_PROFILE_INFO,
    payload: result.data.data,
  });
};
//http://localhost:5000/api/company/1/jobOffer
export const addCompanyJobOffer = (job, skills) => async (
  dispatch,
  getState
) => {
  const companyId = getState().companyProfile.company.id;
  //create job offer
  const newJobOffer = await companyAPI.post(`${companyId}/jobOffer`, job);

  // add skills to job offer
  const jobId = newJobOffer.data.newJobOffer.id;

  const result = await companyAPI.post(
    `${companyId}/jobOffer/${jobId}/skills`,
    skills
  );

  return dispatch({
    type: ADD_COMPANY_JOB_OFFER_WITH_SKILLS,
    payload: result.data.jobsList,
  });
};
//http://localhost:5000/api/company/1/jobOffer/1/skill
export const addCompanyJobOfferSkill = (jobId, skill) => async (
  dispatch,
  getState
) => {
  const companyId = getState().companyProfile.company.id;

  const newSkill = await companyAPI.post(
    `${companyId}/jobOffer/${jobId}/skill`,
    skill
  );
  return dispatch({
    type: ADD_COMPANY_JOB_OFFER_SKILL,
    payload: newSkill.data.newJobOfferSkill,
  });
};
//http://localhost:5000/api/company/4/jobOffer/4
export const UpdateCompanyJobOffer = (jobId, newJobOffer) => async (
  dispatch,
  getState
) => {
  const companyId = getState().companyProfile.company.id;
  const result = await companyAPI.patch(
    `${companyId}/jobOffer/${jobId}`,
    newJobOffer
  );

  return dispatch({
    type: UPDATE_COMPANY_JOB_OFFER,
    payload: result.data.newJobOffer,
  });
};
//http://localhost:5000/api/company/3/jobOffer/1
export const deleteCompanyJobOffer = (jobId) => async (dispatch, getState) => {
  const companyId = getState().companyProfile.company.id;
  const result = await companyAPI.delete(`${companyId}/jobOffer/${jobId}`);
  return dispatch({
    type: DELETE_COMPANY_JOB_OFFER,
    payload: result.data.deletedJobOffer,
  });
};

export const deleteJobOfferSkill = (skillId, jobId) => async (
  dispatch,
  getState
) => {
  const companyId = getState().companyProfile.company.id;
  const result = await companyAPI.delete(
    `${companyId}/jobOffer/${jobId}/skill/${skillId}`
  );
  return dispatch({
    type: DELETE_COMPANY_JOB_OFFER_SKILL,
    payload: result.data.deletedSkill,
  });
};
