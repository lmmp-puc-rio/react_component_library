// Main import of React
import React from 'react';
// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import './App.css';

// All Components import
import { Header, GridForm, 
        Button, FAB, Link,
        darkColors, lightColors } from './components/common';



function App() {

  // Set navlinks Object
  const navlinks = [
    {url: "https://google.com" , title: "Home", className: "navbar-item"},
    {url: "/" , title: "About", className: "navbar-item"},
    {url: "/" , title: "Control", className: "navbar-item"},
    {url: "/" , title: "Help", className: "navbar-item"}]
    
    //TODO: Bring from the Flask API
    const conversionFactors = { lenght: {"km": 1000, "cm": 1/100, "mm": 1/1000, "um": 1/1000000, "m": 1},
                                pressure: {"psi": 0.000145038, "mmHg": 0.00750062, "Pa": 1,}};
    
    const  data = {gap: {label: "Gap:", defaultValue:"0", unitType:"lenght", selectecUnit:"mm"},
                  size: {label: "Size:", defaultValue:"0", unitType:"lenght", selectecUnit:"cm"},
                  p0: {label: "Inlet Pressure:", defaultValue:"0", unitType:"pressure", selectecUnit:"psi"}};
  return (
    // < ThemeProvider theme={theme}>
      <div name="app" className="App">
        <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div name="main" className="main">
          <div name="scope" className="scope">
              <GridForm data={data} conversionFactors={conversionFactors} />
          </div>
        </div>
        {/*TODO: Bring link and buttom inside FAB and populate from object data */}
        <FAB>
          <Link 
            tooltip={"Ação 0"}
            icon="fas fa-minus" 
            href="/baaah" 
            styles={{backgroundColor: darkColors.blue, 
                    color: lightColors.white}}/>
          <Link
            tooltip={"Ação 0"}
            icon="fas fa-react" 
            href="/baaah" 
            styles={{backgroundColor: darkColors.blue, 
                color: lightColors.white}}/>
          <Button
            tooltip={"Ação 0"}
            icon="fas fa-plus"
            rotate={true}
            styles={{backgroundColor: darkColors.blue, 
              color: lightColors.white}}>
              
          </Button>
        </FAB> 
      </div>
    // </ThemeProvider>
  )
}

export default App;
