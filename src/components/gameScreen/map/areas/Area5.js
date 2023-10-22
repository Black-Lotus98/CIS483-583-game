import React from 'react'

const Area5 = (props) => {
    return (
        <div className='map-area map-area-5'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents africa' style={{ opacity: props.opacity }}></div>
            ) : ("Africa is not expanded")}
        </div>
    )
}

export default Area5