import React from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";

const ProfileNavbar = ({ setProfileMenu }) => {
  return (
    <StyledProfiledNavbar>
      <div className="menu" onClick={() => setProfileMenu(true)}>
        <BiMenu />
      </div>
      <div className="logo-wrapper">
        <img src={app_logo} alt="app_logo" />
      </div>
    </StyledProfiledNavbar>
  );
};

const StyledProfiledNavbar = styled.div`
  display: none;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0rem 3rem;
    border-bottom: 1px solid #ccc;
    .menu {
      font-size: 3rem;
      :hover {
        cursor: pointer;
      }
    }
    .logo-wrapper {
      width: 70px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default ProfileNavbar;
