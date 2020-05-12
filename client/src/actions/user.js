//import type
import { SET_USER_PROFILE, CLEAR_USER_PROFILE, UPDATE_USER_INFO } from "./type";
import userAPI from "../API/userAPI";

//action to fetech user
export const setUserProfile = (data) => (dispatch) => {
  return dispatch({
    type: SET_USER_PROFILE,
    payload: data,
  });
};

export const clearUserProfile = () => (dispatch) => {
  return dispatch({
    type: CLEAR_USER_PROFILE,
  });
};

export const updateUserInfo = (data) => async (dispatch, getState) => {
  const authId = getState().userProfile.user.AuthId;
  let updatedUserInfo = await userAPI.patch(`${authId}/info`, data);

  return dispatch({
    type: UPDATE_USER_INFO,
    payload: updatedUserInfo.data.data,
  });
};
