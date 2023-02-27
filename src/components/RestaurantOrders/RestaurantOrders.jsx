import React from 'react'
import styled from 'styled-components';

function RestaurantOrders() {
    return (
        <StyledDiv>
            <div className='details'>RestaurantOrders</div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;

export default RestaurantOrders;