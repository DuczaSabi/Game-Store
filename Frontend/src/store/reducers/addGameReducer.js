import {
  ADD_GAME_START,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  errorMessage: "",
};

const addGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GAME_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case ADD_GAME_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default addGameReducer;
