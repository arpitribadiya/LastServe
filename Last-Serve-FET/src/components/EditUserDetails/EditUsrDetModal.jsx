//Created by Viraj Joshi
import React from 'react'
import styled from 'styled-components';

const EditUsrDetModal = props => {
    if (!props.showModal) {
        return null;
    }
    return (
        <StyledModal className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4>Success!</h4>
                </div>
                <div className='modal-body'>
                    <h3>Modified successfully</h3>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='modal-button'>
                        Close
                    </button>
                </div>
            </div>
        </StyledModal>
    )
}

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    .modal-content{
        width: 25%;
        padding: 1%;
        background-color: #c3d3ed;
        border: 2px solid grey;
        border-radius: 5px;
    }
    .modal-header, .modal-footer{
        color: green;
        font-size: 25px;

    }
    .modal-body{
        padding: 2%;
        border-top: 1px solid #0f0e0e;
        border-bottom: 1px solid #0f0e0e;
        font-size: 15px;
        font-family: sans-serif;
    }
`

export default EditUsrDetModal;