import React from 'react'

const Area2 = (props) => {
    return (
        <div className='map-area map-area-2'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents europe' style={{ opacity: props.opacity }}></div>
            ) : ("Europa is not expanded")}
        </div>
    )
}

export default Area2