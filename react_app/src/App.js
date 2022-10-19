// Main import of React
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import "./App.css";

// All Components import
import {
  Header,
  SlidingPanel,
  SideMenu,
  FAB, //ActionButton,  Action, // Last two only needed for manual creation of items
  darkColors,
  lightColors,
  TabsComponent,
} from "./components/common";

// All Pages Import
import { Grids, Projects, Cases, Accordions, TabsComponents } from "./pages";

// All Contexts Import
// import { AuthProvider } from './components/contexts/AuthContext';
// import { ToastProvider } from './components/contexts/ToastContext';
// import { ModalProvider } from './components/contexts/ModalContext';
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  /* State responsible for controlling the opening/closing of the sidebar */
  const [inactive, setInactive] = useState(false);

  // Set navlinks Object
  const navlinks = [
    { url: "/", title: "Home", className: "navbar-item" },
    { url: "/grids", title: "Grids", className: "navbar-item" },
    { url: "/projects", title: "Projects", className: "navbar-item" },
    { url: "/cases", title: "Cases", className: "navbar-item" },
    { url: "/accordion", title: "Accordion", className: "navbar-item" },
    { url: "/tabs", title: "Tabs", className: "navbar-item" },
    { url: "/help", title: "Help", className: "navbar-item" },
  ];

  const actionData = {
    actionButtom: {
      tootip: "Grupo de Ações",
      icon: "fas fa-plus",
      rotate: true,
      backgroundColor: darkColors.blue,
      color: lightColors.white,
    },
    actions: [
      {
        tooltip: "Ação 0",
        icon: "fas fa-react",
        key: "action1",
        url: "/",
        backgroundColor: darkColors.green,
        color: lightColors.white,
      },
      {
        tooltip: "Ação 1",
        icon: "fas fa-minus",
        key: "action2",
        url: "/",
        backgroundColor: darkColors.red,
        color: lightColors.white,
      },
    ],
  };

  return (
    // React Browser Router
    <Router>
      <SearchProvider>
        <div name="app" className="App">
          <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          />
          <SlidingPanel />
          <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
          <div name="main" className="main">
            <Switch>
              {/* Main page Route */}
              <Route exact path="/">
                <div className="scope" style={{ color: "white" }}>
                  Main Page
                </div>
              </Route>

              {/* Grids Route */}
              <Route exact path={navlinks[1].url}>
                <div name="inputs" className="grid-container">
                  <Grids />
                </div>
              </Route>
              {/* Projects Route */}
              <Route exact path={navlinks[2].url}>
                <div name="cards" className="card-container">
                  <Projects />
                </div>
              </Route>
              {/* Cases Route */}
              <Route exact path={navlinks[3].url}>
                <div name="cards" className="card-container">
                  <Cases />
                </div>
              </Route>
              {/* Accordion Route */}
              <Route exact path={navlinks[4].url}>
                <div name="inputs" className="grid-container">
                  <Accordions />
                </div>
              </Route>

              {/* Tabs Route */}
              <Route exact path={navlinks[5].url}>
                <div name="inputs" className="card-container">
                  <TabsComponents name="page" />
                </div>
              </Route>
            </Switch>
          </div>
          {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
          <FAB data={actionData} />
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;

