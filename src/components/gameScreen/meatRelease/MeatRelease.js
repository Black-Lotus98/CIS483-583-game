import React, { Fragment, useState, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const MeatRelease = (props) => {

    const [gameData, setGameData] = useContext(GameDataContext);
    const adjustDeathsAndBirths = () => {
      if (gameData.inputText < gameData.meat * 0.1) {
        // Increase deaths and decrease births
        setGameData({
          ...gameData,
          numberOfDeaths:  gameData.meat * gameData.deathRate,
          numberOfBirths:   gameData.meat * gameData.birthRate,
        });
      } else if (gameData.inputText > gameData.meat * 0.1) {
        // Decrease deaths and increase births
        setGameData({
          ...gameData,
          numberOfDeaths: gameData.meat * gameData.deathRate ,
          numberOfBirths:  gameData.meat * gameData.birthRate,
        });
      }
    };
 
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setGameData({
        ...gameData,
        inputText: inputValue 
      });
     

    };

    return (
        <Fragment>
            <div id='content'>
                <p id='name'>Dear Owner of Santa Paravia</p>

                <p id="text">You have {gameData.meat} kg of Meat<br />
                    Meat demand is {gameData.meat_demand} kg <br /> How much meat will you release for consumption knowing that you must keep at least 20% of your reserves  </p>
                <div id="input">
                    <input
                   type="number"
                   id="input-text"
                   value={gameData.inputText}
                   onChange={handleInputChange}
                    />
                  {(gameData.inputText < gameData.meat * 0.2) && (
  <button className='continue-btn' onClick={() => {
    adjustDeathsAndBirths();
    props.changeToBirthsAndDeaths();
  }}>
    Continue
  </button>
)}
                </div>
            </div>

        </Fragment>
        
    )
}

export default MeatRelease