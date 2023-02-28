import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import RestaurantCard from "./RestaurantCard";

const Subscription = () => {
  return (
    <StyledSubscription>
      <Sidebar activeRoute="explore" />
      <StyledSection>
        <div className="input-wrapper">
          <div className="logo-wrapper">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            name="restaurant"
            id="restaurant"
            placeholder="Search"
          />
        </div>
        <div className="restaurant-wrapper">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </StyledSection>
    </StyledSubscription>
  );
};

const StyledSubscription = styled.div``;

const StyledSection = styled.section`
  width: 50%;
  margin-left: 30%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .input-wrapper {
    position: relative;
    font-weight: 300;
    font-size: 2rem;
    .logo-wrapper {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 4rem;
      padding-left: 2rem;
      svg {
        color: rgb(158, 158, 158);
      }
    }
    input {
      font-size: 1.7rem;
      width: 100%;
      padding: 1rem 2rem 1rem 5rem;
      border-radius: 20px;
      outline: none;
      border: 1px solid rgb(222, 222, 222);
      /* box-shadow: 0px 0px 2px 2px rgb(222, 222, 222); */
      background-color: rgb(239, 243, 244);
    }
  }
  .restaurant-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default Subscription;
