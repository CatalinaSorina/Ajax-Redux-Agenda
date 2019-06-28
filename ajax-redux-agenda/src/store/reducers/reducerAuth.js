import * as types from "../actions/types";

const reducerAuthInitialState = {
  loading: false,
  logged: false,
  error: false
};

export const reducerAuth = (stateAuth = reducerAuthInitialState, action) => {
  // console.log(stateAuth);
  switch (action.type) {
    case types.LOG_CONNECT:
      return {
        ...stateAuth,
        loading: true
      };
    case types.LOG_SUCCES:
      return {
        ...stateAuth,
        loading: false,
        logged: true
      };
    case types.LOG_FAIL:
      return {
        ...stateAuth,
        error: true
      };
    default:
      return {
        stateAuth
      };
  }
};
