// FAB = Floating Action Buttons
// # Main Import
import React, { useState } from "react";

// # Import Component Style
import "./FAB.css";
import { darkColors, lightColors } from "../../common/MaterialColors";

// # ActionButtom SubComponent for FAB Construction
function ActionButton(props) {
  return (
    <>
      <span className="tooltip">{props.tooltip}</span>
      <button
        className="fab-main-button"
        tooltip={props.tooltip}
        style={props.styles || defaultItemStyles}
        onClick={props.onClick}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
      >
        <i className={props.icon} style={props.iconStyles}></i>
        {props.children}
      </button>
    </>
  );
}

// # Link SubComponent for FAB Construction
function Action(props) {
  return (
    <li>
      <button
        href={props.href}
        className={"fab-action-button"}
        style={props.styles || defaultItemStyles}
      >
        <span className="tooltip">{props.tooltip}</span>
        <i className={props.icon} style={props.iconStyles}></i>
        {props.children}
      </button>
    </li>
  );
  /* return (
    <a
      href={props.href}
      className={"fab-action-button"}
      style={props.styles || defaultItemStyles}
    >
      <spam className="tooltip">{props.tooltip}</spam>
      <i className={props.icon} style={props.iconStyles}></i>
      {props.children}
    </a>
  ); */
}

// # FAB Component Construction
function FAB(props) {
  /* State responsible for expanding the main button after an action (onClik or onMouseOver) */
  const [open, setOpen] = useState(false);
  console.log("PROPS.DATA dentro da função FAB:", props.data);
  const dataActions = props.data.actions;
  console.log("PROPS.DATA.ACTIONS dentro da função FAB:", dataActions);

  function handleClick() {
    setOpen(!open);
  }

  const handleMouseEnter = (e) => {
    console.log("entrou!");
    setOpen(!open);
  };
  const handleMouseLeave = (e) => {
    console.log("saiu!");
    setOpen(false);
  };

  // Tag Rendering
  return (
    /* Changing the class of the container, it changes the opening direction of the button */
    <div className={props.data.actionButtom.direction} style={props.styles}>
      {/* CREATE MANUALY */}
      {/* {props.children}   */}
      {/* //Loop over Actions */}
      {/* CREATE AUTOMATICALY FROM DATA*/}
      {/* //Loop through Actions Array */}
      {/* //Main Action Buttom */}
      <ul>
        <ActionButton
          tooltip={props.data.actionButtom.tooltip}
          icon={props.data.actionButtom.icon}
          key={props.data.actionButtom.key}
          rotate={props.data.actionButtom.rotate}
          styles={{
            backgroundColor: props.data.actionButtom.backgroundColor,
            color: props.data.actionButtom.color,
          }}
          onClick={handleClick}
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {dataActions.map(
          (action, index) =>
            // Minor Action Buttons
            open && (
              <Action
                tooltip={action.tooltip}
                icon={action.icon}
                key={action.key}
                href={action.url}
                styles={{
                  backgroundColor: action.backgroundColor,
                  color: action.color,
                }}
              />
            )
        )}
      </ul>
    </div>
  );
}

const defaultItemStyles = {
  backgroundColor: darkColors.lighterRed,
  color: darkColors.white,
  textDecoration: "none",
  border: "none",
};

export { FAB, Action, ActionButton, darkColors, lightColors };
