import React from "react";

const Contact = props => {
  return (
    <div className="contact">
      <label>{props.contact.name}</label>
      <label>Age: {props.contact.age}</label>
      <label>Email: {props.contact.email}</label>
    </div>
  );
};

export default Contact;
