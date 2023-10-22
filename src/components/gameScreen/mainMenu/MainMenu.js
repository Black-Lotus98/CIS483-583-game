import React, { Fragment, useContext } from "react";
import { GameDataContext } from "../../../gameDataContext/GameDataContext";
// import UserData from "./user/user-context";

const MainMenu = (props) => {
  const [gameData /*, setGameData*/] = useContext(GameDataContext);

  // const updateMeat = () => {
  //   setGameData({
  //     ...gameData, // spreading the old data
  //     meat: gameData.meat + 10 // just an example, you'd use real logic here
  //   });
  // };

  return (
    <Fragment>
      <div className="report">
        {/* todo: Figure out x, y, z */}
        <h3>Big Alien Mafia Gangster Boss</h3>
        <h4>Human saved by rebel humans {gameData.rebelHumans}% of your food!</h4>
      </div>
      <div className="stats">
        {/* todo: numbers must be defined */}
        <div className="grains d-stats-flex">
          <span>Meat Reserve</span>
          <span className="numbers">{parseInt(gameData.meat)}</span>
          <span>Container</span>
        </div>
        <div className="grain-demand d-stats-flex">
          <span>Meat Demand</span>
          <span className="numbers">{parseInt(gameData.meat_demand)}</span>
          <span>Container</span>
        </div>
        <div className="grain-price d-stats-flex">
          <span>Price of Meat</span>
          <span className="numbers">{parseFloat(gameData.meat_price)}</span>
          <span>per 1000</span>
        </div>
        <div className="land-price d-stats-flex">
          <span>Stock Price</span>
          <span className="numbers">{parseInt(gameData.country_power)}</span>
          <span>Stock</span>
        </div>
        <div className="treasury-gold d-stats-flex">
          <span>Treasury Xeno</span>
          <span className="numbers">{parseInt(gameData.xeno_matter)}</span>
          <span>xeno matter</span>
        </div>
      </div>
      <div className="instructions">
        Use the buttons below if you wish to buy or Sell grains and lands
      </div>
      <div className="options">
        <div className="option-1">
          <button className="option-btn" onClick={props.changeToMeatPage}>
            Meat Market
          </button>
        </div>
        <div className="option-2">
          <button className="option-btn" onClick={props.changeToStockPage}>
            Stock Market
          </button>
        </div>
      </div>

      <div className="nextScreen">
        <button className='continue-btn' onClick={props.changeToMeatRelease} >
          Continue
        </button>
        {/* <button onClick={updateMeat}>Update Meat</button> */}
      </div>

    </Fragment>

  );
};

export default MainMenu;
