// # Main Import
import React from 'react';

// # Import Component Style
import './Navbar.css'

// Navbar React Component Construction
function Navbar () {
    return (
        // Navbar
        <nav className="navbar">
            {/* Navbar Link tree */}
            <ul className="navlinks">
                {/* Items: Replace for mapping */}
                <li className="navbar-item" > Home </li>
                <li className="navbar-item" > About </li>
                <li className="navbar-item" > Control </li>
            </ul>
        </nav>
    )

}

export default Navbar;
