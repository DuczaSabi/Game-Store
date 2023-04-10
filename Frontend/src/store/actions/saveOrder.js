import {
  SAVE_ORDER_START,
  SAVE_ORDER_SUCCESS,
  SAVE_ORDER_FAIL,
} from "./actionTypes";

import axios from "axios";

export function saveOrderStart () {
  return { type: SAVE_ORDER_START };
}

export function saveOrderSuccess (games) {
  return {
    type: SAVE_ORDER_SUCCESS,
    payload: games,
  };
}

export function saveOrderFail (errorMessage) {
  return {
    payload: errorMessage,
    type: SAVE_ORDER_FAIL,
  };
}

export function saveOrder (cart, user) {
  return async (dispatch) => {
    try {
      dispatch(saveOrderStart());

      const response = await axios.post(`http://localhost:3001/api/orders`, { cart, user });

      dispatch(saveOrderSuccess(response.data));
    } catch (error) {
      dispatch(
        saveOrderFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
}
