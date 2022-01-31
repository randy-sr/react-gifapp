import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    // this let me change the value of my input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate that we do not enter a empty value
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }       
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange } // onchange abilita cambiar los valores del input
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}