import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const placeholderText = 'Search and Enter';
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setCategories([inputValue]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="input-box">
                <input
                    type="text" 
                    className="underlined" 
                    placeholder={ placeholderText } 
                    value={ inputValue } 
                    onChange={ handleChange } 
                />
                <span className="highlight"></span>
            </div>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;
