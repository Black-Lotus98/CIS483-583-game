import React, { Fragment, useState, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const MeatRelease = (props) => {

  const [gameData, setGameData] = useContext(GameDataContext);
  const [inputValue, setInputValue] = useState(0);

  const releasedAmount = parseInt(inputValue);

  let meatDemand = gameData.meat_demand;


  let alienPopulation = gameData.alienPopulation;
  let meat = gameData.meat;
  let birthRate = 0.02;
  let deathRate = 0.01;

  let BirthsAndDeaths = 0;

  let minnRelease = meat * 0.2;
  let maxRelease = meat * 0.8;
  console.log('condition 1', meatDemand * 0.1 + minnRelease)
  console.log('condition 2', meatDemand * 0.2 + minnRelease)
  console.log('condition 3', meatDemand * 0.3 + minnRelease)
  console.log('condition 4', meatDemand * 0.4 + minnRelease)



  console.log('condition 6', meatDemand * 1.2)
  console.log('condition 7', meatDemand * 1.4)
  console.log('condition 8', meatDemand * 1.6)

  function adjustDeathsAndBirths() {
    if ((releasedAmount < meatDemand * 0.1 + minnRelease)) {
      deathRate = 0.05;
      birthRate = 0.01;
    }
    else if ((releasedAmount < meatDemand * 0.2 + minnRelease)) {
      deathRate = 0.04;
      birthRate = 0.015;
    }
    else if ((releasedAmount < meatDemand * 0.3 + minnRelease)) {
      deathRate = 0.03;
      birthRate = 0.02;
    }
    else if ((releasedAmount < meatDemand * 0.4 + minnRelease)) {
      deathRate = 0.02;
      birthRate = 0.03;
    }
    else if ((releasedAmount >= meatDemand * 1.2) && (releasedAmount < meatDemand * 1.4)) {
      birthRate = 0.03
      deathRate = 0.015;
    }
    else if ((releasedAmount >= meatDemand * 1.4) && (releasedAmount < meatDemand * 1.6)) {
      birthRate = 0.04;
      deathRate = 0.02;
    }
    else if ((releasedAmount >= meatDemand * 1.6) && (releasedAmount < maxRelease)) {
      birthRate = 0.05;
      deathRate = 0.03;
    }
    else {
      console.log('condition 5', meatDemand)
      birthRate = 0.02;
      deathRate = 0.01;
    }
    BirthsAndDeaths = alienPopulation * (birthRate - deathRate);

    setGameData({
      ...gameData,
      numberOfBirths: birthRate * alienPopulation,
      numberOfDeaths: deathRate * alienPopulation,
      birthRate: birthRate,
      alienPopulation: alienPopulation + BirthsAndDeaths,
    })

  }

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