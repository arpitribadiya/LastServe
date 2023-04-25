import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppointmentForm = ({ data }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const responseRef = useRef(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/appointments`, {
      rest_id: data.rest_id,
      user_id: window.localStorage.getItem("email"),
      user_name: name,
      user_email: email,
      appointment_date: getDate(data.Start_Time),
      appointment_time: convertTime(new Date(data.Start_Time).getTime()),
      items: `${data.Item_name}:${data.Item_Quantity}`,
      sendEmail: responseRef.current.checked,
    });
    navigate("/home");
  };

  const inputHandler = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  };

  const convertTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;
    const padTo2Digits = (num) => {
      return num.toString().padStart(2, "0");
    };

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
  };

  const getDate = (fullDate) => {
    const dateObj = new Date(fullDate);
    const date =
      dateObj.getDate() +
      "/" +
      dateObj.getMonth() +
      "/" +
      dateObj.getFullYear();
    return date;
  };

  return (
    <StyledAppointmentForm onSubmit={submitHandler}>
      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          required
          onChange={inputHandler}
          value={name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={inputHandler}
          value={email}
        />
      </div>
      <div className="post-info">
        <div className="item-name">
          <label htmlFor="name">Food Item:</label>
          <span id="name">{data.Item_name}</span>
        </div>
        <div className="item-quantity">
          <label htmlFor="qty">Available Quantity:</label>
          <span id="qty">{data.Item_Quantity}</span>
        </div>
        <div className="item-type">
          <label htmlFor="type">Category:</label>
          <span id="type">{data.Food_Type}</span>
        </div>
        <div className="item-date">
          <label htmlFor="date">Date:</label>
          <span id="date">{getDate(data.Start_Time)}</span>
        </div>
        <div className="item-timings">
          <label htmlFor="time">Time:</label>
          <span> {convertTime(new Date(data.Start_Time).getTime())}</span>
        </div>
      </div>
      <div className="input-wrapper email-confirmation">
        <input
          type="checkbox"
          name="email-confirmation"
          id="email-confirmation"
          ref={responseRef}
        />
        <label htmlFor="">Send me copy of my Response</label>
      </div>
      <button type="submit" className="submit">
        Submit
      </button>
    </StyledAppointmentForm>
  );
};

const StyledAppointmentForm = styled.form`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 10px;
      border: 1px solid #ccc;
      outline: none;
      padding: 1.5rem 2rem;
      background-color: rgb(239, 243, 244);
      font-size: 1.5rem;
    }
    &.btn-grp,
    &.email-confirmation {
      flex-direction: row;
    }
  }
  .post-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    div[class^="item-"] {
      display: flex;
      gap: 1rem;
      label {
        font-weight: 500;
        text-transform: capitalize;
      }
      span {
        text-transform: capitalize;
      }
    }
  }
  .submit {
    padding: 1rem;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 1.7rem;
    background-color: rgb(28, 155, 238);
    :hover {
      cursor: pointer;
    }
  }
`;

export default AppointmentForm;
