import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

//Components
import DatePicker from 'react-datepicker';
import CardCreator from './CardCreator.js';
var moment = require('moment');

//Styles

const DateContainer = styled.div`
    position: absolute;
    z-index: 100;
    background-color: white;
`;

const CardContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
`;

const SideBarContainer = styled.div`
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

const SideBar = props => {
    const [endDate, setEndDate] = useState('2019-08-09');
    const [startDate, setStartDate] = useState('2019-07-25');
    const [dateRange, setDateRange] = useState([]);

    useEffect(() => {
        let end = moment(endDate, 'YYYY-MM-DD');
        let start = moment(startDate, 'YYYY-MM-DD');
        let dates = [end.format('YYYY-MM-DD')];

        while (end > start) {
            dates.push(end.subtract(1, 'day').format('YYYY-MM-DD'));
        }

        setDateRange(dates);
    }, [startDate, endDate]);

    const updateStartDate = date => {
        setStartDate(date);
    };

    const updateEndDate = date => {
        setEndDate(date);
    };

    console.log(startDate);

    return (
        <SideBarContainer>
            <DateContainer>
                <DatePicker
                    selected={new Date(startDate)}
                    selectsStart
                    startDate={new Date(startDate)}
                    endDate={new Date(endDate)}
                    onChange={updateStartDate}
                />
                <DatePicker
                    selected={new Date(endDate)}
                    selectsEnd
                    startDate={new Date(startDate)}
                    endDate={new Date(endDate)}
                    onChange={updateEndDate}
                    minDate={new Date(startDate)}
                    maxDate={new Date()}
                />
            </DateContainer>
            <CardContainer>
                {dateRange.map((date, index) => {
                    if (!date) return <h2>Loading</h2>;
                    return (
                        <CardCreator
                            key={index}
                            date={date}
                            updateCurrentImage={props.updateCurrentImage}
                        />
                    );
                })}
            </CardContainer>
        </SideBarContainer>
    );
};

export default SideBar;
