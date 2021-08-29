import React from 'react';
import { useSelector } from 'react-redux';

const Input = () => {

    const store = useSelector(state=> state);
    const dispaly = useSelector(state => state.dispaly)

    const warning = 'input too long'

    return (
        <>

            <div className="Status_div">
                <div className="">{store.firstNum}</div>
                <div className=""></div>
                <div className="">{store.operator }</div>
            </div>
            <div className="display_number">
                {dispaly.length < 10 ? dispaly : warning}
            </div>



        </>
    );
};

export default Input;