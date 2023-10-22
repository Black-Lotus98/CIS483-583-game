import React from 'react'

const Area9 = (props) => {
    return (
        <div className='map-area map-area-9'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents antarctica' style={{ opacity: props.opacity }}></div>
            ) : ("Antarctica is not expanded")}
        </div>
    )
}

export default Area9