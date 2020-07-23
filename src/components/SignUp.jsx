import React from "react";

function SignUp(props) {
  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={() => props.handleSignUp()}>Sign In</button>
    </div>
  );
}

export default SignUp;
