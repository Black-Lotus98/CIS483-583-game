import React, { Fragment } from 'react';

/**
 * Dropdown component for selecting justice levels
 * @param {string} selectedValue - The currently selected value
 * @param {function} onChange - Callback function when the value changes
 * @returns {JSX.Element} - The dropdown component
 */
function JusticeDropdown({ selectedValue, onChange }) {
  return (
    <Fragment>
      <select value={selectedValue} onChange={onChange}>
        <option value="very fair">Very Fair</option>
        <option value="fair">Fair</option>
        <option value="harsh">Harsh</option>
        <option value="outrageous">Outrageous</option>
      </select>
    </Fragment>
  );
}
export default JusticeDropdown;