import React, { Fragment,useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";



const BirthAndDeaths = (props) => { 
      
        const [gameData, setGameData] = useContext(GameDataContext);

            

            return (
              <Fragment>
                <div className='cont'>

                
                  <div className='myDiv'>
                  <p id='name'>Dear Owner of Santa Paravia</p>
                
      
                  <p>{gameData.numberOfBirths} humans were born this year </p>
                  <p> {gameData.numberOfDeaths} humans died this year </p>
                 
      
      
      
                  </div>
                  <div>

                  <button className='continue-btn' onClick={props.changeToScientistReport}>
                    Continue 
                  </button>
                  </div>
                  </div>
              </Fragment>
      
          )
  
  };


  


export default BirthAndDeaths