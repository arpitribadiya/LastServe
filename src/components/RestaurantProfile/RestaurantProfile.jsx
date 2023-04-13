import React, { useState } from "react";
import styled from "styled-components";
import restaurant_img from "../../assets/Restaurant.avif";
import UpdateRestaurantProfile from "../UpdateRestaurantProfile/UpdateRestaurantProfile";
import axios from "axios";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

function RestaurantProfile() {
  const [childData, setchildData] = useState(null);

  React.useEffect(() => {
    const username = window.localStorage.getItem("email");
    const email = {
      email: username,
    };

    const getData = async () => {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/restaurants/viewRestaurant`,
          email
        );
        setchildData({ ...result.data.restaurant });
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <StyledDiv>
      <DashboardHeader heading="Restaurant Details"/>
      <StyledHome className="home">
        <StyledSectionOne className="section-1">
          {/* <div className="section-details"> */}

          {childData ? (
            <UpdateRestaurantProfile restaurantdetails={childData} />
          ) : null}
          {/* </div> */}
          <div className="section-img">
            <img src={restaurant_img} alt="restaurant_img" />
          </div>
        </StyledSectionOne>
      </StyledHome>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 20%;
`;

const StyledHome = styled.div``;

const StyledSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  .section-details {
    flex-basis: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 8rem;
      font-weight: 500;
    }
    p {
      font-size: 6rem;
      color: rgb(161, 161, 161);
      font-weight: 300;
    }
  }

  .section-img {
    flex-basis: 15%;
    padding-top: 1rem;
    padding-left: 1rem;
    /* display: none; */
    img {
      width: 30%;
      height: 50rem;
      object-fit: cover;
      position: absolute;
      left: 92rem;
      top: 2rem;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 1120px) {
    height: 65vh;
    padding: 3rem 1rem 2rem 1rem;
    .section-details {
      flex-basis: 100%;
      padding: 0;
      h1 {
        font-size: 5.5rem;
      }
      p {
        font-size: 3.5rem;
      }
    }
    .section-img {
      flex-basis: 100%;
      overflow: hidden;
    }
  }
  @media only screen and (min-width: 435px) and (max-width: 1120px) {
    padding: 2rem 2rem 2rem 5rem;
  }
`;

export default RestaurantProfile;
