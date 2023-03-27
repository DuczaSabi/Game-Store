import {
  FETCH_GAMES_START,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAIL,
} from "./actionTypes";

import axios from "axios";

export function fetchGamesStart () {
  return { type: FETCH_GAMES_START };
}

export function fetchGamesSuccess (games) {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: games,
  };
}

export function fetchGamesFail (errorMessage) {
  return {
    payload: errorMessage,
    type: FETCH_GAMES_FAIL,
  };
}

export function fetchGames () {
  return async (dispatch) => {
    try {
      dispatch(fetchGamesStart());

      const games = await axios.get("http://localhost:3001/api/games");

      dispatch(fetchGamesSuccess(games.data));
    } catch (error) {
      dispatch(
        fetchGamesFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
