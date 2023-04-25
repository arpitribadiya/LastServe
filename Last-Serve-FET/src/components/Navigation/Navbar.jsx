import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";
import { BiMenu } from "react-icons/bi";

const Navbar = ({ setIsVisible }) => {
  return (
    <StyledNavbar>
      <div className="nav-logo-wrapper">
        <NavLink className="nav-link nav-link-left">
          <div className="logo-wrapper">
            <img src={app_logo} alt="app_logo" />
          </div>
        </NavLink>
        <NavLink
          className="nav-link nav-link-left volunteer"
          to="/signupVolunteer"
        >
          Volunteer
        </NavLink>
        <NavLink
          className="nav-link nav-link-left donation"
          to="/donationAmount"
        >
          Donation
        </NavLink>
        <NavLink className="nav-link nav-link-left admin" to="/admin">
          Admin
        </NavLink>
      </div>
      <div className="nav-links">
        <div className="menu" onClick={() => setIsVisible(true)}>
          <BiMenu />
        </div>
        <NavLink className="nav-link login" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link sign-up" to="/signup">
          Sign Up
        </NavLink>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  justify-content: space-between;
  font-size: 1.8rem;
  border-bottom: 1px solid rgb(219, 216, 216);
  .nav-logo-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    .nav-link-left {
      text-decoration: none;
      color: black;
      .logo-wrapper {
        width: 70px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
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
      color: black;
      :hover {
        cursor: pointer;
      }
    }
    .menu {
      display: none;
    }
    .sign-up {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      text-decoration: none;
    }

    .login {
      text-decoration: none;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    padding: 0rem 1.5rem;
    font-size: 1.2rem;
    flex-direction: row-reverse;
    .volunteer,
    .admin,
    .donation {
      display: none;
    }
    .nav-links {
      .menu {
        display: flex;
        font-size: 3rem;
        :hover {
          cursor: pointer;
        }
      }
      .sign-up,
      .login {
        display: none;
      }
    }
  }
`;

export default Navbar;
