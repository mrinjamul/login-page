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

  render() {
    const loginPage = this.state.isLoggedIn ? <UserPage /> : <Login />;

    return (
      <div className="App">
        {this.state.SignUp === false && loginPage}
        {this.state.SignUp && <SignUp />}
      </div>
    );
  }
}

export default App;
