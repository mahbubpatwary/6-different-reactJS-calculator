import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import JsCalculator from './jsCalculator/JsCalculator';

import UseStateCal from './UseStateCal/UseStateCal';

import ReducerCalculator from './reducerCalculator/ReducerCalculator';

import ContexCal from './contexAPI_calculator/ContexCal';

import ReduxCal from './Redux_cal/ReduxCal';
import TypescriptCal from './typescriptCalculator/TypescriptCal';


function App(props) {
  return (
    <div className='container'>
      <h2 className='text-center '>six different reactJS calculator</h2>
      <hr /><br /><br />
      <div className="row d-flex">
        <JsCalculator></JsCalculator>


        <UseStateCal></UseStateCal>

      </div>
      <div className="row">
        <ReducerCalculator></ReducerCalculator>

        <ContexCal></ContexCal>

      </div>

      <div className="row">
        <ReduxCal></ReduxCal>
      <TypescriptCal></TypescriptCal>
      </div>




    </div>
  );
}

export default App;