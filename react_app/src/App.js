// Main import of React
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Theme importv #TODO
// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme'
import "./App.css";

// All Components import

import { Header, SlidingPanel, SideMenu,
        FAB, //ActionButton,  Action, // Last two only needed for manual creation of items
        darkColors, lightColors, TabsComponent,RecursiveAccordion } from './components/common';

// All Pages Import
import { Grids, Projects, Cases, Accordions, TabsComponents,Tree} from './pages';


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
    {url: "/Tree" , title: "Tree", className: "navbar-item"},
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
      direction: ["fab-container-up", "fab-container-down", "fab-container-left", "fab-container-right"],
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

  {/*Accordion Data*/}
  const dataStructure = [
    {
        main: 'Entrada de dados',
        id: '1',
        hidden: '',
        actions: [],
        subitems: [],
    },
    {
        main: 'Resultados',
        id: '2',
        hidden: '',
        actions: [],
        subitems:[]
    },  
   ];

  const slidinPanelAccordionData = [
    {
        main: 'Geometria Externa',
        id: '1',
        hidden: '',
        actions: [],
        subitems: [],
    },
    {
        main: 'Geometria Interna',
        id: '2',
        hidden: '',
        actions: [],
        subitems:[]
    },
    {
      main: 'Centralização',
      id: '3',
      hidden: '',
      actions: [],
      subitems:[]
  },  
  {
    main: 'Trajetória',
    id: '4',
    hidden: '',
    actions: [],
    subitems:[]
},
   ];


   {/*Tabs Data */}
  const dataTab1=[
    {
      id : "Revestimento Anterior",
      description:"Revestimento Anterior",
      name:"Revestimento Anterior",
    },
    {
      id : "Poço Aberto",
      description:"Poço Aberto",
      name:"Poço Aberto",
    },  
  ]

  const dataTab2 =[
  {
    id : "Coluna de Trabalho",
    description:"Coluna de Trabalho",
    name:"Coluna de Trabalho",
  },
  {
    id : "Revestimento",
    description:"Revestimento",
    name:"Revestimento",
  },
  ]

const dataTab3 =[
  {
    id : "Centralizadores",
    description:"Centralizadores",
    name:"Centralizadores",
  },
  {
    id : "Intervalos de Centralizadores",
    description:"Intervalos de Centralizadores",
    name:"Intervalos de Centralizadores",
  },
]

return (
  // React Browser Router
  <Router>
    <SearchProvider>
      <div name="app" className="App">
      <SideMenu  onCollapse={(inactive) => {setInactive(inactive)}} >
        <RecursiveAccordion  key={"accordion_0"}
                      accordionData={dataStructure}>

              {/* Multiple Children is needed! */}
              <div key={1} className="accordion_dropdown_item">
                  Teste1
              </div>
              <div key={2} className="accordion_dropdown_item">
                  Teste2
              </div>
              <div key={2} className="accordion_dropdown_item">
                  Teste3
              </div>
          </RecursiveAccordion>
        </SideMenu>
        <SlidingPanel >
            <ul>
              {/*Component Accordion*/ }
              <RecursiveAccordion key={"accordion_0"}
                            accordionData={slidinPanelAccordionData}>

          
                    {/* Multiple Children is needed! */}
                    
                    <div key={1} className="accordion_dropdown_item">
                    <TabsComponent data={dataTab1}>
                      <div key={"Revestimento Anterior"}> Revestimento Anterior </div>
                      <div key={"Poço Aberto"}> Teste Poço Aberto</div>
                    </TabsComponent>
                    </div>

                    <div key={2} className="accordion_dropdown_item">

                    <TabsComponent data={dataTab2}>
                      <div key={"Coluna de Trabalho"}> Teste Coluna</div>
                      <div key={"Revestimento"}> Teste Revestimento</div>
                    </TabsComponent>
                    </div>
                    <div key={3} className="accordion_dropdown_item">
                    <TabsComponent data={dataTab3}>
                      <div key={"Centralizadores"}> Teste Centralizadores </div>
                      <div key={"Intervalos de Centralizadores"}> Teste Intervalo Centralizador</div>
                    </TabsComponent>
                    </div>
                    <div key={4} className="accordion_dropdown_item">
                      <p>in dev </p>
                    </div>
                    
                  </RecursiveAccordion>
                </ul>
            </SlidingPanel>
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

              {/* Tree Route */}
              <Route exact path={navlinks[6].url}>
                  <div name="inputs" className="card-container">
                    <Tree />
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

