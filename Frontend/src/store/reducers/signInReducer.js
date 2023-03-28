import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  user: {},
  isAuthenticated: false,
  isFetching: true,
  errorMessage: "",
};

const signInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: "",
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isFetching: false,
        errorMessage: "",
      };
    case SIGN_IN_FAIL:
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

export default signInReducer;
