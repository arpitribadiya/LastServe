import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";

const MobileSidebar = ({ setProfileMenu }) => {
  return (
    <>
      <StyledBackdrop onClick={() => setProfileMenu(false)} />
      <StyledMobileSidebar>
        <div className="nav-logo-wrapper">
          <div className="logo-wrapper">
            <img src={app_logo} alt="app_logo" />
          </div>
          <div className="close" onClick={() => setProfileMenu(false)}>
            <IoClose />
          </div>
        </div>
        <div className="nav-links top">
          <Link to="/home">Home</Link>
          <Link to="/restaurants">Explore</Link>
        </div>
        <div className="nav-links bottom">
          <div className="profile">
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </StyledMobileSidebar>
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(134, 134, 134, 0.224);
  z-index: 1;
`;

const StyledMobileSidebar = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  height: 100vh;
  background-color: white;
  box-shadow: 0px 0px 4px 1px #ccc;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  z-index: 2;
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
    &.bottom {
      margin-top: auto;
      .profile {
        border-radius: 50px;
        width: fit-content;
        padding: 1.5rem 2rem;
        background-color: rgb(28, 155, 239);
        color: white;
        box-shadow: 0px 0px 10px 1px rgb(207, 207, 207);
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

export default MobileSidebar;
