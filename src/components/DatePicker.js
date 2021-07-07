import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = props => {
    return <DatePicker onChange={e => props.updateStartDate(e.target.value)} />;
};

export default DateSelector;
