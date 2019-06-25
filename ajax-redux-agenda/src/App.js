import React from "react";

import { Route, NavLink } from "react-router-dom";

import Authentication from "./components/Authentication";
import Agenda from "./components/Agenda";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/log">Log in</NavLink>
        <NavLink to="/agenda">Agenda</NavLink>
      </nav>
      <div>
        <Route exact path="/log" component={Authentication} />
        <Route exact path="/agenda" component={Agenda} />
      </div>
    </div>
  );
}

export default App;
