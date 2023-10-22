import React, { useState, useContext } from 'react'

import Area1 from './areas/Area1';
import Area2 from './areas/Area2';
import Area3 from './areas/Area3';
import Area4 from './areas/Area4';
import Area5 from './areas/Area5';
import Area6 from './areas/Area6';
import Area7 from './areas/Area7';
import Area8 from './areas/Area8';
import Area9 from './areas/Area9';
import { GameDataContext } from '../../../gameDataContext/GameDataContext';


const Map = (props) => {


    const [gameData, setGameData] = useContext(GameDataContext);
    const [area1IsExpanded, setArea1IsExpanded] = useState(gameData.north_america);
    const [area2IsExpanded, setArea2IsExpanded] = useState(gameData.europe);
    const [area3IsExpanded, setArea3IsExpanded] = useState(gameData.asia);
    const [area4IsExpanded, setArea4IsExpanded] = useState(gameData.south_america);
    const [area5IsExpanded, setArea5IsExpanded] = useState(gameData.africa);
    const [area6IsExpanded, setArea6IsExpanded] = useState(true);
    const [area7IsExpanded, setArea7IsExpanded] = useState(true);
    const [area8IsExpanded, setArea8IsExpanded] = useState(gameData.oceania);
    const [area9IsExpanded, setArea9IsExpanded] = useState(gameData.antarctica);


    // const handleArea1Expand = () => {
    //     setArea1IsExpanded(!area1IsExpanded);
    // }
    const handleArea2Expand = () => {
        setArea2IsExpanded(!area2IsExpanded);
    }
    const handleArea3Expand = () => {
        setArea3IsExpanded(!area3IsExpanded);
    }
    const handleArea4Expand = () => {
        setArea4IsExpanded(!area4IsExpanded);
    }
    const handleArea5Expand = () => {
        setArea5IsExpanded(!area5IsExpanded);
    }
    const handleArea6Expand = () => {
        setArea6IsExpanded(!area6IsExpanded);
    }
    const handleArea7Expand = () => {
        setArea7IsExpanded(!area7IsExpanded);
    }
    const handleArea8Expand = () => {
        setArea8IsExpanded(!area8IsExpanded);
    }
    const handleArea9Expand = () => {
        setArea9IsExpanded(!area9IsExpanded);
    }
    return (
        <div className='map-container'>

            <Area1 areaIsExpanded={area1IsExpanded} opacity={gameData.north_america} />
            <Area2 areaIsExpanded={area2IsExpanded} opacity={gameData.europe} />
            <Area3 areaIsExpanded={area3IsExpanded} opacity={gameData.asia} />
            <Area4 areaIsExpanded={area4IsExpanded} opacity={gameData.south_america} />
            <Area5 areaIsExpanded={area5IsExpanded} opacity={gameData.africa} />
            <Area6 areaIsExpanded={area6IsExpanded} />
            <Area7 areaIsExpanded={area7IsExpanded} />
            <Area8 areaIsExpanded={area8IsExpanded} opacity={gameData.oceania} />
            <Area9 areaIsExpanded={area9IsExpanded} opacity={gameData.antarctica} />

            <div className='command-area'>
                <button className='continue-btn' onClick={props.changeToMapExpansion}> Continue </button>
            </div>
        </div>
    )
}

export default Map