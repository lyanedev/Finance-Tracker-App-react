import { useState } from "react";

import { StyledFormContainer, StyledSignupButton } from "./Signup.styled";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstname, lastname, email, password);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit}>
      <h3>Logout</h3>
      <label>
        <span>Firstname:</span>
        <input
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
      </label>
      <label>
        <span>Lastname:</span>
        <input
          type="text"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
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
      <StyledSignupButton>Let's go!</StyledSignupButton>
    </StyledFormContainer>
  );
};

export default Signup;
