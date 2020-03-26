import JobsAPI from "../API/JobsAPI";
import axios from "axios";

//import type
import { FETCH_JOBS, APPLY_JOB, CLEAR_ERRORS, RETURN_ERRORS } from "./type";

export const fetechJobs = () => async dispatch => {
  console.log(" fetch jobs action fired ");
  const response = await JobsAPI.get("/all");
  let payload = response.data.data;
  return dispatch({
    type: FETCH_JOBS,
    payload
  });
};

export const applyToJob = (jobId, resumeId) => async dispatch => {
  console.log(" applyToJob  action fired ", jobId, resumeId);
  try {
    const response = await JobsAPI.post(`apply/${jobId}/${resumeId}`);
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
