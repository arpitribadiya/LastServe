import React, { useState } from 'react'
import styled from 'styled-components';
import passreset_img from '../../assets/passreset.jpg'
import Footer from '../Footer/Footer';

function PasswordReset() {

    const [email, setEmail] = useState('');
    const [notActive, setNotActive] = useState('input-wrapper-disabled');
    const [resend, setResend] = useState("Send");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if ("email" === name) {
            setEmail(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotActive('input-wrapper');
        setResend("Resend");
    }

    return (
        <>
            <StyledResetImgWrapper className='reset-img-wrapper'>
                <StyledReset className='pass-reset-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='form-title'>
                        <h3>Reset Password</h3>
                    </div>
                    <div className='input-wrapper'>
                        <label className='form-label'>Registered E-mail</label>
                        <input className='form-input' type='text' name='email' value={email} onChange={(e) => handleOnChange(e)} placeholder='E-mail'></input>
                    </div>
                    <div className={notActive}>
                        <label className='form-label'>Reset Key</label>
                        <input className='form-input' type='text' name='resetkey' placeholder='Reset key'></input>
                    </div>
                    <button className="reset-btn" >{resend} Reset-link</button>
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
  .input-wrapper-disabled{
    display: none;
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
  .err{
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: center;
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

export default PasswordReset;