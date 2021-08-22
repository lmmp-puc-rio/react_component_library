// Main import of React
import React from 'react';
// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import './App.css';

// All Components import
import { Header } from './components/common';


function App() {
  return (
    // < ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className="main">

        </div>
      </div>
    // </ThemeProvider>
  );
}

export default App;
