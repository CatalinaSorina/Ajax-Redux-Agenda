import React from "react";

import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import { getContacts, deleteContact } from "../store/actions/index";
import Contact from "./Contact";

class Agenda extends React.Component {
  componentDidMount() {
    this.props.getContacts();
  }

  deleteContact = id => {
    this.props.deleteContact(id);
  };

  render() {
    return localStorage.getItem("token") ? (
      <div className="agenda">
        {this.props.loadContacts === true && (
          <Loader
            type="Oval"
            color="rgb(252, 198, 98)"
            height={80}
            width={80}
          />
        )}
        {this.props.loadContacts === false &&
          this.props.contacts &&
          this.props.contacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                deleteContact={()=>this.deleteContact(contact.id)}
              />
            );
          })}
      </div>
    ) : (
      <div className="agenda">
        {this.props.error === true && <label>You are not logged.</label>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("State agenda from redux: ", state.reducerAgenda);
  return {
    loadContacts: state.reducerAgenda.loadContacts,
    contacts: state.reducerAgenda.contacts,
    deleteContact: state.reducerAgenda.deleteContact,
    updateContact: state.reducerAgenda.updateContact,
    error: state.reducerAgenda.error
  };
};

export default connect(
  mapStateToProps,
  { getContacts, deleteContact }
)(Agenda);
