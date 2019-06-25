import * as types from "../actions/types";

const initialState = {
  loadContacts: false,
  contacts: [],
  addContact: false,
  deleteContact: false,
  updateContact: false,
  error: null
};

export const reducerAgenda = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACTS_CONNECT:
      return {
        ...state,
        loadContacts: true
      };
    default:
      return {
        state
      };
  }
};
