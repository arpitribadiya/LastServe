//Created By Arpit Ribadiya (B00932018)

import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineEdit,
  AiOutlineCalendar,
  AiOutlineHome,
} from "react-icons/ai";
import styled from "styled-components";
import app_logo from "../../assets/logo-black.png";
import { Link, useLocation } from "react-router-dom";
import RestaurantOrders from "../RestaurantOrders/RestaurantOrders";
import RestaurantOverview from "../RestaurantOverview/RestaurantOverview";
import RestaurantPosts from "../RestaurantPosts/RestaurantPosts";
import RestaurantVolunteers from "../RestaurantVolunteers/RestaurantVolunteers";
import RestaurantProfile from "../RestaurantProfile/RestaurantProfile";
import CreatePost from "../CreatePost/CreatePost";
import ViewPost from "../ViewPost/ViewPost";
import EditPost from "../EditPost/EditPost";

function RestaurantSideBar(props) {
  const [activeComponent, setactiveComponent] = useState("overview");
  const [activeLink, setActiveLink] = useState("overview");

  let component = null;
  if ("profile" === activeComponent) {
    component = <RestaurantProfile />;
  } else if ("posts" === activeComponent) {
    component = <RestaurantPosts />;
  } else if ("orders" === activeComponent) {
    component = <RestaurantOrders />;
  } else if ("volunteers" === activeComponent) {
    component = <RestaurantVolunteers />;
  } else {
    component = <RestaurantOverview />;
  }

  let { state } = useLocation();
  if (state != null) {
    let page = state.page;
    if ("createPost" === page) {
      component = <CreatePost />;
      page = null;
    } else if ("restaurantPosts" === page) {
      component = <RestaurantPosts />;
    } else if ("viewPost" === page) {
      component = <ViewPost />;
    } else if ("updatePost" === page) {
      component = <EditPost />;
    }
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
              activeLink === "profile" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineHome />
            <Link
              to="/restaurantSideBar"
              onClick={() => {
                setactiveComponent("profile");
                setActiveLink("profile");
              }}
            >
              Profile
            </Link>
          </div>
          <div
            className={
              activeLink === "overview" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineUser />
            <Link
              to="/restaurantSideBar"
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
              activeLink === "posts" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineEdit />
            <Link
              to="/restaurantSideBar"
              onClick={() => {
                setactiveComponent("posts");
                setActiveLink("posts");
              }}
            >
              Posts
            </Link>
          </div>
          <div
            className={
              activeLink === "orders" ? "link-wrapper active" : "link-wrapper"
            }
          >
            <AiOutlineCalendar />
            <Link
              to="/restaurantSideBar"
              onClick={() => {
                setactiveComponent("orders");
                setActiveLink("orders");
              }}
            >
              Orders
            </Link>
          </div>
          <div
            className={
              activeLink === "volunteers"
                ? "link-wrapper active"
                : "link-wrapper"
            }
          >
            <AiOutlineCalendar />
            <Link
              to="/restaurantSideBar"
              onClick={() => {
                setactiveComponent("volunteers");
                setActiveLink("volunteers");
              }}
            >
              Volunteers
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

export default RestaurantSideBar;
