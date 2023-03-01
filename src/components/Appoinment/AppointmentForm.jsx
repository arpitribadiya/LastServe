import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppointmentForm = () => {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <StyledAppointmentForm onSubmit={submitHandler}>
      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" required />
      </div>
      <div className="time-slot-wrapper">
        <div className="input-wrapper btn-grp">
          <input type="radio" name="time-slot" id="slot-1" required />
          <label>9:00 PM - 9:00 PM</label>
        </div>
        <div className="input-wrapper btn-grp">
          <input type="radio" name="time-slot" id="slot-2" />
          <label>9:00 PM - 10:00 PM</label>
        </div>
        <div className="input-wrapper btn-grp">
          <input type="radio" name="time-slot" id="slot-3" />
          <label>10:00 PM - 11:00 PM</label>
        </div>
      </div>
      <div className="input-wrapper email-confirmation">
        <input
          type="checkbox"
          name="email-confirmation"
          id="email-confirmation"
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
  .time-slot-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
