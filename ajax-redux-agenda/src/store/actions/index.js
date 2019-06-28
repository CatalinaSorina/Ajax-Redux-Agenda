import axios from "axios";

import * as types from "./types";
import * as url from "../../utils/baseUrl";
import { axiosAuth } from "../../utils/axiosAuth";

export const login = creds => dispatch => {
  dispatch({ type: types.LOG_CONNECT });
  axios
    .post(`${url.loginUrl}`, creds)
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
    .get(`${url.contactsUrl}`)
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
  dispatch({ type: types.ADD_CONTACT });
  axiosAuth()
    .post(`${url.contactsUrl}`, contact)
    .then(result => {
      console.log("Action add contact succes: ", result.data);
      dispatch({ type: types.ADD_CONTACT_SUCCES, payload: result.data });
    })
    .catch(error => {
      console.log("Action add contact fail: ", error);
      dispatch({ type: types.ADD_CONTACT_SUCCES, payload: error });
    });
};

export const deleteContact = idContact => dispatch => {
  dispatch({ type: types.REMOVE_CONTACT });
  axiosAuth()
    .delete(`${url.contactsUrl}/${idContact}`)
    .then(result => {
      console.log("Action remove contact succes: ", result.data);
      dispatch({ type: types.REMOVE_CONTACT_SUCCES, payload: result.data });
    })
    .catch(error => {
      console.log("Action remove contact fail: ", error);
      dispatch({ type: types.REMOVE_CONTACT_SUCCES, payload: error });
    });
};

export const updateContact = contact => dispatch => {
  dispatch({ type: types.UPDATE_CONTACT });
  axiosAuth()
    .put(`${url.contactsUrl}/${contact.id}`, contact)
    .then(result => {
      console.log("Action update contact succes: ", result.data);
      dispatch({ type: types.UPDATE_CONTACT_SUCCES, payload: result.data });
    })
    .catch(error => {
      console.log("Action update contact fail: ", error);
      dispatch({ type: types.UPDATE_CONTACT_SUCCES, payload: error });
    });
};
