import React from 'react'

export const Hijo = React.memo(({numero, incrementar}) => {

    console.log("Me volvi a generar :( ");


    return (
        <button onClick={() =>  incrementar(numero)}>
            {numero}
        </button>
    )
})
