import react from "react";

import Contact from "./Contact";

const Agenda = props => {
  return (
    <div className="agenda">
      {props.contacts.map(contact => {
        <Contact contact={contact} />;
      })}
    </div>
  );
};

export default Agenda;
