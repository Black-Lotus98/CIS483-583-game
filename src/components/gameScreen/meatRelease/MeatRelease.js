import React, { Fragment, useState } from 'react'

const MeatRelease = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Fragment>
            <div id='content'>
            <p id="text"> Sir of Santa Paravia <br/> you have 28500 st of grain<br/>
            Grain demand is 11600 steres <br/> How much grain will you release for consumption </p>
            <div id="input">
            <input type="text" id="input-text"/>
            <input type="checkbox" id="checkbox" onChange={handleCheckboxChange} />
            {isChecked && (<button className='continue-btn' onClick={props.changeToTestPage} >
                Continue
            </button>)}
            </div>
            </div>
            
        </Fragment>
    )
}

export default MeatRelease