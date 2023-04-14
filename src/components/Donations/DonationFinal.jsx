import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import card_img from "../../assets/card.avif";
import axios from "axios";
function DonationFinal() {
  let { state } = useLocation();

  const [currentData, setCurrentData] = useState(state);
  const [cardNumber, setCardNumber] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [cvv, setCvv] = useState();

  const [cardNumberError, setCardNumberError] = useState();
  const [expirationDateError, setExpirationDateError] = useState();
  const [cvvError, setCvvError] = useState();
  const [blankFromError, setBlankFormError] = useState();

  const cardRegEx = new RegExp("^[A-Za-z]+$");
  const expireRegEx = new RegExp("^(0[1-9]|1[0-2])/[0-9]{2}$");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleInputValidation = (e) => {
    const { name, value } = e.target;
    if ("cardNumber" === name) {
      if (!value) {
        setCardNumberError("Enter your Card-Number.");
        setDisabled(true);
      } else if (!value.match(cardRegEx)) {
        setCardNumberError("Your Card-Number should have only numbers.");
        setDisabled(true);
      } else {
        setCardNumberError("");
        setDisabled(false);
      }
    } else if ("expirationDate" === name) {
      if (!value) {
        setExpirationDateError("Enter the Expiration date.");
        setDisabled(true);
      } else if (!value.match(expireRegEx)) {
        setExpirationDateError("Expiration date should only contain numbers.");
        setDisabled(true);
      } else {
        setExpirationDateError("");
        setDisabled(false);
      }
    } else if ("cvv" === name) {
      if (!value) {
        setCvvError("Enter an email.");
        setDisabled(true);
      } else if (!value.match(cardRegEx)) {
        setCvvError("Enter a valid email address.");
        setDisabled(true);
      } else {
        setCvvError("");
        setDisabled(false);
      }
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputValidation(e);
    if (cardNumberError || expirationDateError || cvvError) {
      setBlankFormError("Kindly enter mandatory fields");
    } else {
      const donations = {
        donationamount: currentData.currentAmount,
        donorname: currentData.donorName,
        donorphonenumber: currentData.donorPhoneNumber,
        address: currentData.address,
        city: currentData.city,
        pincode: currentData.pincode,
        email: currentData.email,
        cardnumber: cardNumber,
        expdate: expirationDate,
        cvv: cvv,
      };

      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/donation/postDonation`,
          donations
        )
        .then((res) => {
          navigate("/");
        });
    }
  };
  return (
    <StyledSignupImgWrapper className="login-img-wrapper">
      <StyledForm className="form">
        <div className="formContent">
          <div className="formTitle">
            <h3>Donations</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <label className="formLabel">Card Number*</label>
              <input
                className="formInput"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                onBlur={handleInputValidation}
                maxLength="16"
              />
            </div>
            <div className="err">
              {<span className="err">{cardNumberError}</span>}
            </div>
            <br></br>
            <div className="inputWrapper">
              <label className="formLabel">Expiration Date (MM/YY):</label>
              <input
                className="formInput"
                type="text"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                onBlur={handleInputValidation}
                maxLength="4"
              />
            </div>
            <div className="err">
              {<span className="err">{expirationDateError}</span>}
            </div>
            <br></br>
            <div className="inputWrapper">
              <label className="formLabel">CVV:</label>
              <input
                className="formInput"
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                onBlur={handleInputValidation}
                maxLength="3"
                pattern="\d{3}"
              />
            </div>
            <div className="err">{<span className="err">{cvvError}</span>}</div>
            <br></br>
            <button
              className="registerBtn"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              {" "}
              Donate
            </button>
          </form>
        </div>
      </StyledForm>
      <StyledSignupImg className="card-img">
        <img src={card_img} alt="card_img" />
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
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
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
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
  }
`;
export default DonationFinal;
