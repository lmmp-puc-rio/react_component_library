// #  Main Imports
import React, { useState } from 'react';

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


// # Import Component Style
import './pages.css'
import { TabsComponent } from '../components/common';




const TabsComponents = (props) => {

    const data = [
        
        {name:"Centralizadores",
         description:"Centralizadores",
         id:"Accordions"
       },
       {name:"app",
        description:"app",
        id:"ProjectCards"
       },
  
    ]

    const pages = {props}
    return (
        
        <> 
            <TabsComponent key={"Accordions"} data = {data}>
                <div key={"Accordions"}> Teste 1</div>
                <div key={"ProjectCards"}> Teste 2</div>
            </TabsComponent> 
        </>
        
    );
};



export default TabsComponents;

