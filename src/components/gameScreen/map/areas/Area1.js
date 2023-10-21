import React from 'react'

const Area1 = (props) => {
    console.log('props.areaIsExpanded', props.areaIsExpanded)
    return (
        <div className='map-area map-area-1'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents north_america' style={{ opacity: props.opacity }}>
                </div>
            ) : ("North America is not expanded")}
        </div>
    )
}

export default Area1