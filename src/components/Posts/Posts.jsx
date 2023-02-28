import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Posts = () => {
  return (
    <StyledPostsWrapper>
      <StyledPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </StyledPosts>
    </StyledPostsWrapper>
  );
};

const StyledPostsWrapper = styled.div`
  min-height: 100vh;
  margin-left: 30%;
  width: 40%;
  border-right: 1px solid #ccc;
`;

const StyledPosts = styled.div`
`;

export default Posts;
