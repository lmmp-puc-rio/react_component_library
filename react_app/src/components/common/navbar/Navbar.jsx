// # Main Import
import React, { useState } from 'react';

// # Main SubComponents
import { Menu } from '../../common';

// # Import Component Style
import './Navbar.css'

// Navbar React Component Construction
function Navbar () {

    // Saves current state
    // state is an array:
    const [navLinkOpen, navLinkToggle] = useState(false);
        // Equivalent to:
        // const state = useState(false);
        // const navLinkOpen = state [0]
        // const navLingToggle = state [1]
        
    // Define the Callback for the toggle
    const hangleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    };

    return (
        // Navbar
        <nav className="navbar" >
            {/* Navbar Link tree */}
            <ul className="navlinks">
                {/* Items: Replace for mapping */}
                <li className="navbar-item"> <a href="\" >Home</a> </li>
                <li className="navbar-item"> <a href="\" >About</a> </li>
                <li className="navbar-item"> <a href="\" >Control</a> </li>
                <li className="navbar-item"> <a href="\" >Control</a> </li>
            </ul>
            <div className="navmenu">
                <Menu />
            </div>
        </nav>
        
    )

}

export default Navbar;
