import React from 'react'

const Area3 = (props) => {
    return (
        <div className='map-area map-area-3'>
            {props.areaIsExpanded > 0 ? (
                <div className='continents asia' style={{ opacity: props.opacity }}></div>
            ) : ("Asia is not expanded")}
        </div >
    )
}

export default Area3