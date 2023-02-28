import React, { useState } from 'react'
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import edit_img from '../../assets/edit_usr_det.jpg';
import { useNavigate } from 'react-router-dom';

function EditUserDetails() {

    const [firstName, setFirstName] = useState('Jimmy');
    const [lastName, setLastName] = useState('Anderson');

    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState('');

    const nameRegEx = new RegExp('^[A-Za-z]+$');

    const navigate = useNavigate();


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if ('firstName' === name) {
            setFirstName(value);
        } else if ('lastName' === name) {
            setLastName(value);
        }
    }

    const handleInputValidation = e => {
        const { name, value } = e.target;
        if ('firstName' === name) {
            if (!value) {
                setFirstNameError('Enter first name');
            } else if (!value.match(nameRegEx)) {
                setFirstNameError('First name can contain only alphabets');
            } else {
                setFirstNameError('');
            }
        } else if ('lastName' === name) {
            if (!value) {
                setLastNameError('Enter last name');
            } else if (!value.match(nameRegEx)) {
                setLastNameError('Last name can contain only alphabets');
            } else {
                setLastNameError('');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Inside submit");
        navigate('/profile');
    }

    return (
        <>
            <StyledEditDetImgWrapper className='edit-det-img-wrapper'>
                <StyledEditDetails className='edit-det-form' onSubmit={(e) => handleSubmit(e)}>
                    <div className='input-wrapper'>
                        <label className='form-label'>First Name*</label>
                        <input className='form-input' type='text' name='firstName' value={firstName} onChange={(e) => handleOnChange(e)} onBlur={handleInputValidation} placeholder='Dummy FirstName'></input>
                    </div>
                    <div className='err'>
                        {firstNameError ? firstNameError : ''}
                    </div>
                    <div className='input-wrapper'>
                        <label className='form-label'>Last Name*</label>
                        <input className='form-input' type='text' name='lastName' value={lastName} onChange={(e) => handleOnChange(e)} onBlur={handleInputValidation} placeholder='Dummy LastName'></input>
                    </div>
                    <div className='err'>
                        {lastNameError ? lastNameError : ''}
                    </div>
                    <div className='input-wrapper'>
                        <label className='form-label'>Email</label>
                        <input className='form-input-readonly' type='email' name='email' value='jimmyand@dal.ca' readOnly placeholder='Email'></input>
                    </div>
                    <button className="edit-btn">Save Changes</button>
                </StyledEditDetails>
                <StyledEditDetImg className='edit-det-img'>
                    <img src={edit_img} alt='edit_det_img' />
                </StyledEditDetImg>
            </StyledEditDetImgWrapper>
            <Footer />
        </>
    )
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
`;

const StyledEditDetails = styled.form`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    .input-wrapper{
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        gap: 1rem;
        input{
            padding: 1rem;
            outline: none;
            border: none;
            box-shadow: 1px 1px 2px 2px #ccc;
            border-radius: 5px;
        }
    }
    button{
        background-color: rgb(0,127,255);
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
    .form-input-readonly{
        background-color: #d4d2d2;
    }
`;

const StyledEditDetImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default EditUserDetails;