import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  errorMessage: "",
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GAMES_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case FETCH_GAMES_FAIL:
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
