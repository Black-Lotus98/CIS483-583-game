import React, { Fragment } from 'react'
import './grains.css'

const Grains = (props) => {


    return (
        <Fragment>
            <div className='header'>
                {/* todo */}
                {/* <h1>Space Invaders</h1> */}
            </div>
            <div className='credits'>
                <div className='col-1'>
                    {/* todo */}
                    {/* <h3>Credits</h3>
                    <p>Re Produced By:</p>
                    <p>Developed Using:</p> */}
                </div>
                <div className='col-2'>
                    {/* todo */}
                    {/* <p>Team Whoever</p>
                    <p>React JS</p> */}
                </div>
                <div className='col-3'>
                    <button className='Start-btn' onClick={props.changeToMainMenu} >Start</button>
                </div>

            </div>
        </Fragment>

    )
}

export default Grains