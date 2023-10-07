import React, { useState } from 'react'
import './gameScreen.css'
import IntroPage from './introPage/IntroPage'
import TestPage from './testPage/TestPage';
import MainMenu from './mainMenu/MainMenu';


const GameScreen = (props) => {
    const [currentScreen, setCurrentScreen] = useState('intro');

    const changeToTestPage = () => {
        setCurrentScreen('test');
    }

    const changeToIntroPage = () => {
        setCurrentScreen('intro');
    }
   
    const changeToMainMenu = () => {
        setCurrentScreen('mainPage');
    }
    

    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <TestPage changeToIntroPage={changeToIntroPage} />;
            break;
        case 'mainPage':
            renderedScreen = <MainMenu changeToTestPage={changeToTestPage}  />;
            break;
        default:
            renderedScreen = <IntroPage changeToMainMenu={changeToMainMenu} />;

    }
    return (
        <div className="gameGridScreen">
            {renderedScreen}
        </div>
    )
}

export default GameScreen