// # Main Import 
import React from 'react';

// # Import Component Style
import './Dropdown.css'

// Populates Options from array options
function populateOptions(options) {
    return options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
    ));
}

// # Logo React Component Construction
function Dropdown (props) {
    
    const options = props.options;

    return (
        // dropdown
        <select className="dropdown">
            {populateOptions(options)}
        </select>
    )

}

export default Dropdown;
