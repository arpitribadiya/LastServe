//Created by Viraj Joshi
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import passreset_img from '../../assets/passreset.jpg'
import Footer from '../Footer/Footer';
import NewPassModal from './NewPassModal';

function NewPassword() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [blankFromError, setBlankFormError] = useState('');

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if ("password" === name) {
            setPassword(value);
        }
        if ("confirmPassword" === name) {
            setConfirmPassword(value);
        }
    }

    const handleInputValidation = e => {
        const { name, value } = e.target;
        if ("password" === name) {
            if (!value) {
                setPasswordError('Enter a password');
                setDisabled(true);
            } else if (value.length < 8) {
                setPasswordError('Password must containt min. 8 characters');
                setDisabled(true);
            } else if (confirmPassword && value !== confirmPassword) {
                setConfirmPasswordError('Password and confirm password do not match');
                setDisabled(true);
            } else if (confirmPassword && value === confirmPassword) {
                setPasswordError('');
                setConfirmPasswordError('');
                setDisabled(false);
            } else {
                setPasswordError('');
                setDisabled(false);
            }
        }
        if ("confirmPassword" === name) {
            if (!value) {
                setConfirmPasswordError('Enter confirm password');
                setDisabled(true);
            } else if (value.length < 8) {
                setConfirmPasswordError('Confirm password must be min. 8 charceters');
                setDisabled(true);
            } else if (password && value !== password) {
                setConfirmPasswordError('Password and confirm password do not match');
                setDisabled(true);
            } else if (!password) {
                setPasswordError('Enter a password');
                setDisabled(true);
            } else if (password && value === password) {
                setConfirmPasswordError('');
                setDisabled(false);
            } else {
                setConfirmPasswordError('');
                setDisabled(false);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInputValidation(e);
        if (passwordError || confirmPasswordError) {
            setBlankFormError('Enter mandatory fields');
        } else {
            setBlankFormError('');
            setPassword('');
            setConfirmPassword('');
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/updatePassword`,
                {
                    email: window.localStorage.getItem('resetEmail'),
                    newPassword: password
                }).then(res => {
                    window.localStorage.removeItem('resetEmail');
                    setShowModal(true);
                });
        }
    }

    const handleModalClose = e => {
        setShowModal(false);
        navigate('/login');
    }

    return (
        <>
            <StyledResetImgWrapper className='reset-img-wrapper'>
                <StyledReset className='pass-reset-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-title'>
                        <h3>New Password</h3>
                    </div>
                    <div className='input-wrapper'>
                        <label className='form-label'>Password*</label>
                        <input className='form-input' type='password' name='password' value={password} onChange={(e) => handleOnChange(e)} onBlur={handleInputValidation} placeholder='Password'></input>
                    </div>
                    <div className='err'>
                        {<span className='err'>{passwordError}</span>}
                    </div>

                    <div className='input-wrapper'>
                        <label className='form-label'>Confirm Password*</label>
                        <input className='form-input' type='password' name='confirmPassword' onChange={(e) => handleOnChange(e)} onBlur={handleInputValidation} placeholder='Confirm Password'></input>
                    </div>
                    <div className='err'>
                        {<span className='err'>{confirmPasswordError}</span>}
                    </div>

                    <div className='footNote'>
                        <p>* Mandatory fields</p>
                    </div>

                    <div className='err'>
                        {<span className='blank-err'>{blankFromError}</span>}
                    </div>

                    <button className="new-pass-btn" disabled={disabled}>Reset Password</button>
                    <div className='reset-modal'>
                        <NewPassModal showModal={showModal} onClose={handleModalClose} />
                    </div>
                </StyledReset>
                <StyledResetImg className="login-img">
                    <img src={passreset_img} alt="passreset_img" />
                </StyledResetImg>
            </StyledResetImgWrapper>
            <Footer />
        </>
    )
}

const StyledResetImgWrapper = styled.div`
  display: flex;
  width: 60%;
  box-shadow: 1px 1px 2px 2px #ccc;
  border-radius: 5px;
  margin: 5rem auto;
  padding: 4rem;
`;

const StyledReset = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 1rem;
  .form-title{
     font-size: 2rem;
     text-align: center;
  }
  .input-wrapper {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    gap: 1rem;
    input {
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
    }
  }
    .new-pass-btn {
    background-color: rgb(0, 127, 255);
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 1rem;
    margin-top: auto;
    }
    .new-pass-btn:hover {
      cursor: pointer;
    }
    .new-pass-btn:disabled,
    .new-pass-btn[disabled]{
    cursor: not-allowed;
    color: #666666;
    background-color: #ccc;
    } 
  .err{
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: center;
  }
  .footNote{
    color: red;
    justify-content: left;
    font-size: small;
    padding: 0rem;
  }
`;

const StyledResetImg = styled.div`
  flex-basis: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default NewPassword;