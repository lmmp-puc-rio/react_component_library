// #  Main Imports
import React, { useState, useContext } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


// # Import Component Style
// # Context
import { ActiveTabContext } from "../contexts/ActiveTabContext";
  /* State to control Tabs Component */
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

  /*Function to change id Tab*/
  const handleClick = (id) => {
    setActiveTab(id);
  };
};



export default TabsComponents;

