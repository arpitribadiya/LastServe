import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Posts = () => {
  return (
    <StyledPosts>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StyledPosts>
  );
};

const StyledPosts = styled.div`
  overflow: scroll;
  min-height: 100vh;
  margin-left: 30%;
  width: 40%;
  border-right: 1px solid #ccc;
`;

export default Posts;
