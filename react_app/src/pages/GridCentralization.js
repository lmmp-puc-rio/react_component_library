// #  Main Imports
import React, { useEffect, useState, useContext } from "react";

// #  Local SubComponents & utils
import {
  ActionFabGrid,
  SlidingPanel,
  TabsComponent,
} from "../components/common";

// # Import Component Style
import "./pages.css";
import { darkColors } from "../components/common/MaterialColors";

const GridCentralization = (props) => {
  //TODO: Bring all dynamic data from the API
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
        <TabsComponent data={dataForTab}>
          <div key={"Centralizadores"}>
            <ActionFabGrid metaData={metaDataCentral} />
          </div>
          <div key={"Intervalos de Centralização"}>
            <ActionFabGrid metaData={metaDataInterval} />
          </div>
        </TabsComponent>
      </SlidingPanel>
    </div>
  );
};
export default GridCentralization;
