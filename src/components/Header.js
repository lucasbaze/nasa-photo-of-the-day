import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    padding: 5px;
    background-color: black;
    color: white;
    h1 {
        font-size: 1.4rem;
        font-weight: 800;
        padding: 6px;
    }
`;

const Header = props => {
    return (
        <StyledHeader>
            <h1>Cool NASA Photos</h1>
        </StyledHeader>
    );
};

export default Header;
