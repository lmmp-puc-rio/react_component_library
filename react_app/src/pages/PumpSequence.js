// #  Main Imports
import React, { useState } from "react";

// #  Local SubComponents & utils
import {
  SlidingPanel,
  TabsComponent,
  RecursiveAccordion,
  ActionFabGrid,
  ExpandableGrid,
  FAB,
  GridForm,
} from "../components/common";

import {} from "../components/common";
import Plot from "react-plotly.js";

// # Import Component Style
import "./pages.css";
import { darkColors, lightColors } from "../components/common";

const PumpSequence = (props) => {
  {
    /*plot Data*/
  }
  const graph = [
    {
      x: [0, 10],
      y: [8, 8],
      //type change the mode graph
      type: "scratter",
      mode: "lines",
      fill: "tozeroy",
    },
    {
      x: [6, 8, 7],
      y: [5, 5, 7],
      //type change the mode graph
      type: "bar",
      mode: "lines",
      fill: "tozeroy",
    },
    {
      x: [0, 10],
      y: [3, 3],
      //type change the mode graph
      type: "scatter",
      mode: "line",
      fill: "tozeroy",
    },
  ];

  {
    /*Accordion Data*/
  }
  const slidinPanelAccordionData = [
    {
      main: "Fluidos",
      id: "1",
      hidden: "",
      actions: [],
      subitems: [],
    },
    {
      main: "Sequência de Fluidos",
      id: "2",
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
      id: "",
      description: "",
      name: "",
    },
    {
      id: "",
      description: "",
      name: "",
    },
  ];

  const dataTab2 = [
    {
      id: "Fluidos no anular",
      description: "Fluidos no anular",
      name: "Fluidos no anular",
    },
    {
      id: "Fluidos de deslocamento",
      description: "Fluidos de deslocamento",
      name: "Fluidos de deslocamento",
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

  return (
    <>
      <h2>Sequência de Bombeio</h2>
      <div>gráfico renderizado</div>
      <Plot data={graph} />

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
              <TabsComponent data={dataTab3}>
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
    </>
  );
};

export default PumpSequence;
