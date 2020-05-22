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
  SEARCH_COMPANY_JOB_OFFER,
  FILTER_COMPANY_JOB_OFFER,
  FETCH_COMPANY_JOB_APPLICATIONS,
  FETCH_CANDIDATE_DETAILS,
  ACCEPT_REJECT_CANDIATE,
} from "./type";

import companyAPI from "../API/comapnyAPI";

import * as _ from "underscore";

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

  await companyAPI.post(`${companyId}/jobOffer/${jobId}/skills`, skills);
  //http://localhost:5000/api/company/8/jobOffers
  const result = await companyAPI.get(`${companyId}/jobOffers`, skills);
  return dispatch({
    type: ADD_COMPANY_JOB_OFFER_WITH_SKILLS,
    payload: result.data.data,
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
//http://localhost:5000/api/company/3/applications
export const fetchCompanyJobOfferApplications = (companyId) => async (
  dispatch
) => {
  const result = await companyAPI.get(`${companyId}/applications`);
  return dispatch({
    type: FETCH_COMPANY_JOB_APPLICATIONS,
    payload: result.data.applications,
  });
};

//localhost:5000/api/company/applications/resume/16

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
//Search jobOffer
export const searchJobByPosition = (term) => async (dispatch, getState) => {
  const companyId = getState().companyProfile.company.id;
  const jobOffers = getState().companyProfile.jobOffers;

  let result;
  if (term.length === 0) {
    let jobs = await companyAPI.get(`${companyId}/jobOffers`);
    result = jobs.data.data;
  } else {
    result = jobOffers.filter((job) =>
      job.jobPosition.toUpperCase().includes(term.toUpperCase())
    );
  }

  return dispatch({
    type: SEARCH_COMPANY_JOB_OFFER,
    payload: result,
  });
};
export const filterJobByContract = (term) => async (dispatch, getState) => {
  const companyId = getState().companyProfile.company.id;
  const jobOffers = await companyAPI.get(`${companyId}/jobOffers`);

  let result;
  if (term == "All") {
    let jobs = await companyAPI.get(`${companyId}/jobOffers`);
    result = jobs.data.data;
  } else {
    result = jobOffers.data.data.filter((job) => job.JobContractType === term);
  }

  return dispatch({
    type: FILTER_COMPANY_JOB_OFFER,
    payload: result,
  });
};

export const acceptOrRejectCandidate = (id, accept, data) => async (
  dispatch
) => {
  const result = await companyAPI.patch(
    `applications/${id}?accept=${accept}`,
    data
  );

  return dispatch({
    type: ACCEPT_REJECT_CANDIATE,
    payload: result.data.application,
  });
};
