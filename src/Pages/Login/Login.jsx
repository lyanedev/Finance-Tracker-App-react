import { useState } from "react";

import { StyledFormContainer, StyledLoginButton } from "./Login.styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <>
      <StyledFormContainer onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <StyledLoginButton>Login</StyledLoginButton>
      </StyledFormContainer>
    </>
  );
};

export default Login;
