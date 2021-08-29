import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';


export const calculation = createContext()







const initial = { display: '', lastNum: '', operator: '' }

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initial)

    return (
        <calculation.Provider value={{ state, dispatch }}>
            {children}
        </calculation.Provider>
    );
};

export default Context;