import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      SignUp: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  };

  handleSignUp = () => {
    this.setState((prevState) => {
      return {
        SignUp: !prevState.SignUp,
      };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.SignUp === false &&
          (this.state.isLoggedIn ? (
            <UserPage />
          ) : (
            <Login handleSignUp={this.handleSignUp} />
          ))}
        {this.state.SignUp && <SignUp handleSignUp={this.handleSignUp} />}
      </div>
    );
  }
}

export default App;
