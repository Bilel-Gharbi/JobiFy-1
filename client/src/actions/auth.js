import authAPI from "../API/authAPI";

//import type
import { LOGIN, SIGNUP } from "./type";

export const login = obj => async dispatch => {
  try {
    const response = await authAPI.post("/login", obj);

    //set token
    localStorage.setItem("token", response.data.token);

    console.log(response.data);

    //2 get profil info data

    return dispatch({
      type: LOGIN,
      payload: {
        isLoged: true,
        token: response.data.token,
        msg: response.data.msg,
        userData: [1, 1, 3]
      }
    });
  } catch (err) {
    //console.log(err.response.data.err);
    return dispatch({
      type: LOGIN,
      payload: {
        isLoged: false,
        token: null,
        msg: err.response.data.err
      }
    });
  }
};

export const signup = () => async dispatch => {
  //const response = await authAPI.get("/signup");
  //console.log(response);
  //let payload = response.data.data;

  return dispatch({
    type: SIGNUP
    //payload
  });
};
