import React from 'react'

const Area8 = (props) => {
    return (

        <div className='map-area map-area-8'>
            {props.areaIsExpanded ? (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g>
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2zm5.5 10a4.5 4.5 0 0 0-4.475 4.975 4.5 4.5 0 0 0 4.95-4.95A4.552 4.552 0 0 0 17.5 12zm-11 0c-.16 0-.319.008-.475.025a4.5 4.5 0 0 0 4.95 4.95A4.5 4.5 0 0 0 6.5 12z"></path></g>
                </svg>
            ) : ("Area 3 is not expanded")}
        </div>
    )
}

export default Area8