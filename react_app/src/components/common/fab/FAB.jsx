// # Main Import 
import React from 'react';

// # Import Component Style
import './FAB.css'
import {darkColors, lightColors} from '../../common/MaterialColors'

// # Link SubComponent for FAB Construction
function Action(props) {

    return (
        <a href={props.href}
            className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
            {props.children}
        </a>
    )
}

// # ActionButtom SubComponent for FAB Construction
function ActionButton(props) {

    return (
        <button onClick={props.onClick}
            className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
            {props.children}
        </button>
    )
}

// # FAB Component Construction
function FAB(props) {
    //Local Variables (Comment if creating manually)
    // data Object Structure:
    // data = {actionButtom: {tootip: ,icon: ,rotate:, backgroundColor: ,color:},
    //         actions: [{tooltip: ,icon: ,key: ,url: ,backgroundColor: ,color: },
    //                   {tooltip: ,icon: ,key: ,url: ,backgroundColor: ,color: }
    //                  ...
    //                  ]
    //        }
    const data = props.data;

    // Tag Rendering
    return (
        <nav className={`fab-main ${props.className}`} style={props.styles}>
        {/* CREATE MANUALY */}
            {/* {props.children}   */}
            {/* //Loop over Actions */}
        {/* CREATE AUTOMATICALY FROM DATA*/}
            {/* //Loop through Actions Array */}
            {data.actions.map((action) => (
                <Action tooltip={action.tooltip}
                        icon={action.icon}
                        key={action.key}
                        href={action.url}
                        styles={{ backgroundColor: action.backgroundColor, 
                                            color: action.color}} />
                ))}
            
                {/* //Action Buttom */}
                {console.log(data.actionButtom)}
                <ActionButton   tooltip={data.actionButtom.tooltip}
                                icon={data.actionButtom.icon}
                                key={data.actionButtom.key}
                                rotate={data.actionButtom.rotate}
                                styles={{ backgroundColor: data.actionButtom.backgroundColor, 
                                                    color: data.actionButtom.color}} />
        </nav>
                                                
    )
}




const defaultItemStyles = {
    backgroundColor: darkColors.lighterRed,
    color: darkColors.white,
    textDecoration: "none",
    border: "none"
}

export { FAB, Action, ActionButton, darkColors, lightColors }
