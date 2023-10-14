import React, { Fragment,useState } from 'react'


const BirthAndDeaths = (props) => { 
        const [numberOfDeaths, setNumberOfDeaths] = useState(0);
        const [numberOfBirths, setNumberOfBirths] = useState(0);

      
        // Function to increment the number of deaths
        const incrementDeaths = () => {
          setNumberOfDeaths(numberOfDeaths + 1);
        };
        const incrementBirths = () => {
            setNumberOfDeaths(numberOfBirths + 1);
          };

    return (
        <Fragment>
            <div >


            <p>Deaths: <output>{numberOfDeaths}</output></p>
            <p>Births: <output>{numberOfBirths}</output></p>

            <button className='continue-btn' onClick={props.changeToScientistReport}>
              Continue
            </button>

            </div>
        </Fragment>

    )
}

export default BirthAndDeaths