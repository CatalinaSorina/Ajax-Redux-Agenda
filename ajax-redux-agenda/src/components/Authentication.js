import react from "react";

class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  getData = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <form className="auth">
        <div>
          <label>Name:</label>
          <input
            name="username"
            onClick={this.getData}
            placeholder="your user name"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            onClick={this.getData}
            placeholder="your password"
          />
        </div>
        <button onClick={this.login}>
          {this.props.logged ? (
            <Loader type="Grid" color="#somecolor" height={80} width={80} />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    );
  }
}

export default Authentication;
