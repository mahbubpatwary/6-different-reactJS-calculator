import Button from './components/Button';
import './calculator.css'
import Input from './components/Input';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';


function UseStateCal() {
  
  const [input, setInput] = useState('');
  const [proviousNumbrt, setProviousNumber] = useState('');
  const [operator, setOperator] = useState('')



  const addToInput = val => setInput(input + val);
  const addZero = (val) => input !== '' && setInput(input + val);
  const handleClear = () => setInput('');
  const addDecemal = (val) => input.indexOf('.') === -1 && setInput(input + val);


  const handleOperator = (val) => {
    setProviousNumber(input ? input : proviousNumbrt);
    setInput('');
    if (val === '+') {
      setOperator('plus')
    } else if (val === '-') {
      setOperator('subtract')
    } else if (val === '*') {
      setOperator('multipy')
    } else if (val === '/') {
      setOperator('divition')
    }
  }

  const handleEval = () => {
    const current = parseFloat(input);
    const previus = parseFloat(proviousNumbrt); 
    let total = 0;

    if (current && previus) {
      switch (operator) {
        case 'plus': total = previus + current;
          break;
        case 'subtract': total = previus - current;
          break;
        case 'multipy': total = previus * current;
          break;
        case 'divition': total = previus / current;
          break;
        default: console.log(total);
      }
     setInput(total.toString())

    } else{
      alert('enter valid number')
    }


   
  }

  return (
    <div className="col-lg-6">
      <div className="useState_cal">
        useState calculator
        <div className="cal_row">
          <Input >{input}</Input>
        </div>
        <div className="cal_row">
          <Button handleClick={addToInput} >7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={handleOperator}>/</Button>
        </div>
        <div className="cal_row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={handleOperator}>*</Button>
        </div>
        <div className="cal_row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={handleOperator}>+</Button>
        </div>
        <div className="cal_row">
          <Button handleClick={addDecemal} >.</Button>
          <Button handleClick={addZero}>0</Button>
          <Button handleClick={handleEval}>=</Button>
          <Button handleClick={handleOperator}>-</Button>
        </div>
        <div className="cal_row">
          <ClearBtn handleClick={handleClear} >Clear</ClearBtn>
        </div>
      </div>

    </div>
  );
}

export default UseStateCal;
