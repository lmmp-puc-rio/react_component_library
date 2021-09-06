// Main import of React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    {url: "/" , title: "Home", className: "navbar-item"},
    {url: "/cases" , title: "Cases", className: "navbar-item"},
    {url: "/control" , title: "Control", className: "navbar-item"},
    {url: "/help" , title: "Help", className: "navbar-item"}]
    
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
    // React Browser Router
    <Router>
      <div name="app" className="App">
        <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div name="main" className="main">
        <Switch>
            {/* Main page Route */}
            <Route exact path="/">
                <div className="scope" style={{color:"white"}}>Main Page</div>
            </Route>

            {/* User Cases Route */}
            <Route exact path={navlinks[1].url}>
              <div name="inputs" className="case-inputs">
                {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
                <GridForm data={formData} conversionFactors={conversionFactors} />
              </div>
            </Route>

            {/* Case i Route */}
            <Route exact path={[navlinks[1].url+"_1"]}>
              <div name="inputs" className="case-inputs">
                {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
                <GridForm data={formData} conversionFactors={conversionFactors} />
              </div>
            </Route>
          </Switch>
        </div>
        {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
        <FAB data={actionData} />
      </div>
    </Router>
          
  )
}

export default App;
