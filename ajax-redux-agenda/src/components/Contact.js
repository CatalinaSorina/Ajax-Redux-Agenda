import react from "react";

const Contact = props => {
  return (
    <div className="contact">
      <label>{props.name}</label>
      <label>Age: {props.age}</label>
      <label>Email: {props.email}</label>
    </div>
  );
};

export default Contact;
