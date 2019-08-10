import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

import CardCreator from './components/CardCreator.js';
import MainCard from './components/MainCard.js';
import Header from './components/Header.js';

var moment = require('moment');

const SideBar = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background-color: red;
    overflow: scroll;
`;

const App = () => {
    const [startDate, setStartDate] = useState('2019-06-07');
    const [endDate, setEndDate] = useState('2019-06-15');
    const [dateRange, setDateRange] = useState([]);
    const [currentImage, setCurrentImage] = useState({
        url:
            'https://apod.nasa.gov/apod/image/1901/orionred_WISEantonucci_960.jpg',
        explanation:
            'The Great Nebula in Orion is an intriguing place.  Visible to the unaided eye, it appears as a small fuzzy patch in the constellation of Orion. But this image, an illusory-color four-panel mosaic taken in different bands of infrared light with the Earth orbiting WISE observatory, shows the Orion Nebula to be a bustling  neighborhood of recently formed stars, hot gas, and dark dust.  The power behind much of the Orion Nebula (M42) is the stars of the Trapezium star cluster, seen near the center of the featured image. The orange glow surrounding the bright stars pictured here is their own starlight reflected by intricate dust filaments that cover much of the region.  The current  Orion Nebula cloud complex, which includes the Horsehead Nebula, will slowly disperse over the next 100,000 years.',
        title: 'The Orion Nebula in Infrared from WISE',
    });

    useEffect(() => {
        let start = moment(startDate, 'YYYY-MM-DD');
        let end = moment(endDate, 'YYYY-MM-DD');
        let dates = [start.format('YYYY-MM-DD')];

        while (start < end) {
            dates.push(start.add(1, 'day').format('YYYY-MM-DD'));
        }

        setDateRange(dates);
    }, []);

    const updateCurrentImage = value => {
        setCurrentImage(value);
    };

    console.log(dateRange);

    return (
        <div className="App">
            <div className="main-container">
                <Header />
                <MainCard currentImage={currentImage} />
            </div>
            <div className="side-bar">
                <SideBar>
                    <div
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            backgroundColor: 'white',
                        }}
                    >
                        Select a date date range
                    </div>
                    <div
                        style={{
                            marginTop: 20,
                            display: 'flex',
                            flexFlow: 'row wrap',
                        }}
                    >
                        {dateRange.map((date, index) => {
                            if (!date) return <h2>Loading</h2>;
                            return (
                                <CardCreator
                                    key={index}
                                    date={date}
                                    updateCurrentImage={updateCurrentImage}
                                />
                            );
                        })}
                    </div>
                </SideBar>
            </div>
        </div>
    );
};

export default App;
