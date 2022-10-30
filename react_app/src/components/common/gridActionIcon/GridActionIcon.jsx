// # Main Import
import React from 'react';
import { Link } from "react-router-dom";

// # Import Component Style
import './GridActionIcon.css'

// Navbar React Component Construction
function GridActionIcon (props) {
    if (props.tooltip === 'Delete Case') {
        return (
            <Link to={props.routeURL + props.rowID} onClick={props.callback}>
                <button key={'action-icon_'+props.key}
                        className={"action-icon"}
                        style={{backgroundColor: props.backgroundColor, color: props.color}}
                        title={props.tooltip}>
                        <i className={props.icon}></i>
                </button>
            </Link>
        )    
    } else {
        return (
        <Link to={props.routeURL + props.rowID}>
                <button key={'action-icon_'+props.key}
                        className={"action-icon"}
                        style={{backgroundColor: props.backgroundColor, color: props.color}}
                        title={props.tooltip}>
                        <i className={props.icon}></i>
                </button>
            </Link>
        )
    }
    

}

export default GridActionIcon;
