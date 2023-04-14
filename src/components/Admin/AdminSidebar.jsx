//Created By Lav Patel (B00910579)

import React, { useState } from "react";
import { AiOutlineUser, AiOutlineEdit } from "react-icons/ai";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";
import AdminOverview from "../AdminOverview/AdminOverview";
import AdminPost from "../AdminPosts/AdminPosts";
import RestaurantApplication from "../RestaurantApplication/RestaurantApplication";

function AdminSidebar() {
  const [activeComponent, setactiveComponent] = useState("overview");
  const [activeLink, setActiveLink] = useState("overview");

  let component = null;
  if ("posts" === activeComponent) {
    component = <AdminPost />;
  } else if ("restaurantApplication" === activeComponent) {
    component = <RestaurantApplication />;
  } else {
    component = <AdminOverview />;
  }
  return (
    <>
      {/* <Navbar />  */}
      <StyledSideabar>
        <div className="logo-wrapper">
          <img src={app_logo} alt="app_logo" />
        </div>
        <div className="nav-links">
          <div
            className={
              activeLink === "overview" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineUser />
            <Link
              to="/adminDashboard"
              onClick={() => {
                setactiveComponent("overview");
                setActiveLink("overview");
              }}
            >
              Overview
            </Link>
          </div>
          <div
            className={
              activeLink === "restaurantApplication"
                ? "link-wrapper active"
                : "link-wrapper"
            }
          >
            <AiOutlineEdit />
            <Link
              to="/adminDashboard"
              onClick={() => {
                setactiveComponent("restaurantApplication");
                setActiveLink("restaurantApplication");
              }}
            >
              Restaurant Application
            </Link>
          </div>
          <div
            className={
              activeLink === "posts" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineEdit />
            <Link
              to="/adminDashboard"
              onClick={() => {
                setactiveComponent("posts");
                setActiveLink("posts");
              }}
            >
              Posts
            </Link>
          </div>
        </div>
      </StyledSideabar>
      {component}
      {/* <Footer /> */}
    </>
  );
}

const StyledSideabar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  position: fixed;
  width: 20%;
  /* flex-basis: 20%; */
  height: 100vh;
  border-right: 1px solid #ccc;
  font-size: 1.8rem;
  .logo-wrapper {
    width: 100px;
    img {
      width: 100%;
      object-fit: cover;
    }
    :hover {
      cursor: pointer;
    }
  }
  .nav-links {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    .link-wrapper {
      display: flex;
      gap: 1rem;
      align-items: center;
      a {
        text-decoration: none;
        color: black;
      }
      svg {
        width: 25px;
        height: 25px;
      }
      :hover {
        cursor: pointer;
      }
      &.active {
        font-weight: 700;
        color: rgb(28, 155, 239);
        a {
          color: rgb(28, 155, 239);
        }
      }
    }
    .profile-wrapper {
      margin-top: auto;
    }
  }
`;

export default AdminSidebar;
