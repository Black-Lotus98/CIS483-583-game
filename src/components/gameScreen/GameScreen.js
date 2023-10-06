import React, { useState } from 'react'
import './gameScreen.css'
import IntroPage from './introPage/IntroPage'
import TestPage from './testPage/TestPage';

const GameScreen = (props) => {
    const [currentScreen, setCurrentScreen] = useState('intro');

    const changeToTestPage = () => {
        setCurrentScreen('test');
    }

    const changeToIntroPage = () => {
        setCurrentScreen('intro');
    }

    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <TestPage changeToIntroPage={changeToIntroPage} />;
            break;
        default:
            renderedScreen = <IntroPage onChangeToTestPage={changeToTestPage} />;

    }
    return (
        <div className="gameGridScreen">
            {renderedScreen}
        </div>
    )
}

export default GameScreen