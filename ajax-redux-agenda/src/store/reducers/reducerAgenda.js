import * as types from "../actions/types";

const initialState = {
  loadContacts: false,
  contacts: [],
  addContact: false,
  deleteContact: false,
  loadUpdate: false,
  error: false
};

export const reducerAgenda = (stateAgenda = initialState, action) => {
  // console.log(stateAgenda);
  switch (action.type) {
    case types.CONTACTS_CONNECT:
      return {
        ...stateAgenda,
        loadContacts: true
      };
    case types.CONTACTS_SUCCES:
      return {
        ...stateAgenda,
        loadContacts: false,
        contacts: action.payload
      };
    case types.CONTACTS_FAIL:
      return {
        ...stateAgenda,
        loadContacts: false,
        error: true
      };
    case types.ADD_CONTACT:
      return {
        ...stateAgenda,
        loadContacts: true
      };
    case types.ADD_CONTACT_SUCCES:
      return {
        ...stateAgenda,
        loadContacts: false,
        addContact: true,
        contacts: action.payload
      };
    case types.ADD_CONTACT_FAIL:
      return {
        ...stateAgenda,
        loadContacts: false,
        error: true
      };
    case types.REMOVE_CONTACT:
      return {
        ...stateAgenda,
        loadContacts: true
      };
    case types.REMOVE_CONTACT_SUCCES:
      return {
        ...stateAgenda,
        deleteContact: true,
        loadContacts: false,
        contacts: action.payload
      };
    case types.REMOVE_CONTACT_FAIL:
      return {
        ...stateAgenda,
        loadContacts: false,
        error: true
      };
    case types.UPDATE_CONTACT:
      return {
        ...stateAgenda,
        loadContacts: true,
        loadUpdate: true
      };
    case types.UPDATE_CONTACT_SUCCES:
      return {
        ...stateAgenda,
        loadContacts: false,
        loadUpdate: false,
        contacts: action.payload
      };
    case types.UPDATE_CONTACT_FAIL:
      return {
        ...stateAgenda,
        loadContacts: false,
        loadUpdate: false,
        error: true
      };
    default:
      return {
        stateAgenda
      };
  }
};
