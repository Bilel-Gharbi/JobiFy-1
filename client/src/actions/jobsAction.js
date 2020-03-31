import JobsAPI from "../API/JobsAPI";

//import type
import {
  FETCH_JOBS,
  APPLY_JOB,
  CLEAR_ERRORS,
  RETURN_ERRORS,
  FETCH_JOB_DETAILS,
  SET_DEFAULT_JOB_DETAILS
} from "./type";

export const fetechJobs = () => async dispatch => {
  const response = await JobsAPI.get("/all");
  //let payload = response.data.data;

  //dispatch set default jobdetails
  dispatch({
    type: SET_DEFAULT_JOB_DETAILS,
    payload: {
      jobDetails: response.data.data[0]
    }
  });

  return dispatch({
    type: FETCH_JOBS,
    payload: {
      jobs: response.data.data
    }
  });
};

export const fetechJobDetails = job => dispatch => {
  return dispatch({
    type: FETCH_JOB_DETAILS,
    payload: {
      jobDetails: job
    }
  });
};

export const applyToJob = (jobId, resumeId) => async dispatch => {
  console.log(" applyToJob  action fired ", jobId, resumeId);
  try {
    await JobsAPI.post(`apply/${jobId}/${resumeId}`);
    //let payload = response.data.data;
    // clear error
    dispatch({
      type: CLEAR_ERRORS
    });
    //dispatch apply to job
    return dispatch({
      type: APPLY_JOB
    });
  } catch (err) {
    //error
    dispatch({
      type: RETURN_ERRORS,
      payload: {
        id: "apply to job",
        message: err.response.data.err,
        status: err.response.data.status
      }
    });
  }
};
