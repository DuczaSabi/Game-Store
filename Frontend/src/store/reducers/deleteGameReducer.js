import {
  DELETE_GAME_START,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  errorMessage: "",
};

const deleteGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_GAME_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case DELETE_GAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case DELETE_GAME_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default deleteGameReducer;
