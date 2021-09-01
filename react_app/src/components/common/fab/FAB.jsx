// # Main Import 
import React from 'react';

// # Import Component Style
import './FAB.css'
import {darkColors, lightColors} from './MaterialColors'

// # Logo React Component Construction
function FAB (props) {
    
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

function Container(props) {

    return (
        <nav className={`fab-container ${props.className}`} style={props.styles}>
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

export { Container, Link, Button, darkColors, lightColors }
