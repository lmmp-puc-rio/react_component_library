// Main import of React
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import "./App.css";
import { CaseDeletionConfirmation, CaseAdvancedForm } from "./pages/popups";

// All Components import

import {
  Header,
  SlidingPanel,
  SideMenu,
  FAB, //ActionButton,  Action, // Last two only needed for manual creation of items
  ImportData,
  Modal,
  darkColors,
  lightColors,
  TabsComponent,
  RecursiveAccordion,
} from "./components/common";

// All Pages Import

import {
  Grids,
  Projects,
  Cases,
  Accordions,
  TabsComponents,
  Tree,
  DynamicForm,
  PumpSequencePlotly,
  Rheometry,
  Centralization,
  GeometriaExterna,
  PumpSequence,
  Slides,
  GraphicObjectsChart,
  BasicAndAdvancedForm,
} from "./pages";

// All Contexts Import
// import { AuthProvider } from './components/contexts/AuthContext';
// import { ToastProvider } from './components/contexts/ToastContext';
import { ModalProvider } from "./contexts/ModalContext";
import { SearchProvider } from "./contexts/SearchContext";
import { ActionFabGridProvider } from "./contexts/ActionFabGridContext";

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
    { url: "/Tree", title: "Tree", className: "navbar-item" },
    {
      url: "/pumpSequencePlotly",
      title: "PumpSequence-Plotly",
      className: "navbar-item",
    },
    { url: "/form", title: "Form", className: "navbar-item" },
    { url: "/rheometry", title: "Rheometry", className: "navbar-item" },
    {
      url: "/centralizationPlotly",
      title: "Centralization-Plotly",
      className: "navbar-item",
    },
    {
      url: "/GeometriaExterna",
      title: "GeometriaExterna",
      className: "navbar-item",
    },
    { url: "/pumpsequence", title: "Pump", className: "navbar-item" },
    { url: "/Slides", title: "Slides", className: "navbar-item" },
    {
      url: "/GraphicObjects",
      title: "GraphicObjects",
      className: "navbar-item",
    },
    {
      url: "/BasicAndAdvancedForm",
      title: "BasicAndAdvancedForm",
      className: "navbar-item",
    },
    { url: "/help", title: "Help", className: "navbar-item" },
  ];

  const actionData = {
    actionButtom: {
      tootip: "Grupo de Ações",
      icon: "fas fa-plus",
      rotate: true,
      backgroundColor: darkColors.blue,
      color: lightColors.white,
      /* Direction: Array responsible for determining the opening position of the button */
      direction: [
        "fab-container-up",
        "fab-container-down",
        "fab-container-left",
        "fab-container-right",
      ],
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

  {
    /*     /Accordion Data/ */
  }
  const dataStructure = [
    {
      main: "Entrada de dados",
      id: "1",
      hidden: "",
      actions: [],
      subitems: [],
    },
    {
      main: "Resultados",
      id: "2",
      hidden: "",
      actions: [],
      subitems: [],
    },
  ];

  const slidinPanelAccordionData = [
    {
      main: "Geometria Externa",
      id: "1",
      hidden: "",
      actions: [],
      subitems: [],
    },
    {
      main: "Geometria Interna",
      id: "2",
      hidden: "",
      actions: [],
      subitems: [],
    },
    {
      main: "Centralização",
      id: "3",
      hidden: "",
      actions: [],
      subitems: [],
    },
    {
      main: "Trajetória",
      id: "4",
      hidden: "",
      actions: [],
      subitems: [],
    },
  ];

  return (
    // React Browser Router
    <Router>
      <ModalProvider>
        <SearchProvider>
          <Header navlinks={navlinks} mail={"info@difsolutions.com"} />
          <div name="app" className="App">
            <div name="main" className="main">
              <Switch>
                {/* Main page Route */}
                <Route exact path="/">
                  <div className="scope" style={{ color: "white" }}>
                    Main Page
                  </div>
                  <ImportData />
                </Route>
                {/* Grids Route */}
                <Route exact path={navlinks[1].url}>
                  <ActionFabGridProvider>
                    <div name="inputs" className="grid-container">
                      <Grids />
                    </div>
                  </ActionFabGridProvider>
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

                {/* Tree Route */}
                <Route exact path={navlinks[6].url}>
                  <div name="inputs" className="card-container">
                    <Tree />
                  </div>
                </Route>

                {/* Plotly Route */}
                <Route exact path={navlinks[7].url}>
                  <div name="inputs" className="card-container">
                    <PumpSequencePlotly />
                  </div>
                </Route>

                {/* Form Route */}
                <Route exact path={navlinks[8].url}>
                  <div name="inputs" className="card-container">
                    <DynamicForm />
                  </div>
                </Route>

                {/* Rheometry Route */}
                <Route exact path={navlinks[9].url}>
                  <ActionFabGridProvider>
                    <div name="inputs" className="card-container">
                      <Rheometry />
                    </div>
                  </ActionFabGridProvider>
                </Route>

                {/* Centralization Route */}
                <Route exact path={navlinks[10].url}>
                  <div name="inputs" className="card-container">
                    <Centralization />
                  </div>
                </Route>

                {/* Geometria Externa Route */}
                <Route exact path={navlinks[11].url}>
                  <ActionFabGridProvider>
                    <div name="inputs" className="card-container">
                      <GeometriaExterna />
                    </div>
                  </ActionFabGridProvider>
                </Route>

                {/* Pump Sequence Route */}
                <Route exact path={navlinks[12].url}>
                  <ActionFabGridProvider>
                    <div name="inputs" className="card-container">
                      <PumpSequence />
                    </div>
                  </ActionFabGridProvider>
                </Route>
                {/* ActionFabGrid Route */}
                <Route exact path={navlinks[13].url}>
                  <ActionFabGridProvider>
                    <div name="inputs" className="card-container">
                      <Slides />
                    </div>
                  </ActionFabGridProvider>
                </Route>
                {/* Graphic Objects Route */}
                <Route exact path={navlinks[14].url}>
                  <div name="inputs" className="card-container">
                    <GraphicObjectsChart />
                  </div>
                </Route>
                {/* Basic Advanced Route */}
                <Route exact path={navlinks[15].url}>
                  <div name="inputs" className="card-container">
                    <BasicAndAdvancedForm />
                  </div>
                </Route>
              </Switch>
              <Route exact path={"/cases/delete/:id"}>
                <Modal cancelURL={"/cases"}>
                  <CaseDeletionConfirmation />
                </Modal>
              </Route>
              <Route exact path={"/BasicAndAdvancedForm"}>
                <Modal cancelURL={navlinks[15].url}>
                  <CaseAdvancedForm />
                </Modal>
              </Route>
            </div>
            {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
            {/*   <FAB data={actionData} /> */}
          </div>
        </SearchProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
