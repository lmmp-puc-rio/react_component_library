// #Sliding Panel = a React Sliding Panel, that opens smoothly from one side of the screen(left or right by input) and displays child components.
// # Main Import
import React, { useState } from "react";

// # Import React Sliding Pane library
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// # Import Component Style
import "./SlidingPanel.css";

//import all components here
import RecursiveAccordion from "../recursiveAccordion";
import TabsComponent from "../tabsComponent";
import expandableGrid from '../expandableGrid'


export default function SlidingPanel(props) {
  const [state, setState] = useState({ isPanelOpen: false });
  
  
  return (
    <div className="sliding-container">
      <button
        onClick={() => setState({ isPaneOpen: true })}
        className="open-bttn"
      >
        {"<"}
      </button>
      <SlidingPane isOpen={state.isPaneOpen} width="30%" hideHeader>
        <button
          className="close-bttn"
          onClick={() => setState({ isPaneOpen: false })}
        >
          {">"}
        </button>
        {props.children}
      
      {/* In the future the Sliding Panel will receive the Accordion Component */}
      </SlidingPane>
    </div>
  );
}
