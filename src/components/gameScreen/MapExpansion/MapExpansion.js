import React, { useContext } from 'react'

import { GameDataContext } from '../../../gameDataContext/GameDataContext';

const MapExpansion = (props) => {
    console.log('props.Map', props)

    const [gameData, setGameData] = useContext(GameDataContext);

    let europeExpansion = gameData.europe;
    let asiaExpansion = gameData.asia;
    let africaExpansion = gameData.africa;
    let oceaniaExpansion = gameData.oceania;
    let antarcticaExpansion = gameData.antarctica;
    let xeno_matter = gameData.xeno_matter;

    const handleEuropaExpansion = () => {
        if (europeExpansion < 1) {
            if (gameData.xeno_matter > 2000) {

                setGameData(
                    {
                        ...gameData,
                        europe: europeExpansion + 0.2,
                        xeno_matter: xeno_matter - 2000
                    });
                props.changeToMap();
            }
            else {
                alert("You do not have enough xeno matter to expand Europe");
            }
        }
        else {
            alert("You have already expanded Europe");
        }
    }
    const handleAsiaExpansion = () => {

        if (asiaExpansion < 1) {
            if (gameData.xeno_matter > 4000) {
                setGameData(
                    {
                        ...gameData,
                        asia: asiaExpansion + 0.2,
                        xeno_matter: xeno_matter - 4000

                    });
                props.changeToMap();
            }
            else {
                alert("You do not have enough xeno matter to expand Asia");
            }
        }
        else {
            alert("You have already expanded Asia");
        }
    }

    const handleAfricaExpansion = () => {
        if (africaExpansion < 1) {
            if (gameData.xeno_matter > 3500) {
                setGameData(
                    {
                        ...gameData,
                        africa: africaExpansion + 0.2,
                        xeno_matter: xeno_matter - 3500
                    });
                props.changeToMap();
            }
            else {
                alert("You do not have enough xeno matter to expand Africa");
            }
        }
        else {
            alert("You have already expanded Africa");
        }
    }

    const handleOceaniaExpansion = () => {
        if (oceaniaExpansion < 1) {
            if (gameData.xeno_matter > 1500) {
                setGameData(
                    {
                        ...gameData,
                        oceania: oceaniaExpansion + 0.2,
                        xeno_matter: xeno_matter - 1500
                    });
                props.changeToMap();
            }
            else {
                alert("You do not have enough xeno matter to expand Oceania");
            }
        }
        else {
            alert("You have already expanded Oceania");
        }
    }

    const handleAntarcticaExpansion = () => {
        if (antarcticaExpansion < 1) {
            if (gameData.xeno_matter > 1000) {
                setGameData(
                    {
                        ...gameData,
                        antarctica: antarcticaExpansion + 0.2,
                        xeno_matter: xeno_matter - 1000
                    });
                props.changeToMap();
            }
            else {
                alert("You do not have enough xeno matter to expand Antarctica");
            }
        }
        else {
            alert("You have already expanded Antarctica");
        }
    }

    return (
        <div className='map-container'>
            <div className='map-area map-area-1'>
                <button className={'continents continents_btn europe'} onClick={handleEuropaExpansion}></button>
                Europa
            </div>
            <div className='map-area map-area-2'>
                Press on the continent that you want to invade
            </div>
            <div className='map-area map-area-3'>
                <button className='continents continents_btn asia' onClick={handleAsiaExpansion}></button>
                Asia
            </div >
            <div className='map-area map-area-4'>
                You need to invade the continent 5 times to expand it completely
            </div >
            <div className='map-area map-area-5'>
                <button className='continents continents_btn africa' onClick={handleAfricaExpansion} ></button>
                Africa
            </div>
            <div className='map-area map-area-6'>
                You can invade only one continent at a time
            </div>
            <div className='map-area map-area-7'>
                <button className='continents continents_btn oceania' onClick={handleOceaniaExpansion}></button>
                Oceania
            </div>
            <div className='map-area map-area-8'>
                You will spend from your money to invade a continent, and you have {gameData.xeno_matter} xeno matter
            </div>
            <div className='map-area map-area-9'>
                <button className='continents continents_btn antarctica' onClick={handleAntarcticaExpansion} ></button>
                Antarctica
            </div>

            <div className='command-area'>
                <button className='continue-btn' onClick={props.changeToScientistsExpansion}> Exit </button>
            </div>
        </div >
    )
}

export default MapExpansion