import React from 'react'
import styled from 'styled-components';

function UserDetails() {
    return (
        <StyledDiv>
            <div className='details'>UserDetails</div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;

export default UserDetails;