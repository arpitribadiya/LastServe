import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import res_img from "../../assets/res_img4.jpg";
import axios from "axios";

const RestaurantCard = ({ data, subscribed }) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribed);
  const subscriptionHandler = async () => {
    try {
      const result = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/subscription",
        {
          res_email: data.email,
          res_id: data._id,
          email: window.localStorage.getItem("email"),
          action: isSubscribed ? "unsubscribe" : "subscribe",
        }
      );
      setIsSubscribed(!isSubscribed);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledRestaurant>
      <div className="res-img-wrapper">
        <img src={res_img} alt="res_img" />
      </div>
      <div className="res-content-wrapper">
        <h4 className="res-name">{data.name}</h4>
        <p className="res-details">
          At our restaurant, we're committed to serving high-quality, locally
          sourced ingredients that are fresh and flavorful. Our menu features a
          variety of dishes, from classic comfort foods to international
          cuisine, all prepared with care and attention to detail. Whether
          you're dining in our cozy space or grabbing a meal to go, we aim to
          provide a welcoming and delicious experience for all.
        </p>
        <p className="res-location">
          <GoLocation />
          <span>{data.address}</span>
        </p>
        <button
          className={`res-subscribe ${isSubscribed ? "unsubscribe" : ""}`}
          onClick={subscriptionHandler}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </button>
      </div>
    </StyledRestaurant>
  );
};

const StyledRestaurant = styled.div`
  display: flex;
  gap: 2rem;
  border: 1px solid #ccc;
  padding: 4rem;
  border-radius: 20px;
  .res-img-wrapper {
    border: 1px solid #ccc;
    border-radius: 50%;
    flex-basis: 45%;
    display: flex;
    align-items: center;
    padding: 3.5rem;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .res-content-wrapper {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.5rem;
    .res-name {
      font-size: 1.7rem;
    }
    .res-details {
      font-weight: 300;
    }
    .res-subscribe {
      background-color: rgb(28, 155, 238);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 20px;
      border: 1px solid white;
      &.unsubscribe {
        background-color: white;
        border: 1px solid #ccc;
        color: rgb(154, 154, 154);
        font-weight: bold;
      }
      :hover {
        cursor: pointer;
      }
    }
    .res-location {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 1110px) {
    .res-img-wrapper {
      display: none;
    }
    .res-content-wrapper {
      flex-basis: 100%;
    }
  }
`;

export default RestaurantCard;
