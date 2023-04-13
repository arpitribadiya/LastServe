import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import login_img from "../../assets/login.jpg";
import Footer from "../Footer/Footer";
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [authError, setAuthError] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, { email: username, password: password });
      if (result.status === 200) {
        navigate('/adminDashboard');
        window.localStorage.setItem("email", username);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setUsername('');
        setPassword('');
        setAuthError("Invalid Username and Password");
      } else {
        setUsername('');
        setPassword('');
        console.error(error);
      }
    }
  };

  return (
    <>
      <StyledLoginImgWrapper className="login-img-wrapper">
        <StyledLogin className="login-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => handleInputChange(e)}
              placeholder="E-mail"
            ></input>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            ></input>
          </div>
          <button className="login-btn">Login</button>
          <div className="err">
            {<span className='err'>{authError}</span>}
          </div>
        </StyledLogin>
        <StyledLoginImg className="login-img">
          <img src={login_img} alt="login_img" />
        </StyledLoginImg>
      </StyledLoginImgWrapper>
      <Footer />
    </>
  );
}

const StyledLoginImgWrapper = styled.div`
  display: flex;
  width: 60%;
  box-shadow: 1px 1px 2px 2px #ccc;
  border-radius: 5px;
  margin: 5rem auto;
  padding: 4rem;
`;

const StyledLogin = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
  .input-wrapper {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    input {
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
    }
  }
  a{
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    color:  rgb(0, 127, 255);
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
  .err{
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: center;
  }
`;

const StyledLoginImg = styled.div`
  flex-basis: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default AdminLogin;
