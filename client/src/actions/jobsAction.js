import JobsAPI from "../API/JobsAPI";

//import type
import { FETCH_JOBS } from "./type";

export const fetechJobs = () => async dispatch => {
  const response = await JobsAPI.get("/");
  //console.log(response);
  let payload = response.data.data;

  return dispatch({
    type: FETCH_JOBS,
    payload
  });
};
