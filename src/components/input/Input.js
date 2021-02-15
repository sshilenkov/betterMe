import React from 'react';
import './Input.sass';

const SearchInput = ({ placeholder, type, onSubmit, onChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                className='input'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            <input type='submit' value='Send' />
        </form>
    );
}

export default SearchInput;