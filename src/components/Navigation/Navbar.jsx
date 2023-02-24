import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-logo-wrapper">
        <div className="nav-link">Logo</div>
        <div className="nav-link">Volunteer</div>
        <div className="nav-link">About Us</div>
      </div>
      <div className="nav-links">
        <div className="nav-link">Login</div>
        <div className="nav-link sign-up">Sign Up</div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 2rem 2rem 2rem 5rem;
  justify-content: space-between;
  font-size: 1.8rem;
  border-bottom: 1px solid rgb(219, 216, 216);
  .nav-logo-wrapper {
    display: flex;
    gap: 1rem;
    .nav-link {
      :hover {
        cursor: pointer;
      }
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    .nav-link {
      :hover {
        cursor: pointer;
      }
    }
    .sign-up {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

export default Navbar;
