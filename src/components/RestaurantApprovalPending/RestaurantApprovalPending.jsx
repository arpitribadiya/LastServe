import React from 'react';
import styled from 'styled-components';
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer"
import approval_pending from "../../assets/approvalPending.jpg";

const RestaurantApprovalPending = () => {
    return(
    <StyledHome className="home">
        <Navbar /> 
        <StyledSectionOne className="section-1">
        <div className="section-details">
          <h1>Your request is in pending state. Once your request will be approved you will receive an email and can start donating food.</h1>
        </div>
        <div className="section-img">
          <img src={approval_pending} alt="approval_pending" />
        </div>
      </StyledSectionOne>
        <Footer />
    </StyledHome> 
    );
};

const StyledHome = styled.div``;

const StyledSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  .section-details {
    flex-basis: 40%;
    padding: 2rem 2rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 3rem;
      font-weight: 500;
    }
    p {
      font-size: 6rem;
      color: rgb(161, 161, 161);
      font-weight: 300;
    }
  }

  .section-img {
    flex-basis: 40%;
    padding-top: 1rem;
    /* display: none; */
    img {
        width: 40%;
        object-fit: cover;
        position: absolute;
        left: 70rem;
        top: 10rem;
      
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

export default RestaurantApprovalPending;