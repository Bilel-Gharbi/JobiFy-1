import exempleAPI from "../API/Test";
//import type
import { FETCH_JOBS } from "./type";

export const fetechJobs = () => async dispatch => {
  console.log("test action");
  const response = await exempleAPI.get("/films/");
  let payload = response.data.results;

  return dispatch({
    type: FETCH_JOBS,
    payload
  });
};
