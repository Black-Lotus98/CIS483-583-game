import React, { Fragment, useState } from 'react'

const MeatRelease = (props) => {
    const [inputText, setInputText] = useState(''); 

    const handleInputChange = (e) => {
        setInputText(e.target.value);
      };

    return (
        <Fragment>
      <div id='content'>
      <p id='name'>Sir of Santa Paravia</p>

        <p id="text">You have 28500 kg of Meat<br/>
          Meat demand is 11600 kg <br/> How much meat will you release for consumption knowing that you cannot give more than 20% of your stock  </p>
        <div id="input">
          <input
            type="text"
            id="input-text"
            value={inputText}
            onChange={handleInputChange}
          />
          {inputText && ( 
            <button className='continue-btn' onClick={props.changeToBirthsAndDeaths}>
              Continue
            </button>
          )}
        </div>
      </div>
            
        </Fragment>
    )
}

export default MeatRelease