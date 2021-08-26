// # Main Import
import React, { useState } from 'react';

// # Import Component Style
import './Navbar.css'

// Navbar React Component Construction
function Navbar () {

    // Saves current state
    // state is an array composed of:
    //    [Variable   ,  Method that sets the variable] = useState(defaultValue)
    const [navLinkOpen, navLinkToggle] = useState(false);
        // Equivalent to:
        // const state = useState(false);
        // const navLinkOpen = state[0]
        // const navLingToggle = state[1]

    // Defines the Callback for the toggle
    function hangleNavLinksToggle () {
        // Calls the Function to set the Variable value to the oposit of what it was before
        navLinkToggle(!navLinkOpen)
    };

    function renderClasses () {
        // set the navlinks class as targed
        let classes = "navlinks"

        if (navLinkOpen) {
            // add active to navlinks class
            classes += " active"
        }
        return classes
    }

    return (
        // Navbar
        <nav className="navbar" >
            {/* Navbar Link tree */}
            <ul className={renderClasses()}>
                {/* Items: Replace for mapping */}
                <li className="navbar-item"> <a href="\" >Home</a> </li>
                <li className="navbar-item"> <a href="\" >About</a> </li>
                <li className="navbar-item"> <a href="\" >Control</a> </li>
                <li className="navbar-item"> <a href="\" >Control</a> </li>
            </ul>
            {/* Hamburguer Menu */}
            <div onClick={hangleNavLinksToggle} className="navmenu">
                <div className="navmenu-menu-toggle">
                    <i className="fas fa-bars fa-lg"></i>
                </div>
            </div>
        </nav>
        
    )

}

export default Navbar;
