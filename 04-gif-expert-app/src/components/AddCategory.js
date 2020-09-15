import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue( e.target.value );
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( catego => [inputValue, ...catego ]);
            setinputValue('');
        }
    }

    return (

        <form onSubmit={ hanldeSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
