import React from 'react'
import styled from 'styled-components';

function RestaurantProfile() {
    return (
        <StyledDiv>
            <div className='details'>RestaurantProfile</div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;

export default RestaurantProfile;