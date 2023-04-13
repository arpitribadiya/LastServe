//Created By Arpit Ribadiya (B00932018)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CreatePost(props) {


  const [itemName, setItemName] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [foodType, setFoodType] = useState();

  const [itemNameError, setItemNameError] = useState("");
  const [itemQuantityError, setItemQuantityError] = useState("");
  const [startTimeError, setStartTimeError] = useState("");
  const [endTimeError, setEndTimeError] = useState("");
  const [foodTypeError, setFoodTypeError] = useState("");
  const [blankFromError, setBlankFormError] = useState("");

  const commonRegEx = new RegExp("^[A-Za-z]+$");
  const quantityRegEx = new RegExp("^[0-9]*$");

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ("itemName" === name) {
      setItemName(value);
    } else if ("itemQuantity" === name) {
      setItemQuantity(value);
    } else if ("startTime" === name) {
      setStartTime(value);
    } else if ("endTime" === name) {
      setEndTime(value);
    } else if ("foodType" === name) {
      setFoodType(value);
    }
  };

    
  const handleBackClick = () => {
    navigate("/restaurantSidebar", { state: { page: 'restaurantPosts' } });
  }


  const handleInputValidation = (e) => {
    const { name, value } = e.target;
    if ("itemName" === name) {
      if (!value) {
        setItemNameError("Enter Item name");
        setDisabled(true);
      } else {
        setItemNameError("");
        setDisabled(false);
      }
    } else if ("itemQuantity" === name) {
      if (!value) {
        setItemQuantityError("Enter Item Quantity");
        setDisabled(true);
      } else if (!value.match(quantityRegEx)) {
        setItemQuantityError("Quantity can contain only numbers");
        setDisabled(true);
      } else {
        setItemQuantityError("");
        setDisabled(false);
      }
    } else if ("startTime" === name) {
      if (!value) {
        setStartTimeError("Enter Start Time");
        setDisabled(true);
      } else {
        setStartTimeError("");
        setDisabled(false);
      }
    } else if ("endTime" === name) {
      if (!value) {
        setEndTimeError("Enter End Time");
        setDisabled(true);
      } else {
        setEndTimeError("");
        setDisabled(false);
      }
    } else if ("foodType" === name) {
      if (!value) {
        setFoodTypeError("Enter Food Type");
        setDisabled(true);
      } else {
        setFoodTypeError("");
        setDisabled(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputValidation(e);
    if (
      itemNameError ||
      itemQuantityError ||
      startTimeError ||
      endTimeError ||
      foodTypeError
    ) {
      setBlankFormError("Enter mandatory fields");
    } else {
      const email = window.localStorage.getItem("email");

      const post = {
        itemName: itemName,
        itemQuantity: itemQuantity,
        startTime: startTime,
        endTime: endTime,
        foodType: foodType,
        restId: email
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/posts/createPost`, post)
        .then((res) => {
          navigate("/restaurantSidebar", { state: { page: 'restaurantPosts' } });
        });
    }
  };

  return (
    <StyledSignupImgWrapper className="login-img-wrapper">
      <ToastContainer/>
      <StyledForm className="form">
        <div className="formContent">
          <div className="formTitle">
            <h3>Create Post</h3>
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Item Name*</label>
            <input
              className="formInput"
              type="text"
              name="itemName"
              value={itemName}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Item Name"
            />
          </div>
          <div className="err">
            {<span className="err">{itemNameError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Item Quantity*</label>
            <input
              className="formInput"
              type="text"
              name="itemQuantity"
              value={itemQuantity}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Item Quantity"
            />
          </div>
          <div className="err">
            {<span className="err">{itemQuantityError}</span>}
          </div>

          <div className="inputWrapper">
          <label className='formLabel'>Start Time*</label>
          <Calendar
          onChange={setStartTime}
          value={startTime}
          minDate={new Date()}
          />
              </div>
          <div className="err">
            {<span className="err">{startTimeError}</span>}
          </div>

          <div className="inputWrapper">
          <label className='formLabel'>End Time*</label>
          <Calendar
          onChange={setEndTime}
          value={endTime}
          minDate={new Date()}
          />
              </div>
          <div className="err">
            {<span className="err">{endTimeError}</span>}
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Food Type*</label>
            <input
              className="formInput"
              type="text"
              name="foodType"
              value={foodType}
              onChange={(e) => handleInputChange(e)}
              onBlur={handleInputValidation}
              placeholder="Food Type"
            />
          </div>
          <div className="err">
            {<span className="err">{foodTypeError}</span>}
          </div>
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
            Create
          </button>
          <button
            className="registerBackBtn"
            type="submit"
            onClick={() => handleBackClick()}
          >
            Back
          </button>
        </div>
      </StyledForm>
    </StyledSignupImgWrapper>
  );
}

const StyledSignupImgWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 1rem auto;
  padding: 3rem;
  .myclass {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledForm = styled.form`
  margin: 2rem auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0rem;
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
  .registerBackBtn {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: rgb(0, 0, 0);
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
`;

export default CreatePost;
