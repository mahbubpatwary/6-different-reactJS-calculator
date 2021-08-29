import React from 'react';
import './clearBtn.css';

function ClearBtn(props) {
    return (
        <div onClick={props.handleClick} className='clear-btn'>
            {props.children}
        </div>
    );
}

export default ClearBtn;