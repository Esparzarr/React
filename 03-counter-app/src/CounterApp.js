import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({   value }) => {
    return (
        <>
            <h1>CounterApp </h1>
            <p>{ value }</p>
        </>
    );
}

CounterApp.propTypes = {
    CounterApp: PropTypes.string,
    value: PropTypes.number
}


export default CounterApp;
