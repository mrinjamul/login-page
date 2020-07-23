import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
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
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";
    return (
      <div className="App">
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default App;
