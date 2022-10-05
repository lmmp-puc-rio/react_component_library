// # Main Import
import React from 'react';
import { Link } from "react-router-dom";

// # Import Component Style
import './CardActionIcon.css'

// React Component for Card Button's (CardProjects and CardCases)
function CardActionIcon (props) {
    props = props.props
    if (props.tooltip === 'Delete Case') {
        return (
            <Link onClick={props.callback}>
                <button key={'action-icon_'+props.key}
                        className={"action-icon"}
                        style={{backgroundColor: props.backgroundColor, color: props.color}}
                        title={props.tooltip}>
                        <i className={props.icon}></i>
                </button>
            </Link>
        )    
    } 
    else if (props.tooltip === 'Edit Project') {
        return (
            <Link to='/cases'>
                <button key={'action-icon_'+props.key}
                        className={"action-icon"}
                        style={{backgroundColor: props.backgroundColor, color: props.color}}
                        title={props.tooltip}>
                        <i className={props.icon}></i>
                </button>
            </Link>
        )    
    } 
    else {
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

export default CardActionIcon ;