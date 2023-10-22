import React, { Fragment } from 'react'

const Scientists = (props) => {
   
    // logic must be replaced instead of Number
    // if you have a market, market_amount * 75 revenue 
    // Base Soldiers = 20, soldiers * 3 = dollar bills expense
    // woolen mills are weird... 
    
    return (
        <Fragment>
            <div className='Checked-report'>
                <h2>Yo G, The Scientists Took Number Dollar Bills!</h2>
                <button className='continue-btn' onClick={props.changeToTestPage} >
                    Continue
                </button>
            </div>
        </Fragment>
    )
}

export default Scientists