import React, { createContext, useState, useEffect } from 'react';

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sympathizers = getRandomValue(1, 25);
    const rebelHumans = getRandomValue(1, 25);
    const meat = getRandomValue(15, 20) * 1000;
    const base_meat_price = 20;

    const alienMeatDemand = 2;
    const meat_demand_Percentage = getRandomValue(20, 70);
    const meat_demand = meat_demand_Percentage / 100 * meat;
    const alienPopulation = meat_demand / alienMeatDemand

    let priceAdjustment = 1;

    if (meat_demand > meat) {
        priceAdjustment = 1.2; // Shortage - increase price 
    }
    let randomAdjustment = 0.9 + Math.random() * 0.2;

    let meat_price = base_meat_price * priceAdjustment * randomAdjustment;


    // const meat_price = 20;
    const numberOfDeaths = 0;
    const numberOfBirths = 0;


    const initialState = {
        alienPopulation: alienPopulation,
        sympathizers: sympathizers,
        rebelHumans: rebelHumans,
        meat: meat,
        meat_demand: meat_demand.toFixed(0),
        meat_price: meat_price.toFixed(0),
        xeno_matter: 2000,
        scientists: 25,
        income_tax: 5,
        country_tax: 25,
        sales_tax: 10,
        numberOfDeaths: numberOfDeaths,
        numberOfBirths: numberOfBirths,
        deathRate: 0.01,
        birthRate: 0.02,
        year: 1400,
        famine: false,
        festival: false,
        south_america: 1,
        north_america: 1,
        europe: 0,
        asia: 0,
        africa: 0,
        oceania: 0,
        antarctica: 0,
    }



    // Load state from local storage or set to initial state
    const [gameData, setGameData] = useState(() => {
        const localData = localStorage.getItem('gameData');
        return localData ? JSON.parse(localData) : initialState;
    });

    // Use useEffect to update local storage when gameData changes
    useEffect(() => {
        localStorage.setItem('gameData', JSON.stringify(gameData));
    }, [gameData]);

    const resetGameData = () => {
        // Reset the state to the initial values
        setGameData(initialState);
        // Clear the game data from local storage
        localStorage.removeItem('gameData');
    };

    return (
        <GameDataContext.Provider value={[gameData, setGameData, resetGameData]}>
            {children}
        </GameDataContext.Provider>
    );
};

