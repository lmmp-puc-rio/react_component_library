// #  Main Imports
import React, { useState } from "react";

// #  Local SubComponents & utils
import {
  ActionFabGrid,
  SlidingPanel,
  TabsComponent,
  RecursiveAccordion,
} from "../components/common";

import Plot from "react-plotly.js";

// # Import Component Style
import "./pages.css";
import { darkColors } from "../components/common";

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
  const dataTabFluidos = [
    {
      id: "Teste Fluidos 1",
      description: "Teste Fluidos 1",
      name: "Teste Fluidos 1",
    },
    {
      id: "Teste Fluidos 2",
      description: "Teste Fluidos 2",
      name: "Teste Fluidos 2",
    },
  ];

  const dataTabSequencia = [
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

  const metaDataAnular = {
    header: [
      { key: "ID", label: "ID", expandable: false },
      { key: "Fluido", label: "Fluido", expandable: true },
      { key: "Volume", label: "Volume (bbl)", expandable: true },
      { key: "Topo", label: "Topo", expandable: true },
      { key: "CompAnular", label: "Comp. do anular (m)", expandable: true },
      { key: "Entrada", label: "Entrada", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const metaDataDeslocamento = {
    header: [
      { key: "ID", label: "ID", expandable: false },
      { key: "Fluido", label: "Fluido", expandable: true },
      { key: "Volume", label: "Volume (bbl)", expandable: true },
      { key: "Topo", label: "Topo", expandable: true },
      { key: "CompAnular", label: "Comp. do anular (m)", expandable: true },
      { key: "Entrada", label: "Entrada", expandable: true },
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
  const route = "/pumpsequence";

  return (
    <div className="page" style={{ color: "black" }}>
      <h2>Sequência de Bombeio</h2>
      <div>
        <h3>Sequência de Fluidos</h3>
      </div>
      <div>
        <h3>Vazão de Bombeio</h3>
        <Plot data={graph} />
      </div>

      <SlidingPanel>
        <ul>
          {/*Component Accordion*/}
          <RecursiveAccordion
            key={"accordion_0"}
            accordionData={slidinPanelAccordionData}
          >
            {/* Multiple Children is needed! */}
            <div key={1} className="accordion_dropdown_item">
              <TabsComponent data={dataTabFluidos}>
                <div key={"Teste Fluidos 1"}>Teste Fluidos 1</div>
                <div key={"Teste Fluidos 2"}>Teste Fluidos 2</div>
              </TabsComponent>
            </div>
            {/* 
            <div key={2} className="accordion_dropdown_item">
              <TabsComponent data={dataTabFluidos}>
                <div key={"Coluna de Trabalho"}>Teste Coluna</div>
                <div key={"Revestimento"}>Teste Revestimento</div>
              </TabsComponent>
            </div> */}

            <div key={2} className="accordion_dropdown_item">
              <TabsComponent data={dataTabSequencia}>
                <div key={"Fluidos no anular"}>
                  <ActionFabGrid metaData={metaDataAnular} />
                </div>
                <div key={"Fluidos de deslocamento"}>
                  <ActionFabGrid metaData={metaDataDeslocamento} />
                </div>
              </TabsComponent>
            </div>

            {/* <div key={4} className="accordion_dropdown_item">
              <p>in dev</p>
            </div> */}
          </RecursiveAccordion>
        </ul>
      </SlidingPanel>
    </div>
  );
};

export default PumpSequence;
