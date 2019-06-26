import React from "react";

import { connect } from "react-redux";

import { login } from "../store/actions/index";
import Loader from "react-loader-spinner";

class Authentication extends React.Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    localStorage.clear();
  }

  getData = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    // console.log("Updated state:", this.state);
  };

  loginAction = e => {
    // e.preventDefault();
    // console.log("Original state:", this.state);
    this.props.login(this.state);
    // if (this.props.logged === true) this.props.history.push("/agenda");
  };

  render() {
    return (
      <form className="auth" onSubmit={this.loginAction} action="/agenda">
        <div>
          <label>Name:</label>
          <input
            name="username"
            onChange={this.getData}
            placeholder="your user name"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            onChange={this.getData}
            placeholder="your password"
          />
        </div>
        <button>
          {this.props.logged === true ? (
            <Loader type="ThreeDots" color="white" height={80} width={80} />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  // console.log("State login from redux: ", state.reducerAuth);
  return {
    loading: state.reducerAuth.loading,
    logged: state.reducerAuth.logged,
    error: state.reducerAuth.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Authentication);
