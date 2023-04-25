import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserOrders = ({ email }) => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/orders`,
        { email: email }
      );
      setUserOrders([...result.data]);
    };
    getUserOrders();
  }, []);

  let html = null;

  if (userOrders.length === 0) {
    return null;
  }

  const pastOrders = userOrders.filter((order) => {
    return order.status === "picked";
  });
  const currentOrders = userOrders.filter((order) => {
    return order.status === "not-picked";
  });

  const pastOrdersHtml = pastOrders.map((order) => {
    const item = order.items.split(":");
    return (
      <div className="past-order-wrapper">
        <div className="res-name">Tawa Grill</div>
        <div className="item-name">{item[0]}</div>
        <div className="item-qty">{item[1]}</div>
        <div className="pickup-date">{order.pickupDate}</div>
        <div className="pickup-time">{order.pickupTime}</div>
      </div>
    );
  });

  const currentOrdersHtml = currentOrders.map((order) => {
    const item = order.items.split(":");
    return (
      <div className="current-order-wrapper">
        <div className="res-name">Tawa Grill</div>
        <div className="item-name">{item[0]}</div>
        <div className="item-qty">{item[1]}</div>
        <div className="pickup-date">{order.pickupDate}</div>
        <div className="pickup-time">{order.pickupTime}</div>
        <div className="cancel" onClick={() => handleOnClick(order._id)}>
          Cancel
        </div>
      </div>
    );
  });

  const handleOnClick = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/cancelOrder`,
        { data: { id: id } }
      );
      let tempOrders = [...userOrders];
      tempOrders = tempOrders.filter((order) => {
        return order._id !== id;
      });
      setUserOrders([...tempOrders]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledOrders>
      <h2>Current Orders</h2>
      <div className="orders">
        <div className="order-wrapper header">
          <div className="res-name-header">Restaurant Name</div>
          <div className="item-name-header">Item Name</div>
          <div className="item-qty-header">Item Quantity</div>
          <div className="pickup-date-header">Date</div>
          <div className="pickup-time-header">Time</div>
        </div>
        {currentOrdersHtml}
      </div>
      <h2>Past Orders</h2>
      <div className="orders">
        <div className="order-wrapper past-header">
          <div className="res-name-header">Restaurant Name</div>
          <div className="item-name-header">Item Name</div>
          <div className="item-qty-header">Item Quantity</div>
          <div className="pickup-date-header">Date</div>
          <div className="pickup-time-header">Time</div>
        </div>
        {pastOrdersHtml}
      </div>
    </StyledOrders>
  );
};

const StyledOrders = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  padding: 2rem 4rem;
  gap: 2rem;

  .orders {
    box-shadow: 0px 0px 2px 2px #ccc;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 10px;

    .order-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      font-size: 2rem;
      font-weight: 300;
      text-transform: capitalize;
      gap: 2rem;
      &.header {
        font-weight: 500;
      }
      &.past-header {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        font-weight: 500;
      }
    }

    .current-order-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      font-size: 2rem;
      font-weight: 300;
      text-transform: capitalize;
      gap: 2rem;
      align-items: center;
      &.header {
        font-weight: 500;
      }
      .cancel {
        padding: 10px;
        background-color: rgb(28, 155, 239);
        color: white;
        width: fit-content;
        border-radius: 10px;
        :hover {
          cursor: pointer;
        }
      }
    }
    .past-order-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      font-size: 2rem;
      font-weight: 300;
      text-transform: capitalize;
      gap: 2rem;
      &.header {
        font-weight: 500;
      }
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    margin: 0;
    padding: 0;
    .orders {
      .order-wrapper {
        font-size: 1rem;
      }
      .current-order-wrapper {
        font-size: 1.2rem;
      }
    }
  }
`;

export default UserOrders;
