import React, { useState } from 'react'
import IntroPage from './introPage/IntroPage'
import TestPage from './testPage/TestPage';
import MainMenu from './mainMenu/MainMenu';
import MeatMarket from './meatMarket/MeatMarket';
import Countries from './countries/Countries';
import MeatRelease from './meatRelease/MeatRelease';


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

    const changeToCountryPage = () => {
        setCurrentScreen('country');
    }

    const changeToMeatPage = () => {
        setCurrentScreen('meatStore');
    }


    const changeToMeatRelease = () => {
        setCurrentScreen('meatRelease');
    }



    let renderedScreen;
    switch (currentScreen) {
        case 'test':
            renderedScreen = <TestPage changeToIntroPage={changeToIntroPage} />;
            break;
        case 'mainPage':
            renderedScreen = <MainMenu changeToMeatRelease={changeToMeatRelease} changeToCountryPage={changeToCountryPage} changeToMeatPage={changeToMeatPage} />;
            break;
        case 'meatStore':
            renderedScreen = <MeatMarket changeToMainMenu={changeToMainMenu} />;
            break;
        case 'country':
            renderedScreen = <Countries changeToMainMenu={changeToMainMenu} />;
            break;
        case 'meatRelease':
            renderedScreen = <MeatRelease changeToTestPage={changeToTestPage} />;
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