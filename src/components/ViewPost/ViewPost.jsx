//Created By Arpit Ribadiya (B00932018)

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-calendar/dist/Calendar.css';
import { useLocation } from 'react-router-dom';
import DashboardHeader from "../DashboardHeader/DashboardHeader";


function ViewPost() {

  let { state } = useLocation();
  const [currentPost, setCurrentPost] = useState(state.result);
  const navigate = useNavigate();
  const [itemName, setItemName] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [foodType, setFoodType] = useState();

  React.useEffect(() => {
    setItemName(currentPost.itemName);
    setItemQuantity(currentPost.itemQuantity);
    setStartTime(currentPost.startTime);
    setEndTime(currentPost.endTime);
    setFoodType(currentPost.foodType);

  }, []);

  
  const handleBackClick = () => {
    navigate('/restaurantSidebar', { state: {page:"restaurantPosts"}});
  }


  return (
    

   
    
    <StyledSignupImgWrapper className="login-img-wrapper">
      <ToastContainer/>
      <DashboardHeader heading="Post details"/>
      <div class="dashboard-content">
      <StyledForm className="form">
      
        <div className="formContent">

          <div className="inputWrapper">
            <label className="formLabel">Item Name</label>
            <input
              className="formInput"
              type="text"
              name="itemName"
              value={itemName}
            />
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Item Quantity</label>
            <input
              className="formInput"
              type="text"
              name="itemQuantity"
              value={itemQuantity}
            />
          </div>

          <div className="inputWrapper">
            <label className="formLabel">Start Time</label>
            <input
              className="formInput"
              type="text"
              name="startTime"
              value={startTime}
            />
          </div>

          <div className="inputWrapper">
            <label className="formLabel">End Time</label>
            <input
              className="formInput"
              type="text"
              name="endTime"
              value={endTime}
            />
          </div>


          <div className="inputWrapper">
            <label className="formLabel">Food Type*</label>
            <input
              className="formInput"
              type="text"
              name="foodType"
              value={foodType}
            />
          </div>
          <button
            className="registerBackBtn"
            type="submit"
            onClick={() => handleBackClick()}
          >
            Back
          </button>
        </div>
      </StyledForm>
      </div>
    </StyledSignupImgWrapper>
  
  );
}

const StyledSignupImgWrapper = styled.div`

  min-height: 100vh;
  margin-left: 20%;
.dashboard-content{
    position: relative;
    height: 134px;
    left: 0;
    padding-left: 12px;
    padding-right: 12px;
    right:0px;
    top: 128px;
    }
  .table-heading{
    display: flex;
    justify-content: space-between;
}
.table-heading h3{
    margin: 12px ;
    width: 50%;
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

export default ViewPost;
