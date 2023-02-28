import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import login_img from "../../assets/volunteer_reg.jpg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SignupVolunteer() {

    const [volunteerName, setVolunteerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [value, onChange1] = useState(new Date());

    const [volunteerNameError, setVolunteerNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [blankFromError, setBlankFormError] = useState('');
   
    const commonRegEx = new RegExp('^[A-Za-z]+$');
    const phoneRegEx = new RegExp('^[0-9]{10}$');
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const [disabled, setDisabled] = useState(true);
    

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ('volunteerName' === name) {
            setVolunteerName(value);
        }else if('phonenumber' === name){
            setPhoneNumber(value);
        }else if ('email' === name) {
            setEmail(value);
        }
    }


    const handleInputValidation = e => {
        const { name, value } = e.target;
        if ('volunteerName' === name) {
            console.log(value);
            console.log(value.match(commonRegEx));
            if (!value) {
                setVolunteerNameError('Enter your name');
                setDisabled(true);
            } else if (!value.match(commonRegEx)) {
                setVolunteerNameError('Your name should only contain alphabets');
                setDisabled(true);
            } else {
                setVolunteerNameError('');
                setDisabled(false);
            }
        }else if ('phonenumber' === name) {
            if (!value) {
                setPhoneNumberError('Enter phonenumber');
                setDisabled(true);
            } else if (!value.match(phoneRegEx)) {
                setPhoneNumberError('phone number must be of 10 digits.');
                setDisabled(true);
            }else {
                setPhoneNumberError('');
                setDisabled(false);
            }
        }else if ('email' === name) {
            if (!value) {
                setEmailError('Enter an email');
                setDisabled(true);
            } else if (!validEmail.test(value)) {
                setEmailError('Enter a valid email address');
                setDisabled(true);
            } else {
                setEmailError('');
                setDisabled(false);
            }
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInputValidation(e);
        console.log(blankFromError);
        if (volunteerNameError || emailError || phoneNumberError) {
            setBlankFormError('Kindly enter mandatory fields');
        } else {
            navigate('/');
        }
    }

    

    return (
        <StyledSignupImgWrapper className="login-img-wrapper">
            <StyledForm className='form'>
                <div className='formContent'>
                    <div className='formTitle'>
                        <h3>Volunteer Registration</h3>
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>Volunteer Name*</label>
                        <input className='formInput' type='text' name='volunteerName' value={volunteerName} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Your Name' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{volunteerNameError}</span>}
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>PhoneNumber*</label>
                        <input className='formInput' type='text' name='phonenumber' value={phoneNumber} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='PhoneNumber' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{phoneNumberError}</span>}
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>Email*</label>
                        <input className='formInput' type='email' name='email' value={email} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Email' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{emailError}</span>}
                    </div>

                    <div className="login-type-wrapper">
                    <label className='formLabel'>Kindly choose your gender*</label>
            <div className="radio-input-wrapper"> 
              <input type="radio" name="login-type" id="male-user" />
              <label htmlFor="male-user">Male</label>
            </div>
            <div className="radio-input-wrapper">
              <input type="radio" name="login-type" id="female-user" />
              <label htmlFor="female-user"> Female</label>
            </div>
            <div className="radio-input-wrapper">
              <input type="radio" name="login-type" id="notsay-user" />
              <label htmlFor="notsay-user"> Prefer not to say</label>
            </div>
          </div>

          <div className="login-type-wrapper">
                    <label className='formLabel'>Kindly choose your occupation*</label>
            <div className="radio-input-wrapper"> 
              <input type="radio" name="occupation-type" id="student" />
              <label htmlFor="male-user">Student</label>
            </div>
            <div className="radio-input-wrapper">
              <input type="radio" name="occupation-type" id="worker" />
              <label htmlFor="female-user"> Working Professional</label>
            </div>
          </div>
          <div>
          <div className="login-type-wrapper">
          <label className='formLabel'>Please provide your availability*</label>
          <Calendar
        onChange={onChange1}
        value={value}
      />
            </div>
            </div>
                    <div className='footNote'>
                        <p>* Mandatory fields</p>
                    </div>

                    <div className='err'>
                        {<span className='blank-err'>{blankFromError}</span>}
                    </div>

                    <button disabled={disabled} className='registerBtn' type='submit' onClick={(e) => handleSubmit(e)}>Register</button>
                </div>
            </StyledForm>
            <StyledSignupImg className="login-img">
                <img src={login_img} alt="login_img" />
            </StyledSignupImg>
        </StyledSignupImgWrapper>
    )
}

const StyledSignupImgWrapper = styled.div`
    display: flex;
    width: 70%;
    box-shadow: 1px 1px 2px 2px #ccc;
    border-radius: 5px;
    margin: 1rem auto;
    padding: 3rem;
`


const StyledSignupImg = styled.div`
    flex-basis: 60%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const StyledForm = styled.form`
    margin:2rem auto;
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
    .inputWrapper{
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
    .err{
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
    border:none;
    box-shadow: 1px 1px 1px 1px #ccc;
    color: white;
    letter-spacing: 1px;
    }
    .registerBtn:hover{
    cursor: pointer;
    }
    .registerBtn:disabled,
    .registerBtn[disabled]{
    cursor: not-allowed;
    color: #666666;
    background-color: #ccc;
    }
    .formTitle{
    text-align: center;
    font-size: 2rem;
    }
    .footNote{
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
      .react-calendar__navigation__arrow react-calendar__navigation__next2-button{
        display:hidden !imposrtant;
      }
`
export default SignupVolunteer;