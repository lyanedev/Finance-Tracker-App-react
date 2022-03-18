import { useState } from "react";

import { StyledFormContainer, StyledSignupButton } from "./Signup.styled";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <h3>Logout</h3>
      <label>
        <span>Username:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      {!isLoading && <StyledSignupButton>Let's go!</StyledSignupButton>}
      {isLoading && (
        <StyledSignupButton disabled>Loading...</StyledSignupButton>
      )}
      {error && <p>{error}</p>}
    </StyledFormContainer>
  );
};

export default Signup;
