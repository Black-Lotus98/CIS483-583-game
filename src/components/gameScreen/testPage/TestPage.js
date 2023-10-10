import React, { Fragment } from 'react'

const TestPage = (props) => {
    return (
        <Fragment>
            <div className='header'>
                <button className='Start-btn' onClick={props.changeToIntroPage} >Go Back</button>
                <button className='Start-btn' onClick={props.changeToTaxes} >Go Taxes</button>
            </div>
        </Fragment>
    )
}

export default TestPage