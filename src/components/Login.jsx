import React from "react";

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => props.handleSignUp()}>Sign Up</button>
    </div>
  );
}

export default Login;
