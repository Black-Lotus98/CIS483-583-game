import React, { Fragment, useContext } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const Grains = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);

    const updateMeat = () => {
        setGameData({
            ...gameData, // spreading the old data
            meat: gameData.meat + 10 // just an example, you'd use real logic here
        });
    };

    return (
        <Fragment>
            <div className='header'>
               
            </div>
            <div className='credits'>
                
                <div className='col-3'>
                    <button className='Start-btn' onClick={props.changeToMainMenu} >Start</button>
                </div>

            </div>
        </Fragment>

    )
}

export default Grains