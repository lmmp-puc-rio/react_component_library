// # Main Import 
import React from 'react';

// # Import Component Style
import './FAB.css'
import {darkColors, lightColors} from '../../common/MaterialColors'

// # FAB React Component Construction
function FAB(props) {

    return (
        <nav className={`fab-main ${props.className}`} style={props.styles}>
            {props.children}
        </nav>
    )
}

function Button(props) {

    return (
        <button onClick={props.onClick}
            className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
            {props.children}
        </button>
    )
}

function Link(props) {

    return (
        <a href={props.href}
            className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
            {props.children}
        </a>
    )
}

const defaultItemStyles = {
    backgroundColor: darkColors.lighterRed,
    color: darkColors.white,
    textDecoration: "none",
    border: "none"
}

export { FAB, Link, Button, darkColors, lightColors }
