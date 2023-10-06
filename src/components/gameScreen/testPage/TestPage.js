import React, { Fragment } from 'react'

const TestPage = (props) => {
    return (
        <Fragment>
            <div className='header'>
                <button className='Start-btn' onClick={props.changeToIntroPage} >Go Back</button>
            </div>
        </Fragment>
    )
}

export default TestPage