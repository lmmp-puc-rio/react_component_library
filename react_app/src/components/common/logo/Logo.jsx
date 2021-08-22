// # Main Import 
import React from 'react';

// # Import Component Style
import './Logo.css'

// # Logo React Component Construction
function Logo () {
    
    return (
        // Logo assembled by Icon and Name
        <a className="logo" href='/'>
            {/* Logo Icon */}
            <i className="fas fa-react"> </i>
            {/* Logo Name */}
            <h4>iferencial</h4>
        </a>
    )

}

export default Logo;
