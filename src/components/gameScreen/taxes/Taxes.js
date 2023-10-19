import React, { Fragment } from "react";
import DropdownList from "./JusticeDD";

const Taxes = ({ selectedOption }) => {
    
    return (
        <Fragment>
            <div className="taxContainer">
                <div className="taxHeader">
                    <h2>Country Revenue</h2>
                </div>
                 <div className="lastYear">
                    <h4>Percent Levied Last Year:</h4>
                    <div className="prev">
                        <output type="text" className="prevInfo"/>
                        5%
                    </div>
                </div>               
                <div className="customs">
                    <h4>Customs Duty:</h4>                    
                </div>
                <div className="currentCustoms">
                        <output type="text" className="prevInfo"/>
                        5%
                    </div>
                <div className="salesTax">
                    <h4>Sales Tax:</h4>
                </div>
                <div className="currentSalesT">
                        <output type="text" className="prevInfo"/>
                        5%
                    </div>
                <div className="incomeTax">
                    <h4>Income Tax:</h4>
                </div>
                <div className="currentIncome">
                        <output type="text" className="prevInfo"/>
                        5%
                    </div>
                <div className="justice">
                    <h4>Justice:</h4>
                </div> 
                <div className="currentJustice">
                    <output type="text" className="selectedJustice">{selectedOption}</output>
                </div>
                <p>
                    Indicate Tax to Change or Press "Continue" to move on
                </p> 
                {/* ------------------------------- */}
                <div className="newCustoms">
                    <h4>Customs Duty:</h4>                    
                </div>
                <div className="updateCustoms">
                        <input type="text" className="newInfo"/>
                    </div>
                <div className="newSalesTax">
                    <h4>Sales Tax:</h4>
                </div>
                <div className="updateSales">
                        <input type="text" className="newInfo"/>
                    </div>
                <div className="newIncomeTax">
                    <h4>Income Tax:</h4>
                </div>
                <div className="updateIncomeTax">
                        <input type="text" className="newInfo"/>
                    </div>
                <div className="newJustice">
                    <h4>Justice:</h4>
                </div> 
                <div className="updateJustice">
                        <DropdownList />
                </div>
                {/* <button className="continue-btn" onClick={props.changeToTestPage} >
                    Continue
                </button>
*/}



            </div>
        </Fragment>
    );
};

export default Taxes;