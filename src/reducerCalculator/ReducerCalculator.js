import React, { useReducer } from 'react';
import './reducerCal.css'



const initial = { displayNum: '', secondNum: '', operator: '' }

const reducer = (state, action) => {


    let { displayNum, secondNum, operator } = state;
    let { playhod } = action;

    switch (action.type) {

        case 'NUMBER':
            displayNum = displayNum + playhod;
            break;

        case 'C':
            displayNum = displayNum.slice(0, -1);
            break;

        case 'DOT':
            displayNum = displayNum + playhod;
            break;

        case 'AC':
            displayNum = '';
            secondNum = ''
            operator = '';
            break;

        case 'OPERATOR':
            secondNum = displayNum;
            displayNum = '';
            operator = playhod;
            break;

        case 'EQUAL':
            switch (operator) {
                case '+':
                    displayNum = Number(secondNum) + Number(displayNum);
                    break;

                case '-':
                    displayNum = Number(secondNum) - Number(displayNum);
                    break;

                case '*':
                    displayNum = Number(secondNum) * Number(displayNum);
                    break;
                case '/':
                    displayNum = Number(secondNum) / Number(displayNum);
                    break;
                default: return state;

            }
            break
        default: return state;
    }

    const fuck = { displayNum: displayNum.toString(), secondNum: secondNum.toString(), operator }
    return { ...fuck }

}



const ReducerCalculator = () => {

    const [state, dispatch] = useReducer(reducer, initial)

    const handleBtnClick = (e) => {
        const btnType = e.target.getAttribute('btnType');
        const value = e.target.innerText;

        dispatch({ type: btnType, playhod: value })


    }



    return (
        <div className='col-lg-6'>

            <div className="reducer_cal rounded">
                useReducer calculator
                <input type="number" value={state.displayNum} disabled className='rounded reducerInput' />
                <hr />

                <div className="buttons">



                    <div onClick={handleBtnClick} className="AC btn btn-danger " btnType='AC'>AC</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='C' > C</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='OPERATOR'  >/</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER' >7</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER' >8</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER'  >9</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='OPERATOR' >*</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER' >4</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary  buttn" btnType='NUMBER'  >5</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER' > 6</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='OPERATOR' > -</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER'>1</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER'>2</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER' >3</div>

                    <div onClick={handleBtnClick} className=" btn btn-secondary  plus" btnType='OPERATOR' >+</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='DOT' >.</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='NUMBER'>0</div>
                    <div onClick={handleBtnClick} className=" btn btn-secondary buttn" btnType='EQUAL' >=</div>




                </div>


            </div>

        </div>
    );
};

export default ReducerCalculator;