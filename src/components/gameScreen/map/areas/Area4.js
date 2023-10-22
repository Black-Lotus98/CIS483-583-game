import React from 'react'

const Area4 = (props) => {
    return (
        <div className='map-area map-area-4'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents south_america' style={{ opacity: props.opacity }}></div>
            ) : ("South America is not expanded")}
        </div>

    )
}

export default Area4