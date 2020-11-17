import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

import '../05-useLayoutEffect/loyout.css';

export const Loyout = () => {

    const { counter, increment } = useCounter(1);
    const [boxSize, setboxSize] = useState({});

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        setboxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Loyout Effect</h1>
            <hr />


            <blockquote>
                <p ref={pTag}>{quote}</p>
            </blockquote>


            <button onClick={increment}>
                Siguiente quote
            </button>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>


        </div>
    )
}
