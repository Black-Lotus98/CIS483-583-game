import React, { createContext, useState, useEffect } from 'react';

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {

    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sympathizers = getRandomValue(1, 25);
    const meat = getRandomValue(15, 20) * 1000;

    const meat_demand_Percentage = getRandomValue(20, 50) / 100;
    const meat_demand = meat_demand_Percentage * meat;
    // const meat_price = basePrice * (meat_demand_Percentage / (meat * (sympathizers / 100)));

    const meat_price = 20;
    const country_power = 100;
    const treasury_gold = 75;
    const numberOfDeaths = 0;
    const numberOfBirths = 0;

    const initialState = {
        sympathizers: sympathizers,
        meat: meat,
        meat_demand: meat_demand.toFixed(0),
        meat_price: meat_price.toFixed(0),
        country_power: country_power,
        xeno_matter: 2000,
        treasury_gold: treasury_gold,
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

