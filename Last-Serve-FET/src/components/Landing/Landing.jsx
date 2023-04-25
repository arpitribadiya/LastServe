import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "../Posts/Posts";
import Filters from "../Filters/Filters";
import { Helmet } from "react-helmet";
import axios from "axios";
import MobileSidebar from "../Sidebar/MobileSidebar";
import ProfileNavbar from "./ProfileNavbar";

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [subscribedRestaurants, setSubscribedRestaurants] = useState([]);
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/posts`
      );
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/restaurants`,
        {
          email: window.localStorage.getItem("email"),
        }
      );
      setPosts([...result.data.posts]);
      setSubscribedRestaurants([...response.data.subscribed_restaurants]);
    })();
  }, []);

  const filterHandler = (filter, isChecked) => {
    let tempFilters = [...filters];
    if (isChecked) {
      tempFilters.push(filter);
    } else {
      tempFilters = tempFilters.filter((item) => {
        return item !== filter;
      });
    }
    setFilters([...tempFilters]);
  };

  return (
    <StyledLanding>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Find Food Donation post that are best for you</title>
        <description>Filter food Donations</description>
      </Helmet>
      <Sidebar activeRoute="home" />
      <ProfileNavbar setProfileMenu={setProfileMenu} />
      {profileMenu ? <MobileSidebar setProfileMenu={setProfileMenu} /> : null}
      <Posts
        posts={posts}
        filters={filters}
        subscribedRestaurants={subscribedRestaurants}
      />
      <Filters filters={filters} filterHandler={filterHandler} />
    </StyledLanding>
  );
};

const StyledLanding = styled.div``;

export default Landing;
