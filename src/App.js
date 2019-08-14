import React, { useState } from 'react';
import './App.css';

import MainCard from './components/MainCard.js';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';

const App = () => {
    // const [startDate, setStartDate] = useState('2019-06-07');
    // const [endDate, setEndDate] = useState('2019-06-15');
    // const [dateRange, setDateRange] = useState([]);
    const [currentImage, setCurrentImage] = useState({});

    const updateCurrentImage = value => {
        setCurrentImage(value);
    };

    return (
        <div className="App">
            <div className="side-bar">
                <SideBar updateCurrentImage={updateCurrentImage} />
            </div>
            <div className="main-container">
                <Header />
                <MainCard
                    currentImage={currentImage}
                    updateCurrentImage={updateCurrentImage}
                />
            </div>
        </div>
    );
};

export default App;
