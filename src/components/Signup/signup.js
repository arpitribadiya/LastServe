import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const nameRegEx = new RegExp('^[A-Za-z]+$');
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const [disabled,setDisabled] = useState(true);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ('firstName' === name) {
            setFirstName(value);
        } else if ('lastName' === name) {
            setLastName(value);
        } else if ('email' === name) {
            setEmail(value);
        } else if ('password' === name) {
            setPassword(value);
        } else if ('confirmPassword' === name) {
            setConfirmPassword(value);
        }
    }

    const handleInputValidation = e => {
        const { name, value } = e.target;
        if ('firstName' === name) {
            console.log(value);
            console.log(value.match(nameRegEx));
            if (!value) {
                setFirstNameError('Enter first name');
                setDisabled(true);
            } else if (!value.match(nameRegEx)) {
                setFirstNameError('First name can contain only alphabets');
                setDisabled(true);
            } else {
                setFirstNameError('');
                setDisabled(false);
            }
        } else if ('lastName' === name) {
            if (!value) {
                setLastNameError('Enter last name');
                setDisabled(true);
            } else if (!value.match(nameRegEx)) {
                setLastNameError('Last name can contain only alphabets');
                setDisabled(true);
            } else {
                setLastNameError('');
                setDisabled(false);
            }
        } else if ('email' === name) {
            if (!value) {
                setEmailError('Enter an email');
                setDisabled(true);
            } else if (!value.match(validEmail)) {
                setEmailError('Enter a valid email address');
                setDisabled(true);
            } else {
                setEmailError('');
                setDisabled(false);
            }
        } else if ('password' === name) {
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
                setConfirmPasswordError('');
                setDisabled(false);
            } else {
                setPasswordError('');
                setDisabled(false);
            }
        } else if ('confirmPassword' === name) {
            if (!value) {
                setConfirmPasswordError('Enter confirm password');
                setDisabled(true);
            }else if(value.length <8 ){
                setConfirmPasswordError('Confirm password must be min. 8 charceters');
                setDisabled(true);
            } else if (password && value !== password) {
                setConfirmPasswordError('Password and confirm password do not match');
                setDisabled(true);
            } else if(!password){
                setPasswordError('Enter a password');
                setDisabled(true);
            }else if (password && value === password) {
                setConfirmPasswordError('');
                setDisabled(false);
            } else {
                setConfirmPasswordError('');
                setDisabled(false);
            }
        }
    }

    const handleSubmit = (e) => {
          console.log('Inside submit');
          navigate('/login',{state : {fName : firstName, lName : lastName, em : email}});
    }

    return (
        <form className='form'>
            <div className='formContent'>
                <div className='formTitle'>
                    <h3>Register</h3>
                </div>

                <div className='inputWrapper'>
                    <label className='formLabel'>First Name*</label>
                    <input className='formInput' type='text' name='firstName' value={firstName} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='First Name' />
                </div>
                <div className='err'>
                    {<span className='err'>{firstNameError}</span>}
                </div>

                <div className='inputWrapper'>
                    <label className='formLabel'>Last Name*</label>
                    <input className='formInput' type='text' name='lastName' value={lastName} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Last Name' />
                </div>
                <div className='err'>
                    {<span className='err'>{lastNameError}</span>}
                </div>

                <div className='inputWrapper'>
                    <label className='formLabel'>Email*</label>
                    <input className='formInput' type='email' name='email' value={email} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Email' />
                </div>
                <div className='err'>
                    {<span className='err'>{emailError}</span>}
                </div>

                <div className='inputWrapper'>
                    <label className='formLabel'>Password*</label>
                    <input className='formInput' type='password' name='password' value={password} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Password' />
                </div>
                <div className='err'>
                    {<span className='err'>{passwordError}</span>}
                </div>

                <div className='inputWrapper'>
                    <label className='formLabel'>Confirm Password*</label>
                    <input className='formInput' type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Confirm Password' />
                </div>
                <div className='err'>
                    {<span className='err'>{confirmPasswordError}</span>}
                </div>

                <div className='footNote'>
                    <p>* Mandatory fields</p>
                </div>

                <button disabled={disabled} className='registerBtn' onClick={(e) => handleSubmit(e)}>Register</button>
            </div>
        </form>
    )
}export default SignUp;