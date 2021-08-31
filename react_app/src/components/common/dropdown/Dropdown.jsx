// # Main Import 
import React from 'react';

// # Import Component Style
import './Dropdown.css'

// Populates Options from array options
function populateOptions(name,options) {
    return options.map((option, index) => (
        <option key={name+[index]} value={option}>{option}</option>
    ));
}

// # Logo React Component Construction
function Dropdown (props) {
    
    const options = props.options;
    const name = props.name;

    return (
        // dropdown
        <select className="dropdown">
            {populateOptions(name,options)}
        </select>
    )

}

export default Dropdown;
