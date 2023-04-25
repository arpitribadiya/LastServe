import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import ProfileNavbar from "../Landing/ProfileNavbar";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Subscription = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [subscribedRestaurants, setSubscribedRestaurants] = useState([]);
  const [resInput, setResInput] = useState("");
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [profileMenu, setProfileMenu] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // get all restaurants
        const result = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/restaurants"
        );
        // check what restaurants has user subscribed to
        const res = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/subscription/restaurants",
          {
            email: window.localStorage.getItem("email"),
          }
        );
        setSubscribedRestaurants([...res.data.subscribed_restaurants]);
        setRestaurants([...result.data.restaurants]);
      } catch (err) {}
    };
    getData();
  }, []);

  const searchHandler = (event) => {
    const value = event.target.value;
    setResInput(value);
    const filteredRestaurants = restaurants.filter((res) => {
      return res.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedRestaurants([...filteredRestaurants]);
  };

  const restaurantsHtml = restaurants?.map((res) => {
    const isSubscribed = subscribedRestaurants?.find((data) => {
      return data === res._id;
    });
    return (
      <RestaurantCard
        data={res}
        key={res._id}
        subscribed={isSubscribed ? true : false}
      />
    );
  });

  const searchedRestaurantsHtml = searchedRestaurants.map((res) => {
    const isSubscribed = subscribedRestaurants?.find((data) => {
      return data === res._id;
    });
    return (
      <RestaurantCard
        data={res}
        key={res._id}
        subscribed={isSubscribed ? true : false}
      />
    );
  });
  return (
    <StyledSubscription>
      <Sidebar activeRoute="explore" />
      <ProfileNavbar setProfileMenu={setProfileMenu} />
      {profileMenu ? <MobileSidebar setProfileMenu={setProfileMenu} /> : null}
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
            value={resInput}
            onChange={searchHandler}
          />
        </div>
        <div className="restaurant-wrapper">
          {resInput && searchedRestaurants.length === 0 ? (
            <h4 className="no-user-err">No such restaurant exists!</h4>
          ) : searchedRestaurants.length !== 0 ? (
            searchedRestaurantsHtml
          ) : (
            restaurantsHtml
          )}
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
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
    padding: 2rem;
  }
`;

export default Subscription;
