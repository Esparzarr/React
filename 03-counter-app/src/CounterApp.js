import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({   value = 0}) => {

    const [ counter, setCounter ] = useState( 0 );

    //HandleAdd
    const handleAdd = (e) => { 
        // setCounter( counter + 1 );
        setCounter( (c) => counter + 1 );
    }

    const handleRes = (e) => {
        setCounter( (c) => counter - 1);
    }

    const handleRest = (e) => {
        setCounter(value);
    }
    

    return (
        <>
            <h1>CounterApp </h1>
            <p>{ counter }</p>

            <button onClick= { handleRes }>-1</button>
            <button onClick= { handleRest }>Reset</button>
            <button onClick= { handleAdd }>+1</button>
            
        </>
    );
}

CounterApp.propTypes = {
    CounterApp: PropTypes.string,
    value: PropTypes.number
}


export default CounterApp;
