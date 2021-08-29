import React, { useContext } from 'react';
import { calculation } from '../Context';


const Input = () => {

    const {state} = useContext(calculation);
    console.log(state);

    return (
        <input value={state.display} type="text" />
    );
};

export default Input;