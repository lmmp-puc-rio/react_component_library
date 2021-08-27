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

  const defaultValues = [
    {name: "text", value: ""},
  ]
  return (
    // < ThemeProvider theme={theme}>
      <div className="App">
        <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
        <div className="main">
          <div className="scope">
              <GridForm defaultValues={defaultValues}/>
          </div>
        </div> 
      </div>
    // </ThemeProvider>
  );
}

export default App;
