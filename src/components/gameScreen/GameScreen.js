import React from "react";
import IntroPage from "./introPage/IntroPage";
import TestPage from "./testPage/TestPage";
import MainMenu from "./mainMenu/MainMenu";
import MeatMarket from "./meatMarket/MeatMarket";
import StockMarket from "./stockMarket/StockMarket";
import MeatRelease from "./meatRelease/MeatRelease";
import Taxes from "./taxes/Taxes";
import Map from "./map/Map";
import Report from "./report/Report";
import BirthAndDeaths from "./BirthsAndDeaths/BirthAndDeaths";
import CurrentScreenState from '../../gameDataContext/GameScreenContext';
import MapExpansion from "./mapExpansion/MapExpansion";
import ScientistsExpansion from "./scientistsExpansion/ScientistsExpansion";


const GameScreen = (props) => {
  const [currentScreen, setCurrentScreen] = CurrentScreenState('currentScreen', 'intro');

  const changeToTestPage = () => {
    setCurrentScreen("test");
  };

  const changeToIntroPage = () => {
    setCurrentScreen("intro");
  };

  const changeToMainMenu = () => {
    setCurrentScreen("mainPage");
  };

  const changeToStockPage = () => {
    setCurrentScreen("stockMarket");
  };

  const changeToMeatPage = () => {
    setCurrentScreen("meatStore");
  };

  const changeToMeatRelease = () => {
    setCurrentScreen("meatRelease");
  };
  const changeToTaxes = () => {
    setCurrentScreen("taxes");
  };

  const changeToMap = () => {
    setCurrentScreen("map");
  };
  const changeToReport = () => {
    setCurrentScreen("report");
  };
  const changeToBirthsAndDeaths = () => {
    setCurrentScreen("birthAndDeaths");
  };
  const changeToMapExpansion = () => {
    setCurrentScreen("mapExpansion");
  };
  const changeToScientistsExpansion = () => {
    setCurrentScreen("scientistsExpansion");
  };

  let renderedScreen;
  switch (currentScreen) {
    case "test":
      renderedScreen = <TestPage changeToIntroPage={changeToIntroPage} changeToTaxes={changeToTaxes} changeToMap={changeToMap} />
      break;
    case "mainPage":
      renderedScreen = <MainMenu changeToMeatRelease={changeToMeatRelease} changeToStockPage={changeToStockPage}
        changeToMeatPage={changeToMeatPage} />
      break;
    case "meatStore":
      renderedScreen = <MeatMarket changeToMainMenu={changeToMainMenu} />;
      break;
    case "stockMarket":
      renderedScreen = <StockMarket changeToMainMenu={changeToMainMenu} />;
      break;
    case "meatRelease":
      renderedScreen = <MeatRelease changeToBirthsAndDeaths={changeToBirthsAndDeaths} />
      break;
    case "report":
      renderedScreen = <Report changeToMainMenu={changeToMainMenu} />;
      break;
    case "map":
      renderedScreen = <Map changeToMap={changeToMap} changeToMapExpansion={changeToMapExpansion} />;
      break;
    case "mapExpansion":
      renderedScreen = <MapExpansion changeToMap={changeToMap} changeToScientistsExpansion={changeToScientistsExpansion} />;
      break;
    case "scientistsExpansion":
      renderedScreen = <ScientistsExpansion changeToReport={changeToReport} />;
      break;
    case "taxes":
      renderedScreen = <Taxes changeToMap={changeToMap} />;
      break;
    case "birthAndDeaths":
      renderedScreen = <BirthAndDeaths changeToTaxes={changeToTaxes} />
      break;
    default:
      renderedScreen = <IntroPage changeToMainMenu={changeToMainMenu} />;
  }
  return <div className="gameGridScreen">{renderedScreen}</div>;
};

export default GameScreen;
