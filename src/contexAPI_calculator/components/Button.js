import React, { useContext } from 'react';
import { calculation } from '../Context';

const Button = ({ children }) => {

    const {dispatch} = useContext(calculation)

    return (
        <button onClick={()=>dispatch(children)} className='rounded key'>
            {children}
        </button>
    );
};

export default Button;