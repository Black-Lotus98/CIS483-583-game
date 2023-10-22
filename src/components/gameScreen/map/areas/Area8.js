import React from 'react'

const Area8 = (props) => {
    return (

        <div className='map-area map-area-8'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents oceania' style={{ opacity: props.opacity }}></div>
            ) : ("Oceania is not expanded")}
        </div>
    )
}

export default Area8