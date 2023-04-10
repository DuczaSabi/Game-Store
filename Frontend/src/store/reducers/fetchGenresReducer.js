import {
  FETCH_GENRES_START,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  genres: [],
  isFetching: true,
  errorMessage: "",
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GENRES_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case FETCH_GENRES_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
