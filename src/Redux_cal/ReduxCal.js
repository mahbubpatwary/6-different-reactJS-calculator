import React from 'react';
import ReduxCalculator from './components/ReduxCalculator';
import Redux from './redux/redux';
import './reduxCal.css'

const ReduxCal = () => {
    return (
        <>
            <div className="col-lg-6">
                <Redux>
                    <div className="redux_cal rounded border">
                    redux calculator

                        <ReduxCalculator></ReduxCalculator>

                    </div>

                </Redux>


            </div>

        </>
    );
};

export default ReduxCal;