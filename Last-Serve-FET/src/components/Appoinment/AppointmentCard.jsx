import React from "react";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import res_img from "../../assets/res_img1.jpg";
import AppointmentForm from "./AppointmentForm";

const AppointmentCard = ({ data }) => {
  return (
    <StyledAppointmentCard>
      <StyledResPostWrapper className="res-post-wrapper">
        <div className="res-img">
          <img src={res_img} alt="res_img" />
        </div>
        <div className="post-content">
          <h4 className="res-name">Res name</h4>
          <p className="res-post-details">
            Hey everyone! I'm excited to share that I have some delicious food
            available to give away for free.
          </p>
          <p className="res-location">
            <GoLocation />
            <span>6969 Bayers Rd, NS</span>
          </p>
        </div>
      </StyledResPostWrapper>
      <AppointmentForm data={data} />
    </StyledAppointmentCard>
  );
};

const StyledAppointmentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 3rem;
  gap: 2rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1.8rem;
  align-items: center;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    border-radius: 0px;
  }
`;

const StyledResPostWrapper = styled.div`
  display: flex;
  gap: 2rem;
  .res-img {
    align-self: flex-start;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 100px;
    /* overflow: hidden; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .post-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    .res-name {
      font-size: 1.5rem;
    }
    .res-post-details {
      font-weight: 300;
      text-align: justify;
    }
    .res-location {
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        font-size: 1.5rem;
      }
    }
    .res-appointment {
      width: fit-content;
      padding: 1rem;
      align-self: flex-end;
      background: none;
      border: 1px solid rgb(28, 155, 239);
      border-radius: 20px;
      color: rgb(28, 155, 239);
      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default AppointmentCard;
