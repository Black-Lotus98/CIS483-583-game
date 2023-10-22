import React, { Fragment } from 'react'

const LevelUp = (props) => {
   
    // TODO: levels are needed
    
    return (
        <Fragment>
            <div className = 'Level-up'>
                <h2>Yo G, You leveled up to Mafia Gangster big Cobra Tattoo Boss</h2>
                <button className='continue-btn' onClick={props.changeToTestPage} >
                    Continue
                </button>
            </div>
        </Fragment>
    )
}

export default LevelUp;