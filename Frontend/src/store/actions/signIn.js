import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "./actionTypes";

import axios from "axios";

export function signInStart () {
  return { type: SIGN_IN_START };
}

export function signInSuccess (user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
}

export function signInFail (errorMessage) {
  return {
    type: SIGN_IN_FAIL,
    payload: errorMessage,
  };
}

export function signIn (email, password) {
  return async (dispatch) => {
    try {
      dispatch(signInStart());

      const user = await axios.post(`http://localhost:3001/api/signin`, { email, password });
      localStorage.setItem('token', user.data.token)
      localStorage.setItem('current_user', email)
      dispatch(signInSuccess(user.data));
    } catch (error) {
      dispatch(
        signInFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
