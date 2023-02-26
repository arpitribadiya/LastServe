import React from 'react'
import styled from 'styled-components';

function RestaurantPosts() {
    return (
        <StyledDiv>
            <div className='details'>RestaurantPosts</div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  min-height: 100vh;
  margin-left: 30%;
`;

export default RestaurantPosts;