import React, { useState } from 'react'
import './gameScreen.css'
import IntroPage from './introPage/IntroPage'
import TestPage from './testPage/TestPage';
import MainMenu from './mainMenu/MainMenu';
import Grains from './mainMenu/grains/Grains';
import RealEstate from './mainMenu/realEstate/RealEstate';


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

    const changeToLandsPage = () => {
        setCurrentScreen('lands');
    }

    const changeToGrainsPage = () => {
        setCurrentScreen('grains');
    }


    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <TestPage changeToIntroPage={changeToIntroPage} />;
            break;
        case 'mainPage':
            renderedScreen = <MainMenu changeToTestPage={changeToTestPage} changeToLandsPage={changeToLandsPage} changeToGrainsPage={changeToGrainsPage} />;
            break;
        case 'grains':
            renderedScreen = <Grains changeToMainMenu={changeToMainMenu} />;
            break;
        case 'lands':
            renderedScreen = <RealEstate changeToMainMenu={changeToMainMenu} />;
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