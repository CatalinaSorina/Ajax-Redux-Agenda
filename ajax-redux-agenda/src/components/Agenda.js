import React from "react";

import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import { getContacts } from "../store/actions/index";
import Contact from "./Contact";

class Agenda extends React.Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className="agenda">
        {this.props.error === true && <label>You are not logged.</label>}
        {this.props.loadContacts === true && (
          <Loader type="Oval" color="yellow" height={80} width={80} />
        )}
        {this.props.loadContacts === false &&
          this.props.contacts &&
          this.props.contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("State agenda from redux: ", state.reducerAgenda);
  return {
    loadContacts: state.reducerAgenda.loadContacts,
    contacts: state.reducerAgenda.contacts,
    addContact: state.reducerAgenda.addContact,
    deleteContact: state.reducerAgenda.deleteContact,
    updateContact: state.reducerAgenda.updateContact,
    error: state.reducerAgenda.error
  };
};

export default connect(
  mapStateToProps,
  { getContacts }
)(Agenda);
