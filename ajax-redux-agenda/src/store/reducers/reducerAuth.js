import * as types from "../actions/types";

const initialState = {
  loading: false,
  logged: false,
  error: null
};

export const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_CONNECT:
      return {
        ...state,
        loading: true
      };
    case types.LOG_SUCCES:
      return {
        ...state,
        loading: false,
        logged: true
      };
    case types.LOG_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        state
      };
  }
};
