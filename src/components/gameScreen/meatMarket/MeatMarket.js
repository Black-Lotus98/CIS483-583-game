import React, { Fragment, useContext, useState } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const MeatMarket = (props) => {

    const [gameData, setGameData] = useContext(GameDataContext);
    const [buyMeat, setBuyMeat] = useState(false);
    const [inputValue, setInputValue] = useState(0);


    const setBuyMeatState = () => {
        setBuyMeat(!buyMeat);
    }


    const updateMeat = () => {
        console.log('I am in the update meat function')
        const meatAmount = parseFloat(inputValue); // Parse the input value as a number
        let xenoAmount = gameData.xeno_matter;
        let updatedMeat = 0;

        if (buyMeat) {
            if (gameData.meat_price * meatAmount / 1000 > xenoAmount) {
                alert('You do not have enough xeno matter to buy that much meat');
                return;
            }
            else {
                updatedMeat = gameData.meat + meatAmount;
                xenoAmount -= gameData.meat_price * meatAmount / 1000;
            }
        } else {
            updatedMeat = gameData.meat - meatAmount;
            xenoAmount += gameData.meat_price * meatAmount / 1000;

        }

        setGameData({
            ...gameData,
            meat: updatedMeat,
            xeno_matter: xenoAmount
        });
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }


    return (
        <Fragment>
            <div className='meatMarket'>
            </div>
            <div className='marketActions'>
                <div>You have {parseInt(gameData.xeno_matter)} xeno matter and you have {gameData.meat} meat</div>
                <div>
                    <div>
                        Meat price is {parseFloat(gameData.meat_price)} per 1000 Kgs.
                    </div>
                    <div>
                        <label> Buy Meat: </label>
                        <input type='radio' checked={buyMeat ? "checked" : ""} id='meatCheckbox' name="meat" onChange={setBuyMeatState} />
                        <label> Sell Meat: </label>
                        <input type='radio' checked={!buyMeat ? "checked" : ""} id='meatCheckbox' name="meat" onChange={setBuyMeatState} />

                    </div>
                </div>
                <div className='marketBtns'>
                    <input type="number" id="meatAmount" value={inputValue} onChange={handleInputChange} />
                    {buyMeat ? <button onClick={updateMeat}> Buy Meat</button> : <button onClick={updateMeat}> Sell Meat</button>}
                    <button onClick={props.changeToMainMenu} >Exit</button>
                </div>

            </div>
        </Fragment >

    )
}

export default MeatMarket