import axios from "axios";

import * as types from "./types";
import { axiosAuth } from "./axiosAuth";

export const login = creds => dispatch => {
  dispatch({ type: types.LOG_CONNECT });
  axios
    .post("http://localhost:3330/api/login", creds)
    .then(result => {
      console.log(result.data);
      localStorage.setItem("token", result.data.payload);
      dispatch({ type: types.LOG_SUCCES, payload: result.data.payload });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: types.LOG_FAIL, payload: error });
    });
};

export const getContacts = () => dispatch => {
  console.log(types.CONTACTS_CONNECT);
  dispatch({ type: types.CONTACTS_CONNECT });
  axiosAuth()
    .get("http://localhost:3330/api/friends")
    .then(result => {
      console.log("Action contacts succes: ", result.data);
      dispatch({ type: types.CONTACTS_SUCCES, payload: result.data });
    })
    .catch(error => {
      console.log("Action contacts fail: ", error);
      dispatch({ type: types.CONTACTS_FAIL, payload: error });
    });
};

export const addContact = contact => dispatch => {
  dispatch({ type: types.CONTACTS_CONNECT });
  axiosAuth()
    .post("http://localhost:3330/api/friends/", contact)
    .then(result => {
      console.log("Action add contacts succes: ", result.data);
      dispatch({ type: types.CONTACTS_SUCCES, payload: result.data });
    })
    .catch(error => {
      console.log("Action add contacts fail: ", error);
      dispatch({ type: types.CONTACTS_FAIL, payload: error });
    });
};

export const deleteContact = idContact => dispatch => {
  dispatch({ type: types.CONTACTS_CONNECT });
  axiosAuth()
    .delete(`http://localhost:3330/api/friends/${idContact}`)
    .then(result => {
      dispatch({ type: types.CONTACTS_SUCCES, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: types.CONTACTS_FAIL, payload: error });
    });
};

export const updateContact = contact => dispatch => {
  dispatch({ type: types.CONTACTS_CONNECT });
  axiosAuth()
    .put(`http://localhost:3330/api/friends/${contact.id}`, contact)
    .then(result => {
      dispatch({ type: types.CONTACTS_SUCCES, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: types.CONTACTS_FAIL, payload: error });
    });
};
