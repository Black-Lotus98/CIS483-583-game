import React, { Fragment } from 'react'

const Scientists = (props) => {
   
    // logic must be replaced instead of Number
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