import React, { Fragment,useContext, useState } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";



const BirthAndDeaths = (props) => { 
      
        const [gameData, setGameData] = useContext(GameDataContext);

            

            return (
              <Fragment>
                  <div className='myDiv'>
      
      
             
                  <p>Deaths: {gameData.numberOfDeaths}</p>
                  <p>Births: {gameData.numberOfBirths}</p>
                  <p>Births: {gameData.inputText}</p>
      
      
                  <button className='continue-btn' onClick={props.changeToScientistReport}>
                    Continue 
                  </button>
      
                  </div>
              </Fragment>
      
          )
  
  };


  


export default BirthAndDeaths