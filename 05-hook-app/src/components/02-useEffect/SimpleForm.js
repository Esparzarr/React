import React, { useState, useEffect } from 'react';
import Message from '../02-useEffect/Message';

import '../02-useEffect/effects.css';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect(() => {
        // console.log("ge")
    }, []);

    useEffect(() => {
        // console.log("formState cambio")
    }, [formState]);

    useEffect(() => {
        // console.log("email cambio")
    }, [email])

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">

                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">

                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === "123") && <Message/>}
        </>
    )
}
