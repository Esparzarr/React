import React from 'react'
import { useCounter } from '../hooks/useCounter';
import '../02-useEffect/effects.css';


export const Memohook = () => {

    const { counter, increment } = useCounter(5000);
    const { show, setShow } = useCounter(true);

    const procesopedado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log("ahi vamos...");
        }

        return `${iteraciones} iteraciones realizadoas`;
    }

    return (
        <div>
            <h1>Memohook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{procesopedado(counter)}</p>
            <button onClick={increment}>
                +1
            </button>

            <button onClick={() => {
                setShow(!show);
            }}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
