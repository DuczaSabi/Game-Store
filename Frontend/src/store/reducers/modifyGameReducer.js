import {
  MODIFY_GAME_START,
  MODIFY_GAME_SUCCESS,
  MODIFY_GAME_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  errorMessage: "",
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_GAME_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case MODIFY_GAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case MODIFY_GAME_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
