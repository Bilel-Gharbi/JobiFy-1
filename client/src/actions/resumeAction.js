import exempleAPI from "../API/Test";
//import type
import { GET_RESUME } from "./type";

//action to fetech resume
export const getResume = data => dispatch => {
  //const data = await exempleAPI.get("/users");
  return dispatch({
    type: GET_RESUME,
    payload: data
  });
};

export const clearResume = () => dispatch => {
  return dispatch({
    type: CLEAR_ERRORS
  });
};
