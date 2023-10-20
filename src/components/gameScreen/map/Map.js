import React, { useState } from 'react'
import Area1 from './areas/Area1';
import Area2 from './areas/Area2';
import Area3 from './areas/Area3';
import Area4 from './areas/Area4';
import Area5 from './areas/Area5';
import Area6 from './areas/Area6';
import Area7 from './areas/Area7';
import Area8 from './areas/Area8';
import Area9 from './areas/Area9';

const Map = (props) => {
    const [area1IsExpanded, setArea1IsExpanded] = useState(true);
    const [area2IsExpanded, setArea2IsExpanded] = useState(true);
    const [area3IsExpanded, setArea3IsExpanded] = useState(false);
    const [area4IsExpanded, setArea4IsExpanded] = useState(false);
    const [area5IsExpanded, setArea5IsExpanded] = useState(false);
    const [area6IsExpanded, setArea6IsExpanded] = useState(true);
    const [area7IsExpanded, setArea7IsExpanded] = useState(true);
    const [area8IsExpanded, setArea8IsExpanded] = useState(true);
    const [area9IsExpanded, setArea9IsExpanded] = useState(false);

    const handleArea1Expand = () => {
        setArea1IsExpanded(!area1IsExpanded);
    }
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

            <Area1 areaIsExpanded={area1IsExpanded} />
            <Area2 areaIsExpanded={area2IsExpanded} />
            <Area3 areaIsExpanded={area3IsExpanded} />
            <Area4 areaIsExpanded={area4IsExpanded} />
            <Area5 areaIsExpanded={area5IsExpanded} />
            <Area6 areaIsExpanded={area6IsExpanded} />
            <Area7 areaIsExpanded={area7IsExpanded} />
            <Area8 areaIsExpanded={area8IsExpanded} />
            <Area9 areaIsExpanded={area9IsExpanded} />

            <div className='area1'>
                <label htmlFor="area1">Area 1</label>
                <input type="checkbox" id="area1" onChange={handleArea1Expand} />
            </div>
            <div className='area2'>
                <label htmlFor="area2">Area 2</label>
                <input type="checkbox" id="area2" onChange={handleArea2Expand} />
            </div>
            <div className='area3'>
                <label htmlFor="area3">Area 3</label>
                <input type="checkbox" id="area3" onChange={handleArea3Expand} />
            </div>
            <div className='area4'>
                <label htmlFor="area4">Area 4</label>
                <input type="checkbox" id="area4" onChange={handleArea4Expand} />
            </div >
            <div className='area5'>
                <label htmlFor="area5">Area 5</label>
                <input type="checkbox" id="area5" checked={area5IsExpanded} onChange={handleArea5Expand} />
            </div >
            <div className='area6'>
                <label htmlFor="area6">Area 6</label>
                <input type="checkbox" id="area6" onChange={handleArea6Expand} />
            </div >
            <div className='area7'>
                <label htmlFor="area7">Area 7</label>
                <input type="checkbox" id="area7" onChange={handleArea7Expand} />
            </div >
            <div className='area8'>
                <label htmlFor="area8">Area 8</label>
                <input type="checkbox" id="area8" onChange={handleArea8Expand} />
            </div >
            <div className='area9'>
                <label htmlFor="area9">Area 9</label>
                <input type="checkbox" id="area9" onChange={handleArea9Expand} />
            </div >
            <div className='command-area'>
                <button className='continue-btn' onClick={props.changeToTestPage}> Continue </button>

            </div>
        </div>
    )
}

export default Map