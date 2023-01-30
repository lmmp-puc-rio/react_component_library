// Ballon Notification = ballon with error state and Link

// Main Import
import React from "react";
import { Link } from "react-router-dom";

// # Import Component Style
import "./ballonNotification.css";

function BallonNotification (props) {
  const link = props.link
  const error = props.error

  return (
    <div className="ballon-notification__container">
      <Link to={link}> 
        <p className="ballon-notification__text">{error}</p>
        {props.children}
      </Link> 
    </div>
  );
}

export default BallonNotification;
