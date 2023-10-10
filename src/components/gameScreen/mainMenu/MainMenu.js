import React, { Fragment } from "react";

const MainMenu = (props) => {

  return (
    <Fragment>
      <div className="report">
        {/* todo: Figure out x, y, z */}
        <h3>Big Alien Mafia Gangster Boss</h3>
        <h4>Human Beings ate x% of your food!</h4>
        <h5>y Weather z Harvest</h5>
      </div>
      <div className="stats">
        {/* todo: numbers must be defined */}
        <div className="grains d-stats-flex">
          <span>Grains Reserve</span>
          <span>number</span>
          <span>Bushels</span>
        </div>
        <div className="grain-demand d-stats-flex">
          <span>Grains Demand</span>
          <span>number</span>
          <span>Bushels</span>
        </div>
        <div className="grain-price d-stats-flex">
          <span>Price of Grain</span>
          <span>number1</span>
          <span>number2 st</span>
        </div>
        <div className="land-price d-stats-flex">
          <span>Price Of Land</span>
          <span>number</span>
          <span>Acre</span>
        </div>
        <div className="treasury-gold d-stats-flex">
          <span>Treasury Gold</span>
          <span>number</span>
          <span>Florins</span>
        </div>
      </div>
      <div className="instructions">
        Use the buttons below if you wish to buy or Sell grains and lands
      </div>
      <div className="options">
        <div className="option-1">
          <button className="option-btn" onClick={props.changeToMeanPage}>
            Meat Market
          </button>
        </div>
        <div className="option-2">
          <button className="option-btn" onClick={props.changeToCountryPage}>
            Invaded Countries
          </button>
        </div>
      </div>

      <div className="nextScreen">
        <button className='continue-btn' onClick={props.changeToMeatRelease} >
          Continue
        </button>
      </div>

    </Fragment>

  );
};

export default MainMenu;
