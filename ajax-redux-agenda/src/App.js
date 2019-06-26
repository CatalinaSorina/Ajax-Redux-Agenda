import React from "react";

import { Route, NavLink } from "react-router-dom";

import Authentication from "./components/Authentication";
import Agenda from "./components/Agenda";

import "./App.css";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/log">Log in</NavLink>
        <NavLink to="/agenda">Agenda</NavLink>
        <NavLink to="/new-contact">Add contact</NavLink>
      </nav>
      <div>
        <Route exact path="/log" component={Authentication} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/new-contact" component={AddContact} />
      </div>
    </div>
  );
}

export default App;
