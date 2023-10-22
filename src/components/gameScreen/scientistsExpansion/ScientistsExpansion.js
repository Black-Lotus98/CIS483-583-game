import React, { useContext } from 'react'

import { GameDataContext } from '../../../gameDataContext/GameDataContext';

const ScientistsExpansion = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);

    let xeno_matter = gameData.xeno_matter;
    let scientists = gameData.scientists;

    const handleScientist = () => {
        if (gameData.xeno_matter > 500) {

            setGameData({
                ...gameData,
                scientists: scientists + 20,
                xeno_matter: xeno_matter - 500
            });
            console.log(gameData.scientists);
        }
        else {
            alert("You do not have enough xeno matter to hire more scientists");
        }
    }



    return (
        <div className='scientists-expansion-container'>
            <div className='scientists-expansion'>
                <h1> Would you like to hire more scientists?</h1>
                <h3>If yes press on the button below to hire 20 more scientists</h3>

                <div>You have {gameData.xeno_matter} xeno matter and {gameData.scientists} scientists</div>

                <button className='continue-btn' onClick={handleScientist}> Hire </button>
                <button className='continue-btn' onClick={props.changeToReport}> Exit </button>
            </div>
        </div >
    )
}

export default ScientistsExpansion