import {
  FETCH_GENRES_START,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAIL,
} from "./actionTypes";

import axios from "axios";

export function fetchGenresStart () {
  return { type: FETCH_GENRES_START };
}

export function fetchGenresSuccess (genres) {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: genres,
  };
}

export function fetchGenresFail (errorMessage) {
  return {
    payload: errorMessage,
    type: FETCH_GENRES_FAIL,
  };
}

export function fetchGenres () {
  return async (dispatch) => {
    try {
      dispatch(fetchGenresStart());

      const response = await axios.get(`http://localhost:3001/api/genres`);

      dispatch(fetchGenresSuccess(response.data));
    } catch (error) {
      dispatch(
        fetchGenresFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
