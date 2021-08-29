import React from 'react';
import './contex_cal.css';
import Context from './Context';
import Button from './components/Button';
import Input from './components/Input';


const ContexCal = () => {

    const keys = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8',
        '9', '*', 'C', '0', '/', '='];




    return (
        <Context>
            <div className='col-lg-6'>
                <div className="contex_cal border rounded">
                    <div className='lavel'>
                        Context API calculator
                    </div>
                    <div className='input'>
                        <Input></Input>
                    </div>
                    <div className="keys">
                        {
                            keys.map(element => <Button>{element}</Button>)
                        }

                    </div>
                </div>

            </div>
        </Context>
    );
};

export default ContexCal;