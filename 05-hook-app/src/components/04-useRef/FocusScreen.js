import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input ref={inputRef} placeholder="your name"/>

            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
