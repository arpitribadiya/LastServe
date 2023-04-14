import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import login_img from "../../assets/volunteer_reg.jpg";

function DonationForm() {
  let { state } = useLocation();

  const [currentAmount, setCurrentAmount] = useState(state);

  const [donorName, setDonorName] = useState("");
  const [donorPhoneNumber, setDonorPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");

  const [donorNameError, setDonorNameError] = useState("");
  const [donorPhoneNumberError, setDonorPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [blankFromError, setBlankFormError] = useState("");

  const commonRegEx = new RegExp("^[A-Za-z]+$");
  const phoneRegEx = new RegExp("^[0-9]{10}$");
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPincode = new RegExp("^[a-zA-Z0-9]+$");
  const addressRegEx = new RegExp("^[a-zA-Z0-9s]*$");

  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ("donorName" === name) {
      setDonorName(value);
    } else if ("donorPhoneNumber" === name) {
      setDonorPhoneNumber(value);
    } else if ("address" === name) {
      setAddress(value);
    } else if ("city" === name) {
      setCity(value);
    } else if ("pincode" === name) {
      setPincode(value);
    } else if ("email" === name) {
      setEmail(value);
    }
  };

  const handleInputValidation = (e) => {
    const { name, value } = e.target;
    if ("donorName" === name) {
      if (!value) {
        setDonorNameError("Enter your name");
        setDisabled(true);
      } else if (!value.match(commonRegEx)) {
        setDonorNameError("Your name should only contain alphabets");
        setDisabled(true);
      } else {
        setDonorNameError("");
        setDisabled(false);
      }
    } else if ("donorPhoneNumber" === name) {
      if (!value) {
        setDonorPhoneNumberError("Enter phone-number");
        setDisabled(true);
      } else if (!value.match(phoneRegEx)) {
        setDonorPhoneNumberError("Phone number must be of 10 digits only.");
        setDisabled(true);
      } else {
        setDonorPhoneNumberError("");
        setDisabled(false);
      }
    } else if ("email" === name) {
      if (!value) {
        setEmailError("Enter an email");
        setDisabled(true);
      } else if (!validEmail.test(value)) {
        setEmailError("Enter a valid email address.");
        setDisabled(true);
      } else {
        setEmailError("");
        setDisabled(false);
      }
    } else if ("address" === name) {
      if (!value) {
        setAddressError("Enter an address");
        setDisabled(true);
      } else if (!addressRegEx.test(value)) {
        setAddressError("Enter a valid address.");
        setDisabled(true);
      } else {
        setAddressError("");
        setDisabled(false);
      }
    } else if ("pincode" === name) {
      if (!value) {
        setPincodeError("Enter an address");
        setDisabled(true);
      } else if (!validPincode.test(value)) {
        setPincodeError("Pincode does not exist.");
        setDisabled(true);
      } else {
        setPincodeError("");
        setDisabled(false);
      }
    } else if ("city" === name) {
      if (!value) {
        setCityError("Enter city");
        setDisabled(true);
      } else if (!value.match(commonRegEx)) {
        setCityError("Enter a valid City.");
        setDisabled(true);
      } else {
        setCityError("");
        setDisabled(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputValidation(e);
    if (
      donorNameError ||
      emailError ||
      donorPhoneNumberError ||
      addressError ||
      cityError ||
      pincodeError
    ) {
      setBlankFormError("Kindly enter mandatory fields");
    } else {
      const tempdata = {
        donorName: donorName,
        donorPhoneNumber: donorPhoneNumber,
        address: address,
        city: city,
        pincode: pincode,
        email: email,
        currentAmount: currentAmount,
      };

      navigate("/donationFinal", { state: tempdata });
    }
  };

  return (
    <StyledSignupImgWrapper className="login-img-wrapper">
      <StyledForm className="form">
        <div className="formContent">
          <div className="formTitle">
            <h3>Donation Form</h3>
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Donor Name*</label>
            <input
              className="formInput"
              type="text"
              name="donorName"
              value={donorName}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Your Name"
            />
          </div>
          <div className="err">
            {<span className="err">{donorNameError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Address*</label>
            <input
              className="formInput"
              type="text"
              name="address"
              value={address}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Address"
            />
          </div>
          <div className="err">
            {<span className="err">{addressError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">City*</label>
            <input
              className="formInput"
              type="text"
              name="city"
              value={city}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="City"
            />
          </div>
          <div className="err">{<span className="err">{cityError}</span>}</div>

          <div className="inputWrapper">
            <label className="formLabel">PinCode*</label>
            <input
              className="formInput"
              type="text"
              name="pincode"
              value={pincode}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="PinCode"
            />
          </div>
          <div className="err">
            {<span className="err">{pincodeError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">PhoneNumber*</label>
            <input
              className="formInput"
              type="text"
              name="donorPhoneNumber"
              value={donorPhoneNumber}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="PhoneNumber"
            />
          </div>
          <div className="err">
            {<span className="err">{donorPhoneNumberError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Email*</label>
            <input
              className="formInput"
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Email"
            />
          </div>
          <div className="err">{<span className="err">{emailError}</span>}</div>
          <div></div>
          <div className="footNote">
            <p>* Mandatory fields</p>
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
            Next
          </button>
        </div>
      </StyledForm>
      <StyledSignupImg className="login-img">
        <img src={login_img} alt="login_img" />
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
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    padding: 2rem;
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
export default DonationForm;
