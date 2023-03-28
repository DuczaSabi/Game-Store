import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "./actionTypes";

import axios from "axios";

export function signUpStart () {
  return { type: SIGN_UP_START };
}

export function signUpSuccess (user) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  };
}

export function signUpFail (errorMessage) {
  return {
    type: SIGN_UP_FAIL,
    payload: errorMessage,
  };
}

export function signUp (email, password, name) {
  return async (dispatch) => {
    try {
      dispatch(signUpStart());

      const user = await axios.post(`http://localhost:3001/api/signup`, { email, password, name });
      localStorage.setItem('token', user.data.token)
      dispatch(signUpSuccess(user.data));
    } catch (error) {
      dispatch(
        signUpFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
