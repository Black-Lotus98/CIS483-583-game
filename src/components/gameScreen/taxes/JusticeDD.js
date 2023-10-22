import React, { Component } from 'react';

class DropdownList extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: ' ',
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
        <div>
            <select value={this.state.selectedOption} onChange={this.handleOptionChange}>
                <option value="Very Fair">Very Fair</option>
                <option value="Fair">Fair</option>
                <option value="Harsh">Harsh</option>
                <option value="Outrageous">Outrageous</option>
            </select>
            <p>{this.state.selectedOption}</p>
        </div>
    );
  }
}

export default DropdownList;
