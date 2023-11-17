// #  Main Imports
import React, { useState, useContext } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


// # Import Component Style
import "./pages.css";

// #  Local SubComponents & utils
import Tabs from "../components/common/tabsWithoutRouter/Tabs";

/*Tabs Data*/
import { dataTabSequencia } from "../data/tabData";

// #  Local SubComponents & utils
import { ChildrenTabs, ChildrenTabs2 } from "../components/common/childrenTabs";

// # Context
import { ActiveTabContext } from "../contexts/ActiveTabContext";

const TabsComponents = () => {
  /* State to control Tabs Component */
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

  /*Function to change id Tab*/
  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <Tabs data={dataTabSequencia} activeTab={activeTab} callback={handleClick}>
      <div key={"Parâmetros Básicos"}>
        <ChildrenTabs />
      </div>
      <div key={"Parâmetros Avançados"}>
        <ChildrenTabs2 />
      </div>
    </Tabs>
  );
};



export default TabsComponents;

