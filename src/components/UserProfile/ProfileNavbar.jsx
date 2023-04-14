import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";

const ProfileNavbar = ({
  setProfileNavbar,
  setactiveComponent,
  setActiveLink,
  activeLink,
  handleLogout,
}) => {
  return (
    <>
      <StyledBackdrop onClick={() => setProfileNavbar(false)} />
      <StyledMobileNavbar>
        <div className="nav-logo-wrapper">
          <div className="logo-wrapper">
            <img src={app_logo} alt="app_logo" />
          </div>
          <div className="close" onClick={() => setProfileNavbar(false)}>
            <IoClose />
          </div>
        </div>
        <div className="nav-links top">
          <Link to="/home">Home</Link>
          <Link
            to="/profile"
            onClick={() => {
              setactiveComponent("profile");
              setActiveLink("profile");
            }}
          >
            Profile Details
          </Link>
          <div
            className={
              activeLink === "edit" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <Link
              to="/profile"
              onClick={() => {
                setactiveComponent("edit");
                setActiveLink("edit");
              }}
            >
              Edit Profile
            </Link>
          </div>
          <div
            className={
              activeLink === "order" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <Link
              to="/profile"
              onClick={() => {
                setactiveComponent("order");
                setActiveLink("order");
              }}
            >
              Orders
            </Link>
          </div>
          <div
            className={
              activeLink === "logout" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <div
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </StyledMobileNavbar>
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(134, 134, 134, 0.224);
`;

const StyledMobileNavbar = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  height: 100vh;
  background-color: white;
  box-shadow: 0px 0px 4px 1px #ccc;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  .close {
    font-size: 3rem;
    text-align: end;
    :hover {
      cursor: pointer;
    }
  }
  .nav-logo-wrapper {
    padding: 1rem 2rem 2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-wrapper {
      width: 70px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .nav-links {
    padding: 0 4rem 4rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    a {
      text-decoration: none;
      color: black;
    }

    .sign-up {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      width: fit-content;
    }
    &.bottom {
      margin-top: auto;
    }
  }
`;

export default ProfileNavbar;
