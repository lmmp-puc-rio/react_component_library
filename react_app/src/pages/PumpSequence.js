// #  Main Imports
import React, { useContext, useEffect } from "react";

// #  Local SubComponents & utils
import {
  SlidingPanel,
  RecursiveAccordion,
  TabsComponent,
  ActionFabGrid,
  FluidSelect,
} from "../components/common";
import { ActionFabGridContext } from "../contexts/ActionFabGridContext";

// # Import Component Style
//import "./pages.css";
import { darkColors } from "../components/common/MaterialColors";

function PumpSequence(props) {
  const { setRows } = useContext(ActionFabGridContext);

  const rowsAnnular = [
    {
      id: 1,
      Fluido: "FPBNA",
      Volume: "100",
      Topo: "636.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 2,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
  ];

  const rowsDisplacementFluids = [
    {
      id: 1,
      Fluido: "FPBNA",
      Volume: "100",
      Topo: "636.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 2,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "1136.8",
      CompAnular: "384.4",
      Entrada: "Topo",
      selected: false,
    },
  ];

  /* To set rows according tabs names */
  useEffect(() => {
    if (tabsFluidSequence[0] === "Fluidos no anular") {
      setRows(rowsAnnular);
    } else if (tabsFluidSequence[1] === "Fluidos de deslocamento") {
      setRows(rowsDisplacementFluids);
    }
  }, []);

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

  /* Filter bringing all tabs names */
  const tabsFluids = dataTabFluidos.map((index) => index.name);
  const tabsFluidSequence = dataTabSequencia.map((index) => index.name);

  {
    /*Grid Data*/
  }
  const headersAnnular = {
    header: [
      { key: "Fluido", label: "Fluido", expandable: false },
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

  const headersDisplacement = {
    header: [
      { key: "Fluido", label: "Fluido", expandable: false },
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

  return (
    <>
      <h2>Sequência de Bombeio</h2>
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

            <div key={2} className="accordion_dropdown_item">
              <FluidSelect />
              <TabsComponent data={dataTabSequencia}>
                <div key={"Fluidos no anular"}>
                  <ActionFabGrid metaData={headersAnnular} />
                </div>
                <div key={"Fluidos de deslocamento"}>
                  <ActionFabGrid metaData={headersDisplacement} />
                </div>
              </TabsComponent>
            </div>
          </RecursiveAccordion>
        </ul>
      </SlidingPanel>
    </>
  );
}

export default PumpSequence;
