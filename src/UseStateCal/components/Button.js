import React from 'react';
import './button.css'

const Button = (props) => {

   var isOperator = val =>{
        return !isNaN(val) || val === '.' || val === '=';
    }
    return (
        <div onClick={()=>props.handleClick(props.children)} className={`button ${isOperator(props.children) ? '': 'operator'}`}>
            {props.children}
        </div>
    );
};

export default Button;