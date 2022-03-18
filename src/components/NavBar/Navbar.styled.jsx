import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  background-color: #29b6f6;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavbar = styled.nav`
  max-width: 1024px;
  width: 100%;
  ul {
    display: flex;
  }
`;

export const StyledTitle = styled.h2`
  margin-right: auto;
  font-weight: 800;
  color: #fafafa;
  font-size: 2rem;
`;

export const StyledButton = styled.button`
  margin-left: 1rem;
  cursor: pointer;
  width: 8rem;
  height: 2rem;
  text-transform: uppercase;
  border-radius: 10rem;
  
  color: ${(props) => (props.primary ? "#29b6f6" : "#fafafa")};
  border: ${(props) => (props.primary ? "none" : "2px solid #fafafa")};
  background-color: ${(props) => (props.primary ? "#fafafa" : "#29b6f6")};
`;
