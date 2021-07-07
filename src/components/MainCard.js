import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHttp } from '../hooks/http.js';
var moment = require('moment');

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
    let today = moment().format('YYYY-MM-DD');
    let apiKey = 'RP2C4x40YT5dHBWemEdiGdjG1VXlqzNF75t8NUH9';
    let url = `https://api.nasa.gov/planetary/apod?date=${today}&api_key=${apiKey}`;
    const [loading, fetchedData] = useHttp(url, []);

    useEffect(() => {
        if (fetchedData == null) {
            return;
        } else {
            props.updateCurrentImage({
                copyright: fetchedData.copyright,
                date: fetchedData.date,
                explanation: fetchedData.explanation,
                url: fetchedData.url,
                title: fetchedData.title,
            });
        }
    }, [fetchedData]);

    return (
        <MainImageContainer>
            <MainImage url={props.currentImage.url} />
            <MainContent>
                <h2>{props.currentImage.title}</h2>
                <p>{props.currentImage.date}</p>
                <p>
                    {props.currentImage.copyright
                        ? props.currentImage.copyright
                        : 'Copyright free'}
                </p>
                <p>{props.currentImage.explanation}</p>
            </MainContent>
        </MainImageContainer>
    );
};

export default MainCard;
