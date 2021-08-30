// Main import of React
import React from 'react';
// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import './App.css';

// All Components import
import { Header, GridForm } from './components/common';


function App() {

  // Set navlinks Object
  const navlinks = [
    {url: "https://google.com" , title: "Home", className: "navbar-item"},
    {url: "/" , title: "About", className: "navbar-item"},
    {url: "/" , title: "Control", className: "navbar-item"},
    {url: "/" , title: "Help", className: "navbar-item"}]
    
    const conversionFactors = { lenght: {"km": 10^-3, "mm": 10^3, "um": 10^6, "m": 1},
                                pressure: {"psi": 0.000145038, "mmHg": 0.00750062, "Pa": 1,}};
    
    const  data = {gap: {label: "Gap:", defaultValue:"0", unitType:"lenght"},
                  size: {label: "Size:", defaultValue:"0", unitType:"lenght"}};
  return (
    // < ThemeProvider theme={theme}>
      <div className="App">
        <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div className="main">
          <div className="scope">
              <GridForm data={data} conversionFactors={conversionFactors}/>
          </div>
        </div> 
      </div>
    // </ThemeProvider>
  );
}

export default App;
