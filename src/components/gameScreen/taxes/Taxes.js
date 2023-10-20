import React, { Fragment, useContext, useState } from "react";
import JusticeDropdown from "./JusticeDD";
import { GameDataContext } from "../../../gameDataContext/GameDataContext";

const Taxes = (props) => {
    const [gameData, setGameData] = useContext(GameDataContext);
    const [selectedValue, setSelectedValue] = useState('fair');

    const [salesTax, setSalesTax] = useState(gameData.sales_tax); 
    const [incomeTax, setIncomeTax] = useState(gameData.income_tax); 
    const [countryTax, setCountryTax] = useState(gameData.country_tax); 
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };


    const handleSalesTaxChange = (event) => {
        const newSalesTax = event.target.value;
        setSalesTax(newSalesTax);
    };
    const handleIncomeTaxChange = (event) => {
        const newIncomeTax = event.target.value;
        setIncomeTax(newIncomeTax);
    };
    const handleCountryTaxChange = (event) => {
        const newCountryTax = event.target.value;
        setCountryTax(newCountryTax);
    };


<<<<<<< HEAD
=======
const Taxes = (props, { selectedOption }) => {

>>>>>>> main
    return (
        <Fragment>
            <div className="taxContainer">
                <div className="taxHeader">
                    <h2>Country Revenue</h2>
                </div>
                <div className="lastYear">
                    <h4>Percent Levied Last Year:</h4>
                    <div className="prev">
<<<<<<< HEAD
                        <output type="text" className="prevInfo"/>
                        {(gameData.country_tax + gameData.sales_tax + gameData.income_tax)%100}%
=======
                        <output type="text" className="prevInfo" />
                        5%
>>>>>>> main
                    </div>
                </div>
                <div className="customs">
<<<<<<< HEAD
                    <h4>Country Duty:</h4>                    
                </div>
                <div className="currentCustoms">
                        <output type="number" className="prevCustoms newCountryTax"/>
                        {countryTax}%
=======
                    <h4>Customs Duty:</h4>
                </div>
                <div className="currentCustoms">
                    <output type="text" className="prevInfo" />
                    5%
>>>>>>> main
                </div>
                <div className="salesTax">
                    <h4>Sales Tax:</h4>
                </div>
                <div className="currentSalesT">
<<<<<<< HEAD
                        <output type="number" className="prevSales newSales"/>
                        {salesTax}% 
                    </div>
=======
                    <output type="text" className="prevInfo" />
                    5%
                </div>
>>>>>>> main
                <div className="incomeTax">
                    <h4>Income Tax:</h4>
                </div>
                <div className="currentIncome">
<<<<<<< HEAD
                        <output type="number" className="prevIncome newIncome"/>
                        {incomeTax}%
                    </div>
=======
                    <output type="text" className="prevInfo" />
                    5%
                </div>
>>>>>>> main
                <div className="justice">
                    <h4>Justice:</h4>
                </div>
                <div className="currentJustice">
                    <output type="text" className="selectedJustice">{selectedValue}</output>
                </div>
                <p>
                    Indicate Tax to Change or Press "Continue" to move on
                </p>
                {/* ------------------------------- */}
                <div className="newCustoms">
                    <h4>Customs Duty:</h4>
                </div>
                <div className="updateCustoms">
<<<<<<< HEAD
                        <input
                            type="text"
                            className="newCountryTax"
                            value={countryTax}
                            onChange={handleCountryTaxChange}
                        /> 
=======
                    <input type="text" className="newInfo" />
>>>>>>> main
                </div>
                <div className="newSalesTax">
                    <h4>Sales Tax:</h4>
                </div>
                <div className="updateSales">
<<<<<<< HEAD
                <div className="updateSales">
                        <input
                            type="text"
                            className="newSales"
                            value={salesTax}
                            onChange={handleSalesTaxChange}
                        />
                </div>
=======
                    <input type="text" className="newInfo" />
>>>>>>> main
                </div>
                <div className="newIncomeTax">
                    <h4>Income Tax:</h4>
                </div>
                <div className="updateIncomeTax">
<<<<<<< HEAD
                        <input
                            type="text"
                            className="newIncome"
                            value={incomeTax}
                            onChange={handleIncomeTaxChange}
                        /> 
                    </div>
                <div className="newJustice">
                    <h4>Justice:</h4>
                </div> 
                <div className="updateJustice">
                    <JusticeDropdown selectedValue={selectedValue} onChange={handleSelectChange} />
                </div>
                <button className="continue-btn" onClick={props.changeToTestPage} >
                    Continue
                </button>
=======
                    <input type="text" className="newInfo" />
                </div>
                <div className="newJustice">
                    <h4>Justice:</h4>
                </div>
                <div className="updateJustice">
                    <DropdownList />
                </div>
                <button className="contbtn" onClick={props.changeToMap} >
                    Continue
                </button>




>>>>>>> main
            </div>
        </Fragment>
    );
};

export default Taxes;