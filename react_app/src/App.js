// Main import of React
import React from 'react';
import { BrouserRouter as Router, Route, Switch } from "react-router-dom";

// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import './App.css';

// All Components import
import { Header, GridForm, 
        FAB, //ActionButton,  Action, // Last two only needed for manual creation of items
        darkColors, lightColors } from './components/common';



function App() {

  // Set navlinks Object
  const navlinks = [
    {url: "https://google.com" , title: "Home", className: "navbar-item"},
    {url: "/" , title: "About", className: "navbar-item"},
    {url: "/" , title: "Control", className: "navbar-item"},
    {url: "/" , title: "Help", className: "navbar-item"}]
    
  //TODO: Bring all dynamic data from the Flask API
  const conversionFactors = { lenght: {"km": 1000, "cm": 1/100, "mm": 1/1000, "um": 1/1000000, "m": 1},
                              pressure: {"psi": 0.000145038, "mmHg": 0.00750062, "Pa": 1,}};
  
  const  formData = {gap: {label: "Gap:", defaultValue:"0", unitType:"lenght", selectecUnit:"mm"},
                size: {label: "Size:", defaultValue:"0", unitType:"lenght", selectecUnit:"cm"},
                p0: {label: "Inlet Pressure:", defaultValue:"0", unitType:"pressure", selectecUnit:"psi"}};
  
  const actionData = {actionButtom: {tootip:"Grupo de Ações" ,icon:"fas fa-plus" ,rotate:true, 
                                      backgroundColor: darkColors.blue ,color: lightColors.white},
                      actions: [{tooltip:"Ação 0" ,icon:"fas fa-react" ,key:"action1" ,url:"/" ,backgroundColor: darkColors.blue ,color: lightColors.white},
                                {tooltip:"Ação 1" ,icon:"fas fa-minus" ,key:"action2" ,url:"/" ,backgroundColor: darkColors.blue ,color: lightColors.white}
                                ]};
  return (
    // < ThemeProvider theme={theme}>
      <div name="app" className="App">
        <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div name="main" className="main">
          <div name="scope" className="scope">
              {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
              <GridForm data={formData} conversionFactors={conversionFactors} />
          </div>
        </div>
        
        {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
        <FAB data={actionData} />
        
        {/* MANUAL CREATION: insert n Actions and 1 ActionButtom Components */}
        {/* <FAB>
          <Action 
            tooltip={"Ação 0"}
            icon="fas fa-minus" 
            href="/baaah" 
            styles={{backgroundColor: darkColors.blue, 
                    color: lightColors.white}}/>
          <Action
            tooltip={"Ação 1"}
            icon="fas fa-react" 
            href="/baaah" 
            styles={{backgroundColor: darkColors.blue, 
                color: lightColors.white}}/>
          <ActionButton
            tooltip={"Grupo de Ações"}
            icon="fas fa-plus"
            rotate={true}
            styles={{backgroundColor: darkColors.blue, 
              color: lightColors.white}}/>
        </FAB>  */}
      </div>
    // </ThemeProvider>
  )
}

export default App;
