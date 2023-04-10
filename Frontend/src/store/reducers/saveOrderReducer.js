import {
  SAVE_ORDER_START,
  SAVE_ORDER_SUCCESS,
  SAVE_ORDER_FAIL,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  order: [],
  isFetching: true,
  errorMessage: "",
};

const saveOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_ORDER_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case SAVE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        isFetching: false,
        errorMessage: "",
      };
    case SAVE_ORDER_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default saveOrderReducer;
