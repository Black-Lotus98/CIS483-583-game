import React from 'react'

const Area3 = (props) => {
    return (
        <div className='map-area map-area-3'>
            {props.areaIsExpanded ? (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M260.28 21.656c-15.214 146.58-91.146 112.617-109.75 212.906-42.198-38.566-53.434-86.512 10.814-148.937-142.44 81.374-91.17 186.01 13.312 271.813 26.894 32.327 66.16 57.977 85.625 132.78 19.467-74.803 58.734-100.452 85.626-132.78C450.39 271.634 501.66 166.998 359.22 85.625c64.258 62.435 53.03 110.4 10.81 148.97C351.44 134.268 275.5 168.25 260.28 21.654zm0 73.03c5.482 52.788 24.244 66.03 40.595 81.658 21.9 13.69 36.53 38.02 36.53 65.656 0 30.134-17.377 56.306-42.624 69.063-12.9 13.74-26.514 30.443-34.5 61.125-7.884-30.305-21.24-46.98-34-60.625-25.777-12.565-43.593-39.032-43.593-69.563 0-28.21 15.224-52.98 37.875-66.5 16.14-15.277 34.338-28.97 39.72-80.813zm-.25 88.658c-32.51 0-58.655 26.147-58.655 58.656 0 32.512 26.144 58.656 58.656 58.656 32.513 0 58.69-26.144 58.69-58.656 0-32.51-26.177-58.656-58.69-58.656z"></path></svg>
            ) : ("Area 3 is not expanded")}
        </div>
    )
}

export default Area3