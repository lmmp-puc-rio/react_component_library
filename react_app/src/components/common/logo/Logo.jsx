// # Main Import 
import React from 'react';

// # Import Component Style
import './Logo.css'

// # Logo React Component Construction
function Logo (props) {
    if (props.image_path === 'undefined' || props.image_path === 'Null' || props.image_path === '') {
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
    else {
        return (
            // Logo assembled by Icon and Name
            <a className="logo" href={props.url}>
                {/* Logo Icon */}
                <img src={props.image_path} class="logo-image" />
                {/* Logo Name */}
                <div style={{ width: "30px" }}></div>
                <h4>{"       " + props.text}</h4>
            </a>

        )
    }

}

export default Logo;
