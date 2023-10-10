import React, { Fragment, useState } from 'react'

const MeatRelease = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Fragment>
            <input type="checkbox" id="checkbox" onChange={handleCheckboxChange} />
            {isChecked && (<button className='continue-btn' onClick={props.changeToScientistReport} >
                Continue
            </button>)}
        </Fragment>
    )
}

export default MeatRelease