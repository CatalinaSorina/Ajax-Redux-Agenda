import React from "react";

const Contact = props => {
  return (
    <div className="contact">
      <label>{props.contact.name}</label>
      <label>Age: {props.contact.age}</label>
      <label>Email: {props.contact.email}</label>
      <div>
        <button className="modify" onClick={props.modifyContact}>
          Modify contact
        </button>
        <button className="delete" onClick={props.deleteContact}>
          Delete contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
