import React from "react";

import { connect } from "react-redux";

import { updateContact } from "../store/actions/index";
import Loader from "react-loader-spinner";

class UpdateContact extends React.Component {
  state = {
    id: this.props.contact.id ? this.props.contact.id : null,
    name: this.props.contact.name ? this.props.contact.name : "",
    age: this.props.contact.age ? this.props.contact.age : null,
    email: this.props.contact.email ? this.props.contact.email : ""
  };

  componentDidMount() {
    // console.log("Contact in Update: ", this.props.contact);
  }

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

  modifyContact = e => {
    e.preventDefault();
    const check = this.checkState();
    if (check === "ok") {
      this.props.updateContact(this.state);
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
          <input name="name" onChange={this.getData} value={this.state.name} />
        </div>
        <div>
          <label>Age:</label>
          <input
            name="age"
            onChange={this.getData}
            type="number"
            value={this.state.age}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            onChange={this.getData}
            type="email"
            value={this.state.email}
          />
        </div>
        <button onClick={this.modifyContact}>
          {this.props.loadUpdate === true ? (
            <Loader type="ThreeDots" color="white" height={80} width={80} />
          ) : (
            "ok"
          )}
        </button>
      </form>
    ) : (
      <div className="agenda">You are not logged to update a contact.</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadUpdate: state.reducerAgenda.loadUpdate
  };
};

export default connect(
  mapStateToProps,
  { updateContact }
)(UpdateContact);
