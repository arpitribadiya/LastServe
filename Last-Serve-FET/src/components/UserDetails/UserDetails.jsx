//Created by Viraj Joshi

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usrDetails_img from "../../assets/user_details.jpg";
import Footer from "../Footer/Footer";
import axios from "axios";

const UserDetails = ({ email }) => {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users/` + email
      );
      setUserDetails(result.data);
    };
    getUserDetails();
  }, []);

  return (
    <>
      <StyledUsrDetailsImgWrapper className="usrDetails-img-wrapper">
        <StyledUserDetails>
          <div className="profile-home">
            <div className="profile-contents">
              <div className="detail-wrapper">
                <p className="detail-label">First Name:</p>
                <p className="detail-content">{userDetails.fname}</p>
              </div>
              <div className="detail-wrapper">
                <p className="detail-label">Last Name:</p>
                <p className="detail-content">{userDetails.lname}</p>
              </div>
              <div className="detail-wrapper">
                <p className="detail-label">Email:</p>
                <p className="detail-content">{userDetails.email}</p>
              </div>
            </div>
          </div>
        </StyledUserDetails>
        <StyledUsrDetailsImg>
          <img src={usrDetails_img} alt="usrDetails" />
        </StyledUsrDetailsImg>
      </StyledUsrDetailsImgWrapper>
      <Footer />
    </>
  );
};

const StyledUsrDetailsImgWrapper = styled.div`
  min-height: 100vh;
  margin-left: 30%;
  display: flex;
  width: 60%;
  padding: 4rem;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const StyledUserDetails = styled.div`
  flex-basis: 50%;
  align-self: center;
  padding: 0 1rem;
  .profile-home {
    font-family: sans-serif;
    font-size: 1.5rem;
    text-align: center;
  }
  .profile-contents {
    margin: auto;
    box-shadow: 1px 1px 1px 1px #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .detail-wrapper {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    .detail-content {
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
    }
  }
  @media only screen and (min-width: 280px) and (max-width: 1110px) {
    flex-basis: 100%;
    .profile-contents {
      box-shadow: none;
    }
  }
`;

const StyledUsrDetailsImg = styled.div`
  flex-basis: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 280px) and (max-width: 1110px) {
    flex-basis: 0%;
  }
`;

export default UserDetails;
