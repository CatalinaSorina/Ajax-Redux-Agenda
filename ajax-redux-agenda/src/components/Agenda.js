import React from "react";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";

import { getContacts, deleteContact } from "../store/actions/index";
import Contact from "./Contact";

class Agenda extends React.Component {
  state = {
    filterContacts: null
  };

  componentDidMount() {
    this.props.getContacts();
  }

  deleteContact = id => {
    this.props.deleteContact(id);
  };

  search = e => {
    const text = e.target.value;
    const filterContacts = this.props.contacts.filter(contact => {
      return (
        text.toLowerCase().includes(contact.name.toLowerCase()) ||
        contact.name.toLowerCase().includes(text.toLowerCase())
      );
    });
    this.setState({
      filterContacts: filterContacts
    });
  };

  render() {
    return localStorage.getItem("token") ? (
      <div className="agenda">
        <span>
          <label>Name: </label>
          <input
            list="contacts"
            className="search"
            placeholder="search contact"
            onChange={this.search}
          />
        </span>
        <datalist id="contacts">
          {this.props.contacts &&
            this.props.contacts.map(contact => {
              return <option>{contact.name}</option>;
            })}
        </datalist>
        {this.props.loadContacts === true && (
          <Loader
            type="Oval"
            color="rgb(252, 198, 98)"
            height={80}
            width={80}
          />
        )}
        {this.props.loadContacts === false &&
          this.state.filterContacts &&
          this.state.filterContacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                deleteContact={() => this.deleteContact(contact.id)}
                modifyContact={() => this.props.modifyContact(contact)}
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
