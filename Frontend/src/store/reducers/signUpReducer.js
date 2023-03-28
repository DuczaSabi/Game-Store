import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {},
  isAuthenticated: false,
  isFetching: true,
  errorMessage: "",
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isFetching: false,
        errorMessage: "",
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
