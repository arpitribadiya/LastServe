import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import donation_img from "../../assets/donation.jpg";

function DonationsAmount() {
  const [donationAmount, setDonationAmount] = useState();
  const [donationAmountError, setDonationAmountError] = useState();
  const amountRegex = new RegExp("^[0-9$]+$");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [blankFromError, setBlankFormError] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ("donationAmount" === name) {
      setDonationAmount(value);
    }
  };

  const handleInputValidation = (e) => {
    const { name, value } = e.target;
    if ("donationAmount" === name) {
      if (!value) {
        setDonationAmountError("Enter the amount");
        setDisabled(true);
      } else if (!value.match(amountRegex)) {
        setDonationAmountError("Kindly enter only numbers");
        setDisabled(true);
      } else {
        setDonationAmountError("");
        setDisabled(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputValidation(e);
    if (donationAmountError) {
      setBlankFormError(donationAmountError);
    } else {
      navigate("/donationForm", { state: donationAmount });
    }
  };

  return (
    <StyledSignupImgWrapper className="login-img-wrapper">
      <StyledForm className="form">
        <div className="formContent">
          <div className="formTitle">
            <h3>Donations</h3>
          </div>
          <div className="inputWrapper">
            <label className="formLabel">I would like to donate*</label>
            <input
              className="formInput"
              name="donationAmount"
              type="text"
              value={donationAmount}
              onChange={handleInputChange}
              onBlur={handleInputValidation}
              maxLength="16"
            />
          </div>
          <div className="err">
            {<span className="err">{donationAmountError}</span>}
          </div>
          <div className="err">
            {<span className="blank-err">{blankFromError}</span>}
          </div>

          <button
            disabled={disabled}
            className="registerBtn"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            {" "}
            Next
          </button>
        </div>
      </StyledForm>
      <StyledSignupImg className="donation-img">
        <img src={donation_img} alt="donation_img" />
      </StyledSignupImg>
    </StyledSignupImgWrapper>
  );
}

const StyledSignupImgWrapper = styled.div`
  display: flex;
  width: 70%;
  box-shadow: 1px 1px 2px 2px #ccc;
  border-radius: 5px;
  margin: 1rem auto;
  padding: 3rem;
  position: absolute;
  top: 17rem;
  left: 20rem;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
    position: relative;
    top: auto;
    left: auto;
    box-shadow: none;
  }
`;

const StyledSignupImg = styled.div`
  flex-basis: 60%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    flex-basis: 0%;
  }
`;
const StyledForm = styled.form`
  margin: 2rem auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
  .formContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .inputWrapper {
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }
  .inputWrapper > input {
    padding: 1rem;
    outline: none;
    border: none;
    box-shadow: 1px 1px 2px 2px #ccc;
    border-radius: 5px;
  }
  .err {
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: right;
  }
  .registerBtn {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: rgb(16, 109, 240);
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 1px 1px #ccc;
    color: white;
    letter-spacing: 1px;
  }
  .registerBtn:hover {
    cursor: pointer;
  }
  .registerBtn:disabled,
  .registerBtn[disabled] {
    cursor: not-allowed;
    color: #666666;
    background-color: #ccc;
  }
  .formTitle {
    text-align: center;
    font-size: 2rem;
  }
  .footNote {
    color: red;
    justify-content: left;
    font-size: small;
    padding: 0rem;
  }
  .login-type-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    gap: 1rem;
    margin-top: auto;
    .radio-input-wrapper {
      display: flex;
      gap: 1rem;
      input {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
  .react-calendar__navigation__arrow react-calendar__navigation__next2-button {
    display: hidden !important;
  }
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    flex-basis: 100%;
  }
`;
export default DonationsAmount;
