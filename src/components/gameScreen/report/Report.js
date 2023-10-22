import React, { Fragment, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";


const Report = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let base_value = 100;

    // const initialState = {
    //     meat_demand: meat_demand.toFixed(0),
    //     meat_price: meat_price.toFixed(0),
    //     xeno_matter: 2000,
    //     scientists: 25,
    //     income_tax: 5,
    //     country_tax: 25,
    //     sales_tax: 10,
    //     numberOfDeaths: numberOfDeaths,
    //     numberOfBirths: numberOfBirths,
    //     deathRate: 0.01,
    //     birthRate: 0.02,
    //     famine: false,
    //     festival: false,
    //     south_america: 1,
    //     north_america: 1,
    //     europe: 0,
    //     asia: 0,
    //     africa: 0,
    //     oceania: 0,
    //     antarctica: 0,
    // }



    let xeno_matter = gameData.xeno_matter;
    let scientists = gameData.scientists;
    let scientists_payment = scientists * 3;
    let meat = gameData.meat - (gameData.rebelHumans * 5) + (gameData.sympathizers * 10);


    

    const handleReport = () => {
        setGameData({
            ...gameData,
            sympathizers: getRandomValue(1, 25),
            rebelHumans: getRandomValue(1, 25),
            meat: meat,
            year: gameData.year + 1,
            xeno_matter: xeno_matter - scientists_payment,
        });
    }

    return (
        <div className='Checked-report'>
            <p>Lord Invader, The Scientists Took {scientists_payment} xeno matter</p>
            <p> The Scientists Took {scientists_payment} xeno matter</p>
            <p> You gained {scientists_payment} xeno matter from invading south america</p>
            <p> You gained {scientists_payment} xeno matter from invading north america</p>
            <p> You gained {scientists_payment} xeno matter from invading europe</p>
            <p> You gained {scientists_payment} xeno matter from invading asia</p>
            <p> You gained {scientists_payment} xeno matter from invading africa</p>
            <p> You gained {scientists_payment} xeno matter from invading oceania</p>
            <p> You gained {scientists_payment} xeno matter from invading antarctica</p>
            <button className='continue-btn' onClick={props.changeToMainMenu} >
                Continue
            </button>
        </div>
    )
}

export default Report