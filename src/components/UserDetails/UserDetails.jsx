import React from 'react'
import styled from 'styled-components';
import usrDetails_img from "../../assets/user_details.jpg";
import Footer from '../Footer/Footer';

function UserDetails() {
    return (
        <>
            <StyledUsrDetailsImgWrapper className='usrDetails-img-wrapper'>
                <StyledUserDetails>
                    <div className='profile-home'>
                        <div className='profile-contents'>
                            <div className='detail-wrapper'>
                                <p className="detail-label">First Name:</p>
                                <p className='detail-content'>Jimmy</p>
                            </div>
                            <div className='detail-wrapper'>
                                <p className="detail-label">Last Name:</p>
                                <p className='detail-content'>Anderson</p>
                            </div>
                            <div className='detail-wrapper'>
                                <p className="detail-label">Email:</p>
                                <p className='detail-content'>jimmyand@dal.ca</p>
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
    )
};

const StyledUsrDetailsImgWrapper = styled.div`
    min-height: 100vh;
    margin-left: 30%;
    display: flex;
    width: 60%;
    padding: 4rem;
`;

const StyledUserDetails = styled.div`
   flex-basis: 50%;
   display: flex;
   flex-direction: column;
   padding: 0 1rem;
  .profile-home{
    font-family: sans-serif;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 30%;
  }
  .profile-contents{
    margin: auto;
    box-shadow: 1px 1px 1px 1px #ccc;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .detail-wrapper{
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    .detail-content{
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
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
`

export default UserDetails;