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
        onMouseEnter={props.onMouseEnter}
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
    <a
      href={props.href}
      className={"fab-action-button"}
      style={props.styles || defaultItemStyles}
    >
      <span className="tooltip">{props.tooltip}</span>
      <i className={props.icon} style={props.iconStyles}></i>
      {props.children}
    </a>
  );
}

// # FAB Component Construction
function FAB(props) {
  /* State responsible for expanding the main button after an action (onClik or onMouseEnter) */
  const [open, setOpen] = useState(false);
  const data = props.data;

  function handleClick() {
    setOpen(!open);
  }

  const handleMouseEnter = (e) => {
    setOpen(!open);
  };

  // Tag Rendering
  return (
    /* Changing the class of the container, it changes the opening direction of the button */
    <div className={data.actionButtom.direction} style={props.styles}>
      {/* CREATE MANUALY */}
      {/* {props.children}   */}
      {/* //Loop over Actions */}
      {/* CREATE AUTOMATICALY FROM DATA*/}
      {/* //Loop through Actions Array */}
      {/* //Main Action Buttom */}
      <ActionButton
        tooltip={data.actionButtom.tooltip}
        icon={data.actionButtom.icon}
        key={data.actionButtom.key}
        rotate={data.actionButtom.rotate}
        styles={{
          backgroundColor: data.actionButtom.backgroundColor,
          color: data.actionButtom.color,
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />
      {data.actions.map(
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
