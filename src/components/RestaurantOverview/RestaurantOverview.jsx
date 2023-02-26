import React from 'react'
import styled from 'styled-components';

function RestaurantOverview() {
    return (
        <StyledDiv>
            <div className='details'>RestaurantOverview</div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;

export default RestaurantOverview;