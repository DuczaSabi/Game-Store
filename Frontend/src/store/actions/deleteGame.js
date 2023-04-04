import {
  DELETE_GAME_START,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAIL,
} from "./actionTypes";

import axios from "axios";

export function deleteGameStart() {
  return { type: DELETE_GAME_START };
}

export function deleteGameSuccess(game) {
  return {
    type: DELETE_GAME_SUCCESS,
    payload: game,
  };
}

export function deleteGameFail(errorMessage) {
  return {
    payload: errorMessage,
    type: DELETE_GAME_FAIL,
  };
}

export function deleteGame(deleteGameData) {
  return async (dispatch) => {
    try {
      dispatch(deleteGameStart());

      const result = await axios.put(`http://localhost:3001/api/delete`, {
        deleteGameData,
      });

      dispatch(deleteGameSuccess(result.data));
    } catch (error) {
      dispatch(
        deleteGameFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
