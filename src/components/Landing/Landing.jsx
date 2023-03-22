import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Posts from "../Posts/Posts";
import Filters from "../Filters/Filters";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const loc = useLocation();
  console.log(loc.state);
  return (
    <StyledLanding>
      <Sidebar activeRoute="home" email={loc.state.email} />
      <Posts />
      <Filters />
    </StyledLanding>
  );
};

const StyledLanding = styled.div``;

export default Landing;
