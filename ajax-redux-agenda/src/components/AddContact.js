import React from "react";

import { connect } from "react-redux";

import { addContact } from "../store/actions/index";
import Loader from "react-loader-spinner";

class AddContact extends React.Component {
  state = {
    name: "",
    age: null,
    email: ""
  };

  getData = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  checkState = () => {
    if (this.state.name !== "" && this.state.name.length > 2) {
      if (this.state.age && this.state.age > 7) {
        if (this.state.email !== "" && this.state.email.includes("@")) {
          return "ok";
        }
        return "email";
      }
      return "age";
    }
    return "name";
  };

  addContact = e => {
    e.preventDefault();
    const check = this.checkState();
    if (check === "ok") {
      this.props.addContact(this.state);
      this.props.history.push("/agenda");
    } else if (check === "email") {
      alert("Email incorrect!");
    } else if (check === "age") {
      alert("Please add a age bigger than 7!");
    } else if (check === "name") {
      alert("Please add the contact name!");
    }
  };

  render() {
    return localStorage.getItem("token") ? (
      <form className="auth">
        <div>
          <label>Name:</label>
          <input
            name="name"
            onChange={this.getData}
            placeholder="contact name"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            name="age"
            onChange={this.getData}
            type="number"
            placeholder="contact age"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            onChange={this.getData}
            type="email"
            placeholder="contact email"
          />
        </div>
        <button onClick={this.addContact}>
          {this.props.addContact === true ? (
            <Loader type="ThreeDots" color="white" height={80} width={80} />
          ) : (
            "Add contact"
          )}
        </button>
      </form>
    ) : (
      <div className="agenda">You are not logged to add a contact.</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addContact: state.reducerAgenda.addContact
  };
};

export default connect(
  mapStateToProps,
  { addContact }
)(AddContact);
