import React from 'react'
import './gameScreen.css'
import IntroPage from './introPage/IntroPage'

const GameScreen = (props) => {
    return (
        <div className="gameGridScreen">
            {props.children}
        </div>
    )
}

export default GameScreen