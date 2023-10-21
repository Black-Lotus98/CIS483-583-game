import React, { useContext } from 'react'
import { GameDataContext } from "../../../../gameDataContext/GameDataContext";


const Area1 = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);

    let opacity = gameData.south_america;

    return (
        <div className='map-area map-area-1'>
            {props.areaIsExpanded ? (
                <div className='south_america' style={{ opacity: opacity }}>
                    
                </div>
            
            ) : ("Area 1 is not expanded")}
        </div>
    )
}

export default Area1