import { ADD_GAME_START, ADD_GAME_SUCCESS, ADD_GAME_FAIL } from "./actionTypes";

import axios from "axios";

export function addGameStart() {
  return { type: ADD_GAME_START };
}

export function addGameSuccess(game) {
  return {
    type: ADD_GAME_SUCCESS,
    payload: game,
  };
}

export function addGameFail(errorMessage) {
  return {
    payload: errorMessage,
    type: ADD_GAME_FAIL,
  };
}

export function addGame(addGameData) {
  return async (dispatch) => {
    try {
      dispatch(addGameStart());

      const result = await axios.put(
        `http://localhost:3001/api/add`,
        addGameData
      );

      dispatch(addGameSuccess(result.data));
    } catch (error) {
      dispatch(
        addGameFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
