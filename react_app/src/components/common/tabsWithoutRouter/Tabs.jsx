// #  Main Imports
import React, { useState } from "react";


// #  Local SubComponents & utils
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";


// # Import Component Style
import "./Tabs.css";

const Tabs = (props) => {
  const data = props.data;
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        {data.map((item) => (
          <TabNavItem
            title={item.name}
            id={item.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>
      <div className="outlet">
        {data.map((item) => (
          <TabContent id={item.id} activeTab={activeTab}>
          {props.children.map((child) => {
                    if (child.key === item.id) {
                      return child;
                    }})}
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
