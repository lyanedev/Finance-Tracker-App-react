import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledNavbar,
  StyledTitle,
  StyledButton,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledContainer>
      <StyledNavbar>
        <ul>
          <StyledTitle>Finance Tracker</StyledTitle>
          <li>
            <Link to="/signup">
              <StyledButton primary>Signup</StyledButton>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
          </li>
        </ul>
      </StyledNavbar>
    </StyledContainer>
  );
};

export default Navbar;
