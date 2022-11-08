// #  Main Imports
import React, { useEffect, useState, useContext } from "react";

// #  Local SubComponents & utils
import {
  ActionFabGrid,
  SlidingPanel,
  TabsComponent,
  RecursiveAccordion,
} from "../components/common";

// # Import Component Style
import "./pages.css";
import { darkColors } from "../components/common/MaterialColors";

const GridCentralization = (props) => {
  //TODO: Bring all dynamic data from the API
  {
    /*Accordion Data*/
  }
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

  {
    /*Tab Data*/
  }
  const dataTab1 = [
    {
      id: "Revestimento Anterior",
      description: "Revestimento Anterior",
      name: "Revestimento Anterior",
    },
    {
      id: "Poço Aberto",
      description: "Poço Aberto",
      name: "Poço Aberto",
    },
  ];
  const dataTab2 = [
    {
      id: "Coluna de Trabalho",
      description: "Coluna de Trabalho",
      name: "Coluna de Trabalho",
    },
    {
      id: "Revestimento",
      description: "Revestimento",
      name: "Revestimento",
    },
  ];

  const dataTab3 = [
    {
      id: "Centralizadores",
      description: "Centralizadores",
      name: "Centralizadores",
    },
    {
      id: "Intervalos de Centralizadores",
      description: "Intervalos de Centralizadores",
      name: "Intervalos de Centralizadores",
    },
  ];

  const dataForTab = [
    {
      id: "Centralizadores",
      description: "Centralizadores",
      name: "Centralizadores",
    },
    {
      id: "Intervalos de Centralização",
      description: "Intervalos de Centralização",
      name: "Intervalos de Centralização",
    },
  ];

  const metaDataCentral = {
    header: [
      { key: "ID", label: "ID", expandable: false },
      { key: "Centralizador", label: "Flexível", expandable: true },
      { key: "OD", label: "OD (m)", expandable: true },
      { key: "Tipo", label: "Tipo", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const metaDataInterval = {
    header: [
      { key: "ID", label: "ID", expandable: false },
      { key: "Topo", label: "Topo(m)", expandable: true },
      { key: "Base", label: "Base(m)", expandable: true },
      { key: "NumCentr", label: "Núm. centr.", expandable: true },
      { key: "CentrJunta", label: "Centr / Junta", expandable: true },
      { key: "Centralizador", label: "Centralizador", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };
  // Route
  const route = "/centralization";

  return (
    <div className="page" style={{ color: "black" }}>
      <SlidingPanel>
        <ul>
          {/*Component Accordion*/}
          <RecursiveAccordion
            key={"accordion_0"}
            accordionData={slidinPanelAccordionData}
          >
            {/* Multiple Children is needed! */}

            <div key={1} className="accordion_dropdown_item">
              <TabsComponent data={dataTab1}>
                <div key={"Revestimento Anterior"}>
                  Teste Revestimento Anterior
                </div>
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
              <TabsComponent data={dataForTab}>
                <div key={"Centralizadores"}>
                  <ActionFabGrid metaData={metaDataCentral} />
                </div>
                <div key={"Intervalos de Centralização"}>
                  <ActionFabGrid metaData={metaDataInterval} />
                </div>
              </TabsComponent>
            </div>

            <div key={4} className="accordion_dropdown_item">
              <p>in dev</p>
            </div>
          </RecursiveAccordion>
        </ul>
      </SlidingPanel>
    </div>
  );
};
export default GridCentralization;
