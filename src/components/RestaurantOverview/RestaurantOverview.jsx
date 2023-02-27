import React from 'react'
import styled from 'styled-components';

function RestaurantOverview() {
    return (
        <StyledDiv>
        <StyledSectionTwo className="section-2">
        <div className="section-body-wrapper">
          <div className="section-content">
            <h5>Past Posts</h5>
            <p>
              10
            </p>
          </div>
          <div className="section-content">
            <h5>Active Posts</h5>
            <p>
              10
            </p>
          </div>
          <div className="section-content">
            <h5>All Orders</h5>
            <p>
              10
            </p>
          </div>
          <div className="section-content">
            <h5>Active Orders</h5>
            <p>
              10
            </p>
          </div>
        </div>
      </StyledSectionTwo>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;


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
      font-size: 8rem;
      font-weight: 500;
    }
    p {
      font-size: 6rem;
      color: rgb(161, 161, 161);
      font-weight: 300;
      margin: 5px 10px 5px 45px;
  }

  .section-img {
    flex-basis: 60%;
    padding-top: 1rem;
    /* display: none; */
    img {
      width: 100%;
      object-fit: cover;
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


const StyledSectionTwo = styled.div`
  background-color: rgb(239, 240, 243);
  padding: 6rem 2rem;
  .section-header-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h4 {
      text-align: center;
      font-size: 3rem;
      font-weight: 300;
    }

    button {
      background-color: rgb(2, 127, 254);
      color: white;
      padding: 1rem;
      border-radius: 5px;
      border: none;
      width: fit-content;
      font-size: 1.5rem;
      :hover {
        cursor: pointer;
      }
    }
  }

  .section-body-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      flex-basis: 40%;
      h5 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: 200;
        text-align: justify;
      }
      button {
        background-color: white;
        padding: 1rem;
        border: 1px solid rgb(2, 127, 254);
        color: rgb(2, 127, 254);
        border-radius: 5px;
        width: fit-content;
        :hover {
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 432px) {
    .section-header-wrapper {
      h4 {
        font-size: 3rem;
      }
    }
    .section-body-wrapper {
      padding: 3rem 1rem;
      .section-content {
        flex-basis: 100%;
      }
    }
  }
`;


export default RestaurantOverview;