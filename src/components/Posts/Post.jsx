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
        <h4 className="res-name">Tawa Grill</h4>
        <p className="res-post-details">
          Hey everyone! I'm excited to share that I have some delicious food
          available to give away for free. As someone who cares deeply about
          reducing food waste and helping those in need, I'm thrilled to be able
          to share this food with you all. The dishes I'm giving away are still
          fresh and tasty, and I want them to be enjoyed by someone who could
          use a good meal. Here's what's available for pickup today: <br />
          <br />
          Chicken Alfredo with pasta <br />
          <br />
          Veggie stir-fry with rice <br />
          <br />
          Chocolate chip cookies <br />
          <br />
          All of the dishes were made fresh yesterday and are still in great
          condition. If you're interested in picking up any of these dishes,
          please let me know in the comments below. Pickup is available between
          2-6 pm today
          <br />
          <br />
          I'll be giving out the dishes on a first-come, first-served basis. So
          don't wait too long to let me know if you're interested! Thank you for
          helping me reduce food waste and share some love through food. Let's
          spread the word and make sure these dishes go to someone who could use
          a good meal today.
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
