import React, { Fragment } from 'react'

const Scientists = (props) => {
   
    // logic must be replaced instead of Number
    return (
        <Fragment>
           <div className='Report On Scientists'>
            <p>Yo G, The Scientists Took Number Dollar Bills</p>
            <button className='continue-btn' onClick={props.changeToTestPage} >
                Continue
            </button>
           </div>
        </Fragment>
    )
}

export default Scientists