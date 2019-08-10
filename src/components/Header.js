import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    padding: 5px;
    background-color: black;
    color: white;
`;

const Header = props => {
    return (
        <StyledHeader>
            <h1>Cool NASA Photos</h1>
        </StyledHeader>
    );
};

export default Header;
