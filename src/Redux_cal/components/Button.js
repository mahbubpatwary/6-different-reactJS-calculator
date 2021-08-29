import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({handleClick , children, className}) => {
    const dispatch = useDispatch()



    return (
        <div className={className} onClick={()=>dispatch(handleClick(children))} >
            {children}
        </div>
    );
};

export default Button;