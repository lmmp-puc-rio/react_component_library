// # Main Import 
import React from 'react';

// # Import Component Style
import './Logo.css'

// # Logo React Component Construction
function Logo (props) {
    
    return (
        // Logo assembled by Icon and Name
        <a className="logo" href={props.url}>
            {/* Logo Icon */}
            <i className={props.iconClassName}> </i>
            {/* Logo Name */}
            <h4>{props.text}</h4>
        </a>
    )

}

export default Logo;
