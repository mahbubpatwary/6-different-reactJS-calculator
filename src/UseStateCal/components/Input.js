import React from 'react';
import './input.css'

const Input = (props) => {
    return (
        <div className='stateCal_input'>
            {props.children}
        </div>
    );
};

export default Input;