import styled from "styled-components";

export const StyledFormContainer = styled.form`
  max-width: 512px;
  height: 15rem;
  margin: 5rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    color: #0277bd;
    font-size: 2rem;
    font-weight: 600;
  }
  span {
    font-weight: 200;
  }
  input {
    width: 100%;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #cfd8dc;
    padding-left: 1rem;
    margin-top: .2rem;
  }
`;

export const StyledLoginButton = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  border: 2px solid #4caf50;
  background-color: #fafafa;
  color: #4caf50;
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
`;
