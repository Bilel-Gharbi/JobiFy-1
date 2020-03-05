import exempleAPI from "../API/Test";
//import type
import { FETCH_RESUME } from "./type";

console.log(FETCH_RESUME);

//action to fetech resume
export const fetechResume = async dispatch => {
  const data = await exempleAPI.get("/users");

  return dispatch({
    type: FETCH_RESUME,
    payload: data
  });
};
