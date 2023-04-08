import {
  MODIFY_GAME_START,
  MODIFY_GAME_SUCCESS,
  MODIFY_GAME_FAIL,
} from "./actionTypes";

import axios from "axios";

export function modifyGameStart () {
  return { type: MODIFY_GAME_START };
}

export function modifyGameSuccess (game) {
  return {
    type: MODIFY_GAME_SUCCESS,
    payload: game,
  };
}

export function modifyGameFail (errorMessage) {
  return {
    payload: errorMessage,
    type: MODIFY_GAME_FAIL,
  };
}

export function modifyGame (game) {
  return async (dispatch) => {
    try {
      dispatch(modifyGameStart());

      const result = await axios.put(`http://localhost:3001/api/games`, game);

      dispatch(modifyGameSuccess(result.data));
    } catch (error) {
      dispatch(
        modifyGameFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
