import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

//Components
import DatePicker from 'react-datepicker';
import CardCreator from './CardCreator.js';
var moment = require('moment');

//Styles

const DateContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .react-datepicker-wrapper {
        flex: 1;
        .react-datepicker__input-container {
            width: 100%;
            input {
                width: 100%;
                text-align: center;
                border: 1px solid black;
                height: 4vh;
                background-color: black;
                color: white;
                font-weight: 700;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
`;

const CardContainer = styled.div`
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
    background-color: black;
    overflow: scroll;
`;

const SideBar = props => {
    const [endDate, setEndDate] = useState('2019-06-30');
    const [startDate, setStartDate] = useState('2019-06-01');
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
