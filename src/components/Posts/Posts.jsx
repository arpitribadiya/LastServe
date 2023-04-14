import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Posts = ({ posts, filters, subscribedRestaurants }) => {
  let html = <StyledSpinner className="spinner"></StyledSpinner>;

  if (posts.length !== 0) {
    if (filters.length === 0) {
      html = posts.map((post) => {
        return <Post data={post} key={post._id} />;
      });
    } else {
      // sort out veg/non-veg/vegan filters
      html = posts.map((post) => {
        if (filters.includes(post.Food_Type.toLowerCase())) {
          return <Post data={post} key={post._id} />;
        } else {
          return null;
        }
      });

      // sort out subscribed/unsubscribed filters
      if (filters.includes("subscribed")) {
        posts.forEach((post) => {
          if (subscribedRestaurants.includes(post.rest_id)) {
            html.push(<Post data={post} key={post._id} />);
          }
        });
      } else if (filters.includes("unsubscribed")) {
        posts.forEach((post) => {
          if (!subscribedRestaurants.includes(post.rest_id)) {
            html.push(<Post data={post} key={post._id} />);
          }
        });
      }

      html = html.filter((item) => {
        return item !== null;
      });
      if (html.length === 0) {
        html = <h2 className="no-post">Sorry, no post under this category!</h2>;
      }
    }
  }

  return (
    <StyledPostsWrapper>
      <StyledPosts>{html}</StyledPosts>
    </StyledPostsWrapper>
  );
};

const StyledPostsWrapper = styled.div`
  min-height: 100vh;
  margin-left: 30%;
  width: 40%;
  border-right: 1px solid #ccc;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledPosts = styled.div`
  .no-post {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledSpinner = styled.div`
  border: 5px solid rgb(28, 155, 238);
  border-bottom-color: transparent;
  padding: 10px;
  width: fit-content;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spinner infinite linear 1000ms;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Posts;
