import React, { Fragment } from 'react'
import './introPage.css'

const IntroPage = (props) => {


    return (
        <Fragment>
            <div className='header'>
                <h1>Space Invaders</h1>
            </div>
            <div className='credits'>
                <div className='col-1'>
                    <h3>Credits</h3>
                    <p>Re Produced By:</p>
                    <p>Developed Using:</p>
                </div>
                <div className='col-2'>
                    <p>Team Whoever</p>
                    <p>React JS</p>
                </div>
                <div className='col-3'>
                    <button className='Start-btn' onClick={props.onChangeToTestPage} >Start</button>
                </div>

            </div>
        </Fragment>

    )
}

export default IntroPage