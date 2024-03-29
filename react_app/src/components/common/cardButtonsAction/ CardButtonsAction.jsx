// # Main Import
import React from 'react';
import { Link } from "react-router-dom";
import Modal from '../modal';

// # Import Component Style
import './CardButtonsAction.css'

// Navbar React Component Construction
function CardButtonsAction (props) {
    console.log(props)
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
    }  if(props.tooltip === 'Edit Case'){
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
    }   else {
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

export default  CardButtonsAction;
