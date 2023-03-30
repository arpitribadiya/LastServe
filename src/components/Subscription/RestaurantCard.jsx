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
          res_id: data._id,
          email: window.localStorage.getItem("email"),
          action: isSubscribed ? "unsubscribe" : "subscribe",
        }
      );
      console.log(result);
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          qui? Quo magnam aliquid alias ea, magni commodi vero temporibus soluta
          ipsa. Aperiam accusantium cum impedit? Necessitatibus impedit quam
          earum nemo!
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
`;

export default RestaurantCard;
