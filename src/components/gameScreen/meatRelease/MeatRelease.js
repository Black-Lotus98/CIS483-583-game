import React, { Fragment, useState, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const MeatRelease = (props) => {

  const [gameData, setGameData] = useContext(GameDataContext);
  const [inputValue, setInputValue] = useState(0);

  const releasedAmount = parseInt(inputValue);
  let alienPopulation = gameData.alienPopulation;

  let births = alienPopulation * gameData.birthRate;
  births = Math.floor(births);

  let deaths = alienPopulation * gameData.deathRate;
  deaths = Math.floor(deaths);

  // Random chance of famine 
  let famineChance = 0.1;

  if (Math.random() < famineChance) {
    gameData.famine = true;
  }

  if (releasedAmount < gameData.meat_demand) {
    gameData.famine = true;
  }

  let festivalChance = 0.2;

  if (Math.random() < festivalChance) {
    gameData.festival = true;
  }

  // On key years 
  if (gameData.year % 10 === 0) {
    gameData.festival = true;
  }


  gameData.alienPopulation = alienPopulation + births - deaths;
  console.log('gameData.alienPopulation', gameData.alienPopulation)


  const adjustDeathsAndBirths = () => {
    if (releasedAmount < gameData.meat * 0.1) {
      // Increase deaths and decrease births
      setGameData({
        ...gameData,
        numberOfDeaths: gameData.meat * gameData.deathRate,
        numberOfBirths: gameData.meat * gameData.birthRate,
        meat: gameData.meat - releasedAmount
      });
    } else if (releasedAmount > gameData.meat * 0.1) {
      // Decrease deaths and increase births
      setGameData({
        ...gameData,
        numberOfDeaths: gameData.meat * gameData.deathRate,
        numberOfBirths: gameData.meat * gameData.birthRate,
        meat: gameData.meat - releasedAmount
      });
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const meatReleaseCheck = (value) => {
    if ((value >= gameData.meat * 0.2) && (value <= gameData.meat * 0.8)) {
      return true;
    }
    return false;
  }

  return (
    <Fragment>
      <div className='invader'>Lord Invader </div>

      <div className="text">You have {gameData.meat} kg of Meat
        Meat demand is {gameData.meat_demand} kg How much meat will you release for consumption knowing that you must keep at least 20% of your reserves  </div>
      <div className="input">
        <input type="number" className="input-text" value={releasedAmount} onChange={handleInputChange} />
      </div>
      <div className="meatRelease" >
        {meatReleaseCheck(inputValue) ? (
          <button className='continue-btn' onClick={() => { adjustDeathsAndBirths(); props.changeToBirthsAndDeaths(); }}>
            Continue
          </button>)
          : ("Please Enter the correct amount")}
      </div>
    </Fragment>

  )
}

export default MeatRelease