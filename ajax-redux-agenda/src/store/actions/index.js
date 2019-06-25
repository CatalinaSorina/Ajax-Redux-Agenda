import axios from "axios";

import * as types from "./types";
import { axiosAuth } from "./axiosAuth";

export const login = creds => dispatch => {
  dispatch({ type: types.LOG_CONNECT });
  axios
    .post("http://localhost:3330/api/login", creds)
    .then(result => {
      localStorage.setItem("token", result.data.payload);
      dispatch({ type: types.LOG_SUCCES, payload: result.data.payload });
    })
    .catch(error => {
      dispatch({ type: types.LOG_FAIL, payload: error });
    });
};

export const getContacts = () => dispatch => {
  dispatch({ type: types.CONTACTS_CONNECT });
  axiosAuth()
    .get("http://localhost:3330/api/friends")
    .then(result => {
      dispatch({ type: types.CONTACTS_SUCCES, payload: result.data.data });
    })
    .catch(error => {
      dispatch({ type: types.CONTACTS_FAIL, payload: error });
    });
};
