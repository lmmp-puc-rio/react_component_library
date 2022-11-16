import React, { useContext, useEffect } from "react";
import {
  SlidingPanel,
  TabsComponent,
  RecursiveAccordion,
  ActionFabGrid,
} from "../components/common";
import { ActionFabGridContext } from "../contexts/ActionFabGridContext";

import Plot from "react-plotly.js";
import { darkColors } from "../components/common/MaterialColors";

function GeometriaExterna(props) {
  const { rows, setRows } = useContext(ActionFabGridContext);

  const rowsPrevCoating = [
    {
      id: 1,
      MD: "5321.09",
      CSegment: "3432.09",
      OD: "10 3/4",
      ID: "9156",
      selected: false,
    },
    {
      id: 2,
      MD: "5321.09",
      CSegment: "3432.09",
      OD: "10 3/4",
      ID: "9156",
      selected: false,
    },
  ];

  const rowsOpenWell = [
    {
      id: 1,
      MD: "1 321",
      CSegment: "1 321",
      ID: "8 1/2",
      selected: false,
    },
    {
      id: 2,
      MD: "1 321",
      CSegment: "1 321",
      ID: "8 1/2",
      selected: false,
    },
  ];

  const rowsWorkColumn = [
    {
      id: 1,
      MD: "5 321.09",
      CSegment: "3 432.09",
      OD: "7",
      ID: "0",
      selected: false,
    },
    {
      id: 2,
      MD: "5 321.09",
      CSegment: "3 432.09",
      OD: "7",
      ID: "0",
      selected: false,
    },
  ];

  const rowsCoating = [
    {
      id: 1,
      MD: "5 321.09",
      CSegment: "3 432.09",
      OD: "7",
      ID: "0",
      selected: false,
    },
    {
      id: 2,
      MD: "5 321.09",
      CSegment: "3 432.09",
      OD: "7",
      ID: "0",
      selected: false,
    },
  ];

  const rowsCentralization = [
    {
      id: 1,
      /* ID: "1", */
      Central: "1",
      OD: "12 1/4",
      Tipo: "Flexível",
      selected: false,
    },
    {
      id: 2,
      /* ID: "2", */
      Central: "2",
      OD: "12 1/4",
      Tipo: "Flexível",
      selected: false,
    },
  ];

  const rowsCenterIntervals = [
    {
      id: 1,
      Topo: "5231.09",
      Base: "3432.09",
      NumCentr: "0",
      CentrJunta: "LALALA",
      Central: "Lalala",
      selected: false,
    },
    {
      id: 2,
      Topo: "5231.09",
      Base: "3432.09",
      NumCentr: "0",
      CentrJunta: "LALALA",
      Central: "Lalala",
      selected: false,
    },
  ];

  /* To set rows according tabs names */
  useEffect(() => {
    if (tabsExternalGeometry[0] === "Revestimento Anterior") {
      setRows(rowsPrevCoating);
    } else if (tabsExternalGeometry[1] === "Poço Aberto") {
      setRows(rowsOpenWell);
    }
  }, []);

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

  /* Filter bringing all tabs names */
  const tabsExternalGeometry = dataTab1.map((index) => index.name);
  const tabsInternalGeometry = dataTab2.map((index) => index.name);
  const tabsCentralization = dataTab3.map((index) => index.name);
  console.log(tabsCentralization);
  console.log(tabsInternalGeometry);
  console.log(tabsExternalGeometry);

  {
    /*Grid Data*/
  }
  const headersPrevCoating = {
    header: [
      { key: "MD", label: "MD (m)", expandable: false },
      { key: "CSegment", label: "Comp. do Segmento (m)", expandable: false },
      { key: "OD", label: "OD (pol)", expandable: true },
      { key: "ID", label: "ID (pol)", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const headersOpenWell = {
    header: [
      { key: "MD", label: "MD (m)", expandable: false },
      {
        key: "CSegment",
        label: "Comp. do Segmento (m)",
        expandable: false,
      },
      { key: "ID", label: "ID (pol)", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const headersColumn = {
    header: [
      { key: "MD", label: "MD (m)", expandable: false },
      {
        key: "CSegment",
        label: "Comp. do Segmento (m)",
        expandable: false,
      },
      { key: "OD", label: "OD (pol)", expandable: true },
      { key: "ID", label: "ID (pol)", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const headersCoating = {
    header: [
      { key: "MD", label: "MD(m)", expandable: false },
      {
        key: "CSegment",
        label: "Comp. do Segmento (m)",
        expandable: false,
      },
      { key: "OD", label: "OD (pol)", expandable: true },
      { key: "ID", label: "ID (pol)", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const headersCentralization = {
    header: [
      /* { key: "ID", label: "ID", expandable: false }, */
      { key: "Central", label: "Centralizador", expandable: false },
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

  const headersCenterInterval = {
    header: [
      /* { key: "ID", label: "ID", expandable: false }, */
      { key: "Topo", label: "Topo (m)", expandable: false },
      { key: "Base", label: "Base (m)", expandable: true },
      { key: "NumCentr", label: "Núm. centr.", expandable: true },
      { key: "CentrJunta", label: "Centr. / Junta", expandable: true },
      { key: "Central", label: "Centralizador", expandable: true },
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
      <h3>Geometria Externa</h3>
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
                  <ActionFabGrid metaData={headersPrevCoating} />
                </div>
                <div key={"Poço Aberto"}>
                  <ActionFabGrid metaData={headersOpenWell} />
                </div>
              </TabsComponent>
            </div>

            <div key={2} className="accordion_dropdown_item">
              <TabsComponent data={dataTab2}>
                <div key={"Coluna de Trabalho"}>
                  <ActionFabGrid metaData={headersColumn} />
                </div>
                <div key={"Revestimento"}>
                  <ActionFabGrid metaData={headersCoating} />
                </div>
              </TabsComponent>
            </div>

            <div key={3} className="accordion_dropdown_item">
              <TabsComponent data={dataTab3}>
                <div key={"Centralizadores"}>
                  <ActionFabGrid metaData={headersCentralization} />
                </div>
                <div key={"Intervalos de Centralizadores"}>
                  <ActionFabGrid metaData={headersCenterInterval} />
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
}

export default GeometriaExterna;
