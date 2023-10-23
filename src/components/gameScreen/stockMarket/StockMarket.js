import React, { Fragment, useContext, useState } from 'react'
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const StockMarket = (props) => {

    const [gameData, setGameData] = useContext(GameDataContext);
    const [buyStock, setBuyStock] = useState(false);
    const [inputValue, setInputValue] = useState(0);

    let stockPrice = gameData.stock_price;


    const setBuyStockState = () => {
        setBuyStock(!buyStock);
    }


    const updateStock = () => {
        const StockAmount = parseFloat(inputValue);
        let xenoAmount = gameData.xeno_matter;
        let updatedStock = 0;

        if (buyStock) {
            if (stockPrice * StockAmount > xenoAmount) {
                alert('You do not have enough xeno matter to buy that much Stock');
                return;
            }
            else {
                updatedStock = gameData.owned_stocks + StockAmount;
                xenoAmount -= stockPrice * StockAmount;
            }

        } else if (gameData.owned_stocks <= 0) {
            alert('You do not have enough stocks to sell');
        }
        else {
            updatedStock = gameData.owned_stocks - StockAmount;
            xenoAmount += stockPrice * StockAmount;
        }

        setGameData({
            ...gameData,
            owned_stocks: updatedStock,
            xeno_matter: xenoAmount
        });
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }


    return (
        <Fragment>
            <div className='stockMarket'>
            </div>
            <div className='marketActions'>
                <div>You have {parseInt(gameData.xeno_matter)} xeno matter and you have {gameData.owned_stocks} Stock</div>
                <div>
                    <div>
                        Stock price is {stockPrice.toFixed(0)} per stock.
                    </div>
                    <div>
                        <label> Buy Stock: </label>
                        <input type='radio' checked={buyStock ? "checked" : ""} id='stockCheckbox' name="Stock" onChange={setBuyStockState} />
                        <label> Sell Stock: </label>
                        <input type='radio' checked={!buyStock ? "checked" : ""} id='stockCheckbox' name="Stock" onChange={setBuyStockState} />

                    </div>
                </div>
                <div className='marketBtns'>
                    <input type="number" id="StockAmount" value={inputValue} onChange={handleInputChange} />
                    {buyStock ? <button onClick={updateStock}> Buy Stock</button> : <button onClick={updateStock}> Sell Stock</button>}
                    <button onClick={props.changeToMainMenu} >Exit</button>
                </div>

            </div>
        </Fragment >

    )

}

export default StockMarket