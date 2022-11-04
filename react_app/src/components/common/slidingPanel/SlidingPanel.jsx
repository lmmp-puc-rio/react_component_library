// #Sliding Panel = a React Sliding Panel, that opens smoothly from one side of the screen(left or right by input) and displays child components.
// # Main Import
import React, { useState } from "react";

// # Import Component Style
import "./SlidingPanel.css";

export default function SlidingPanel(props) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="sliding-pane-container">
      <h1>Olá</h1>
      <button onClick={toggle} className="sliding-pane-bttn">
        {open ? (
          <i class="fas fa-angle-double-right fa-lg"></i>
        ) : (
          <i class="fas fa-angle-double-left fa-lg"></i>
        )}
      </button>
      {open && <div className="sliding-pane-children">{props.children}</div>}
    </div>
  );
}
