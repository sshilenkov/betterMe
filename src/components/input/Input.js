import React from 'react';
import './Input.sass';

const SearchInput = ({ placeholder, type, submit }) => {
    return (
        <form onSubmit={submit}>
            <input
                className='input'
                type={type}
                placeholder={placeholder}
            />
            <input type='submit' value='Send' />
        </form>
    );
}

export default SearchInput;