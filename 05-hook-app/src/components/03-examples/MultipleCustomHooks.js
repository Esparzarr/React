import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];


    return (
        <div>
            <h1>BreakingBads Quates!</h1>
            <hr />

            {
                loading
                    ?
                    (

                        <div>
                            Loading...
                        </div>
                    )

                    :

                    (

                        <blockquote>
                            <p>{quote}</p>
                            <footer>{author}</footer>
                        </blockquote>
                    )
            }

            <button onClick={increment}>
                Siguiente quote
            </button>


        </div>
    )
}
