import React from "react";

import { Route, NavLink } from "react-router-dom";

import Authentication from "./components/Authentication";
import Agenda from "./components/Agenda";

import "./App.css";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";

class App extends React.Component {
  state = {
    contact: null
  };

  modifyContact = contact => {
    // console.log("Contact in App: ", contact);
    this.setState({ contact: contact });
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/log">Log in</NavLink>
          <NavLink to="/agenda">Agenda</NavLink>
          <NavLink to="/new-contact">Add contact</NavLink>
        </nav>
        <div>
          <Route exact path="/log" component={Authentication} />
          <Route
            exact
            path="/agenda"
            render={() => <Agenda modifyContact={this.modifyContact} />}
          />
          <Route exact path="/new-contact" component={AddContact} />
          <Route
            exact
            path="/contact"
            render={() =>
              this.state.contact ? (
                <UpdateContact
                  contact={this.state.contact}
                  history={this.props.history}
                />
              ) : (
                ""
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
