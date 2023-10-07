import React, { Fragment } from "react";
import "./mainMenu.css";

const MainMenu = (props) => {
  return (
    <Fragment>
      <div className="report">
        {/* todo: Figure out x, y, z */}
        <h3>Big Alien Mafia Gangster Boss</h3>
        <span>Human Beings ate x% of your food!</span>
        <span>y Weather z Harvest</span>
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
        <p>
          Press Zero To continue Or Number Of Transactions If You Wish To Buy Or
          Sell
        </p>
      </div>
      <div className="options">
        <div className="option-1">
          <button className="option-btn" onClick={props.onChangeToGrains}>
            Grain Market
          </button>
        </div>
        <div className="option-2">
          <button className="option-btn" onClick={props.onChangeToRealEstate}>
            Land Office
          </button>
        </div>
      </div>

      {/*  <div className="MainMenuScreen">
            <button className='Start-btn' onClick={props.changeToTestPage} >Start</button>
        </div> */}
    </Fragment>
  );
};

export default MainMenu;
