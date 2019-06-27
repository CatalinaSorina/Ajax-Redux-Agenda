import React from "react";

const Contact = props => {
  return (
    <div className="contact">
      <label>{props.contact.name}</label>
      <label>Age: {props.contact.age}</label>
      <label>Email: {props.contact.email}</label>
      <button onClick={props.deleteContact}>Delete contact</button>
      <button onClick={props.modifyContact}>Modify contact</button>
    </div>
  );
};

export default Contact;
