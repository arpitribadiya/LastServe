//Created by Viraj Joshi

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import edit_img from "../../assets/edit_usr_det.jpg";
import { useNavigate } from "react-router-dom";
import EditUsrDetModal from "./EditUsrDetModal";
import axios from "axios";

const EditUserDetails = ({ email }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/users/` + email
      );
      setFirstName(result.data.fname);
      setLastName(result.data.lname);
      setEmailInput(email);
    };
    getUserDetails();
  }, []);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [blankFormError, setBlankFormError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const nameRegEx = new RegExp("^[A-Za-z]+$");

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if ("firstName" === name) {
      setFirstName(value);
    } else if ("lastName" === name) {
      setLastName(value);
    }
  };

  const handleInputValidation = (e) => {
    const { name, value } = e.target;
    if ("firstName" === name) {
      if (!value) {
        setFirstNameError("Enter first name");
      } else if (!value.match(nameRegEx)) {
        setFirstNameError("First name can contain only alphabets");
      } else {
        setFirstNameError("");
      }
    } else if ("lastName" === name) {
      if (!value) {
        setLastNameError("Enter last name");
      } else if (!value.match(nameRegEx)) {
        setLastNameError("Last name can contain only alphabets");
      } else {
        setLastNameError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleInputValidation(e);
    if (firstNameError || lastNameError) {
      setBlankFormError("Enter mandatory fields");
    } else {
      const result = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/users/update`,
        { fname: firstName, lname: lastName, email: emailInput }
      );
      if (result.status === 200) {
        setBlankFormError("");
        setFirstNameError("");
        setLastNameError("");
        setShowModal(true);
      }
    }
  };

  const handleModalClose = (e) => {
    setShowModal("false");
    navigate("/home");
  };

  return (
    <>
      <StyledEditDetImgWrapper className="edit-det-img-wrapper">
        <StyledEditDetails
          className="edit-det-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="input-wrapper">
            <label className="form-label">First Name*</label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => handleOnChange(e)}
              onBlur={handleInputValidation}
              placeholder="FirstName"
            ></input>
          </div>
          <div className="err">{firstNameError ? firstNameError : ""}</div>
          <div className="input-wrapper">
            <label className="form-label">Last Name*</label>
            <input
              className="form-input"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => handleOnChange(e)}
              onBlur={handleInputValidation}
              placeholder="LastName"
            ></input>
          </div>
          <div className="err">{lastNameError ? lastNameError : ""}</div>
          <div className="input-wrapper">
            <label className="form-label">Email</label>
            <input
              className="form-input-readonly"
              type="email"
              name="email"
              value={emailInput}
              readOnly
              placeholder="Email"
            ></input>
          </div>
          <div className="footNote">
            <p>* Mandatory fields</p>
          </div>
          <div className="err">
            {<span className="blank-err">{blankFormError}</span>}
          </div>
          <button className="edit-btn">Save Changes</button>
          <div className="edit-modal">
            <EditUsrDetModal showModal={showModal} onClose={handleModalClose} />
          </div>
        </StyledEditDetails>
        <StyledEditDetImg className="edit-det-img">
          <img src={edit_img} alt="edit_det_img" />
        </StyledEditDetImg>
      </StyledEditDetImgWrapper>
      <Footer />
    </>
  );
};

const StyledEditDetImgWrapper = styled.div`
  margin-left: 35%;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  display: flex;
  width: 60%;
  box-shadow: 1px 1px 2px 2px #ccc;
  border-radius: 5px;
  padding: 4rem;
  @media only screen and (min-width: 280px) and (max-width: 432px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledEditDetails = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 1rem;
    input {
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
    }
  }
  button {
    background-color: rgb(0, 127, 255);
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 1rem;
    margin-top: auto;
    :hover {
      cursor: pointer;
    }
  }
  .err {
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: center;
  }
  .form-input-readonly {
    background-color: #d4d2d2;
  }
  .footNote {
    color: red;
    justify-content: left;
    font-size: small;
    padding: 0rem;
  }
  @media only screen and (min-width: 280px) and (max-width: 1110px) {
    flex-basis: 100%;
  }
`;

const StyledEditDetImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (min-width: 280px) and (max-width: 1110px) {
    flex-basis: 0%;
  }
`;

export default EditUserDetails;
