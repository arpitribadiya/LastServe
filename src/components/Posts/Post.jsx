import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import res_img from "../../assets/res_img1.jpg";
const Post = ({ data }) => {
  const navigate = useNavigate();

  // get the id or details of the restaurant and pass it to the handler
  // currently its hard coded value
  const bookAppointmentHandler = () => {
    navigate("/appointment", {
      state: {
        res_id: "res_id",
        data: data,
      },
    });
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
    <StyledPost className="post">
      <div className="res-img">
        <img src={res_img} alt="res_img" />
      </div>
      <div className="post-content">
        <h4 className="res-name">Tawa Grill</h4>
        <div className="res-post-details">
          Hey everyone! I'm excited to share that I have some delicious food
          available to give away for free. <br />
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
        </div>

        <button className="res-appointment" onClick={bookAppointmentHandler}>
          Book Appointment
        </button>
      </div>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  padding: 3rem 3rem;
  gap: 2rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.8rem;
  align-items: center;
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
      .post-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        div[class^="item-"] {
          display: flex;
          gap: 1rem;
          label {
            font-weight: 400;
            text-transform: capitalize;
          }
          span {
            text-transform: capitalize;
          }
        }
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

export default Post;
