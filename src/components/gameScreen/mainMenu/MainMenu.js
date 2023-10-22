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


  const sampleData = {
    sympathizers: gameData.sympathizers,
    rebelHumans: gameData.rebelHumans,
    meat: gameData.meat,
    meat_demand: gameData.meat_demand,
    meat_price: gameData.meat_price,
    country_power: gameData.country_power,
    treasury_gold: gameData.treasury_gold,
  }

  return (
    <Fragment>
      <div className="report">
        {/* todo: Figure out x, y, z */}
        <h3>Big Alien Mafia Gangster Boss</h3>
        <h4>Human Beings sacrificed {sampleData.rebelHumans}% of your food!</h4>
        <h5>y Weather z Harvest</h5>
      </div>
      <div className="stats">
        {/* todo: numbers must be defined */}
        <div className="grains d-stats-flex">
          <span>Meat Reserve</span>
          <span className="numbers">{parseInt(sampleData.meat)}</span>
          <span>Bushels</span>
        </div>
        <div className="grain-demand d-stats-flex">
          <span>Meat Demand</span>
          <span className="numbers">{parseInt(sampleData.meat_demand)}</span>
          <span>Bushels</span>
        </div>
        <div className="grain-price d-stats-flex">
          <span>Price of Meat</span>
          <span className="numbers">{parseFloat(sampleData.meat_price)}</span>
          <span>per 1000</span>
        </div>
        <div className="land-price d-stats-flex">
          <span>Country Power</span>
          <span className="numbers">{parseInt(sampleData.country_power)}</span>
          <span>Acre</span>
        </div>
        <div className="treasury-gold d-stats-flex">
          <span>Treasury Gold</span>
          <span className="numbers">{parseInt(sampleData.treasury_gold)}</span>
          <span>Florins</span>
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
