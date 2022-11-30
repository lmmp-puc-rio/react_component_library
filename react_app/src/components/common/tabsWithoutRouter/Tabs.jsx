// #  Main Imports
import React, { useState, useContext } from "react";


// #  Local SubComponents & utils
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";


// # Import Component Style
import "./Tabs.css";

const Tabs = (props) => {
  const data = props.data;
  const activeTab = props.activeTab
  const setActiveTab = props.setActiveTab
  const setIsModalOpen = props.setIsModalOpen
  const isModalOpen = props.isModalOpen

  return (
    <div className="Tabs">
      <ul className="nav">
        {data.map((item) => (
          <TabNavItem
            title={item.name}
            id={item.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </ul>
      <div className="outlet">
        {data.map((item) => (
          <TabContent id={item.id} activeTab={activeTab} isModalOpen={isModalOpen}>
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
