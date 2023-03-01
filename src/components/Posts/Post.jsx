import React from "react";
import styled from "styled-components";
import res_img from "../../assets/res_img1.jpg";
import { GoLocation } from "react-icons/go";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const navigate = useNavigate();

  // get the id or details of the restaurant and pass it to the handler
  // currently its hard coded value
  const bookAppointmentHandler = () => {
    navigate("/appointment", {
      state: {
        res_id: "res_id",
      },
    });
  };

  return (
    <StyledPost className="post">
      <div className="res-img">
        <img src={res_img} alt="res_img" />
      </div>
      <div className="post-content">
        <h4 className="res-name">Res name</h4>
        <p className="res-post-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          qui? Quo magnam aliquid alias ea, magni commodi vero temporibus soluta
          ipsa. Aperiam accusantium cum impedit? Necessitatibus impedit quam
          earum nemo!
        </p>
        <p className="res-location">
          <GoLocation />
          <span>6969 Bayers Rd, NS</span>
        </p>
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
    width: 200px;
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

export default Post;
