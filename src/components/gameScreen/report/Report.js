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


    let north_america_payment = 200;
    let south_america_payment = 200;
    let asia_payment = gameData.europe * 2000;
    let africa_payment = gameData.europe * 1750;
    let antarctica_payment = gameData.europe * 1000;
    let oceania_payment = gameData.europe * 750;
    let europe_payment = gameData.europe * 500;

    let earnings = north_america_payment + south_america_payment + asia_payment + africa_payment + antarctica_payment + oceania_payment + europe_payment - scientists_payment;



    const handleReport = () => {
        if ((gameData.europe === 1) && (gameData.asia === 1) && (gameData.africa === 1) && (gameData.oceania === 1) && (gameData.antarctica === 1) && (gameData.south_america === 1) && (gameData.north_america === 1)) {
            alert('You have won the game press on the reset button to play again');
        }
        else {
            setGameData({
                ...gameData,
                sympathizers: getRandomValue(1, 15),
                rebelHumans: getRandomValue(1, 10),
                meat: meat,
                year: gameData.year + 1,
                xeno_matter: xeno_matter + earnings,
            });

            if (gameData.xeno_matter < 10) {
                gameData.xeno_matter = 0;
                alert('You have lost the game press on the  reset button to play again');
            }
            else {
                props.changeToMainMenu();
            }
        }

    }

    return (
        <div className='Checked-report'>
            <p>Lord Invader, The Scientists Took {scientists_payment} xeno matter</p>
            <p> The Scientists Took {scientists_payment} xeno matter</p>
            {gameData.south_america > 0 && <p> You gained {south_america_payment} xeno matter from invading south america</p>}
            {gameData.north_america > 0 && <p> You gained {north_america_payment} xeno matter from invading north america</p>}
            {gameData.europe > 0 && <p> You gained {europe_payment} xeno matter from invading europe</p>}
            {gameData.asia > 0 && <p> You gained {asia_payment} xeno matter from invading asia</p>}
            {gameData.africa > 0 && <p> You gained {africa_payment} xeno matter from invading africa</p>}
            {gameData.oceania > 0 && <p> You gained {oceania_payment} xeno matter from invading oceania</p>}
            {gameData.antarctica > 0 && <p> You gained {antarctica_payment} xeno matter from invading antarctica</p>}


            <button className='continue-btn' onClick={handleReport} >
                Continue
            </button>
        </div>
    )
}

export default Report