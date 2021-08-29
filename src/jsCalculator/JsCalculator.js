import React, { useState } from 'react';
import './index.css'

function JsCalculator(pops) {

    const [result, setResult] = useState('')


    const handleClick = (e) => {

        if (result.length <= 16) {
            setResult(result.concat(e.target.name))

        }
    }

    const handleOneceInput = (e) => {
        if (result.indexOf('+') === -1) {
            if (result.indexOf('-') === -1) {
                if (result.indexOf('*') === -1) {
                    if (result.indexOf('/') === -1) {
                        setResult(result.concat(e.target.name))
                    }
                }
            }
        }
    }

    const inputDot = (e) => {
        if (result.indexOf('.') === -1) {
            setResult(result.concat(e.target.name))
        }
    }

    const calculet = () => {
        setResult(eval(result).toString())
    }
 


    return (
        <>
            <div className="col-lg-6">
                <div className="simple_cal">
                        <p className="text-white">javascript calculator</p>
                    <form>
                        <input className='text-right input1 p-1' type="text" value={result} />
                    </form>
                    <div className="keypad">

                        <button onClick={() => setResult('')} id='clear' className=" button1 bg-info">Clear</button>
                        <button onClick={() => setResult(result.slice(0, -1))} id='backspace' className=" button1 bg-info ">C</button>
                        <button name='/' onClick={handleOneceInput} className=" button1 bg-info">&divide;</button>
                        <button name='7' onClick={handleClick} className=" button1">7</button>
                        <button name='8' onClick={handleClick} className=" button1">8</button>
                        <button name='9' onClick={handleClick} className=" button1">9</button>
                        <button name='*' onClick={handleOneceInput} className=" button1 bg-info">&times;</button>
                        <button name='4' onClick={handleClick} className=" button1">4</button>
                        <button name='5' onClick={handleClick} className=" button1">5</button>
                        <button name='6' onClick={handleClick} className=" button1">6</button>
                        <button name='-' onClick={handleOneceInput} className=" button1 bg-info">&ndash;</button>
                        <button name='1' onClick={handleClick} className=" button1">1</button>
                        <button name='2' onClick={handleClick} className=" button1">2</button>
                        <button name='3' onClick={handleClick} className=" button1">3</button>
                        <button name='+' onClick={handleOneceInput} className=" button1 bg-info">+</button>
                        <button name='0' onClick={handleClick} className=" button1">0</button>
                        <button name='.' onClick={inputDot} className=" button1">.</button>
                        <button onClick={handleClick} id='equal' onClick={calculet} className=" button1 bg-info">=</button>



                    </div>
                </div>
            </div>
        </>
    );
}

export default JsCalculator;