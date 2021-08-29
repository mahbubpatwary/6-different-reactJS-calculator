import Button  from './Button';
import React from 'react';
import Input from './Input';
import { cAction, equalAction, numberAction, operatorAction, zeroAction } from '../redux/action/acton';

const ReduxCalculator = () => {

    const keys = ['C', '0', '/', '*',  '1', '2', '3', '+', '4', '5', '6', '-', '7', '8',
    '9',  '='];
    let length = 0;

    const keyLength = ()=>{
        
        const item = keys[length];
        length++;
        return item;
    }


    return (
        <div>
           <div className="redux_input border">
                <Input></Input>
           </div>
           <br />
           <div className="redux_keys">
               <Button handleClick={cAction} className='c text-white' >{keyLength()}</Button>
               <Button handleClick={zeroAction} className='bg-dark text-light'>{keyLength()}</Button>
               <Button handleClick={operatorAction} className=' bg-warning' >{keyLength()}</Button>
               <Button handleClick={operatorAction} className=' bg-warning' >{keyLength()}</Button>
              
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={operatorAction} className=' bg-warning' >{keyLength()}</Button>

               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={operatorAction} className=' bg-warning' >{keyLength()}</Button>


               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={numberAction} >{keyLength()}</Button>
               <Button handleClick={equalAction} className=' bg-warning' >{keyLength()}</Button>


             


           </div>
            
        </div>
    );
};

export default ReduxCalculator;