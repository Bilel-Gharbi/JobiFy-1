//import type
import {
  SET_COMPANY_PROFILE,
  CLEAR_COMPANY_PROFILE,
  ADD_COMPANY_JOB_OFFER,
  ADD_COMPANY_JOB_OFFER_SKILLS,
  ADD_COMPANY_JOB_OFFER_WITH_SKILLS,
  CREATE_COMPANY_PROFILE_INFO,
  UPDATE_COMPANY_JOB_OFFER,
  DELETE_COMPANY_JOB_OFFER,
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
  //FIXME:

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
//http://localhost:5000/api/company/1/jobOffer/1/skills
export const addCompanyJobOfferSkill = (jobId, skill) => (dispatch) => {
  /*   const result = await companyAPI.post(
    `${companyId}/jobOffer/${jobId}/skills`,
    [skill]
  ); */
  return dispatch({
    type: ADD_COMPANY_JOB_OFFER_SKILLS,
  });
};

export const UpdateCompanyJobOffer = (jobId, skill) => (dispatch) => {
  /*   const result = await companyAPI.post(
    `${companyId}/jobOffer/${jobId}/skills`,
    [skill]
  ); */
  return dispatch({
    type: UPDATE_COMPANY_JOB_OFFER,
  });
};

export const deleteCompanyJobOffer = (jobId, skill) => (dispatch, getState) => {
  const companyId = getState().companyProfile.company.id;
  /*   const result = await companyAPI.post(
    `${companyId}/jobOffer/${jobId}/skills`,
    [skill]
  ); */
  return dispatch({
    type: DELETE_COMPANY_JOB_OFFER,
  });
};
