import * as types from "../actions/types";

const initialState = {
  loadContacts: false,
  contacts: [],
  addContact: false,
  deleteContact: false,
  updateContact: false,
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
    default:
      return {
        stateAgenda
      };
  }
};
