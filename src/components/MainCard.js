import React from 'react';
import styled from 'styled-components';

const MainImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%:
`;

const MainImage = styled.div`
    width: 100%;
    height: 70vh;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center center;
`;

const MainContent = styled.div`
    padding: 10px;
    h2 {
        font-size: 2rem;
        font-weight: bold;
    }
    p {
        margin-top: 10px;
        font-size: 1.1rem;
    }
`;

const MainCard = props => {
    return (
        <MainImageContainer>
            <MainImage url={props.currentImage.url} />
            <MainContent>
                <h2>{props.currentImage.title}</h2>
                <p>{props.currentImage.date}</p>
                <p>{props.copyright ? props.copyright : 'Copyright free'}</p>
                <p>{props.currentImage.explanation}</p>
            </MainContent>
        </MainImageContainer>
    );
};

export default MainCard;
