import React, { Fragment, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";


const BirthAndDeaths = (props) => {

  const [gameData, setGameData] = useContext(GameDataContext);



  return (
    <Fragment>
      <div className='cont'>
        <p className='name'>Dear Owner of Santa Paravia</p>
        <p>{gameData.numberOfBirths} were born this year </p>
        <p> {gameData.numberOfDeaths} died this year </p>
        <div>
          <button className='continue-btn' onClick={props.changeToTaxes}>
            Continue
          </button>
        </div>
      </div>
    </Fragment>

  )

};

export default BirthAndDeaths