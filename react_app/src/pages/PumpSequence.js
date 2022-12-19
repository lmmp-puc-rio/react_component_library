// #  Main Imports
import React, { useContext, useEffect, useState } from "react";

// #  Local SubComponents & utils
import {
  SlidingPanel,
  RecursiveAccordion,
  TabsComponent,
  ActionFabGrid,
  FluidSelect,
  Accordion,
  Tabs,
} from "../components/common";

// # Context
import { ActiveTabContext } from "../contexts/ActiveTabContext";

// # Import Component Style
import { darkColors } from "../components/common/MaterialColors";

function PumpSequence(props) {

  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

    /*Tabs Data*/
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
  
    const handleClick = (id) => {
      setActiveTab(id);
    };
  

  /* States to control Fluids Grid with FAB */
  const [isSelectAllCheckedFluids, setSelectAllCheckedFluids] = useState(false);
  const [countSelectRowsFluids, setCountSelectRowsFluids] = useState("");
  const [rowsFluids, setRowsFluids] = useState([]);

  /* States to control Anular Fluids Grid with FAB */
  const [isSelectAllCheckedAnular, setSelectAllCheckedAnular] = useState(false);
  const [countSelectRowsAnular, setCountSelectRowsAnular] = useState("");
  const [rowsAnular, setRowsAnular] = useState([]);

  /* States to control Displacement Fluids Grid with FAB */
  const [isSelectAllCheckedDisplacement, setSelectAllCheckedDisplacement] =
    useState(false);
  const [countSelectRowsDisplacement, setCountSelectRowsDisplacement] =
    useState("");
  const [rowsDisplacement, setRowsDisplacement] = useState([]);

  const rowsDataAnnular = [
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
    {
      id: 3,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 5,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 6,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 7,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 8,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 9,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 10,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 11,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 12,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 13,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
    {
      id: 14,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "836.8",
      CompAnular: "384.4",
      Entrada: "Volume",
      selected: false,
    },
  ];

  const rowsDataDisplacementFluids = [
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
    {
      id: 3,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "1136.8",
      CompAnular: "384.4",
      Entrada: "Topo",
      selected: false,
    },
    {
      id: 4,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "1136.8",
      CompAnular: "384.4",
      Entrada: "Topo",
      selected: false,
    },
    {
      id: 5,
      Fluido: "Colchão",
      Volume: "100",
      Topo: "1136.8",
      CompAnular: "384.4",
      Entrada: "Topo",
      selected: false,
    },
  ];

  {
    /* Header - Grid Data*/
  }

  const headersFluids = {
    header: [
      { key: "ID", label: "ID", expandable: true },
      { key: "Fluido", label: "Fluido", expandable: true },
      { key: "Cor", label: "Cor", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

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

  {
    /*Accordion Data*/
  }
  const accordionData = [
    {
      title: "Fluidos",
      id: "1",
    },
    {
      title: "Sequência de Fluidos",
      id: "2",
    },
  ];


  return (
    <>
      <h2>Sequência de Bombeio</h2>
      <SlidingPanel>
        <Accordion accordionData={accordionData}>
          <div key={1}>
            <ActionFabGrid
              metaData={headersFluids}
              isSelectAllChecked={isSelectAllCheckedFluids}
              setSelectAllChecked={setSelectAllCheckedFluids}
              countSelectRows={countSelectRowsFluids}
              setCountSelectRows={setCountSelectRowsFluids}
              rows={rowsFluids}
              setRows={setRowsFluids}
            />
          </div>
          <div key={2}>
            <FluidSelect />
            <Tabs
              data={dataTabSequencia}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              callback={handleClick}
            >
              <div key={"Fluidos no anular"}>
                <ActionFabGrid
                  metaData={headersAnnular}
                  isSelectAllChecked={isSelectAllCheckedAnular}
                  setSelectAllChecked={setSelectAllCheckedAnular}
                  countSelectRows={countSelectRowsAnular}
                  setCountSelectRows={setCountSelectRowsAnular}
                  rows={rowsDataAnnular}
                  setRows={setRowsAnular}
                />
              </div>
              <div key={"Fluidos de deslocamento"}>
                <ActionFabGrid
                  metaData={headersDisplacement}
                  isSelectAllChecked={isSelectAllCheckedDisplacement}
                  setSelectAllChecked={setSelectAllCheckedDisplacement}
                  countSelectRows={countSelectRowsDisplacement}
                  setCountSelectRows={setCountSelectRowsDisplacement}
                  rows={rowsDataDisplacementFluids}
                  setRows={setRowsDisplacement}
                />
              </div>
            </Tabs>
          </div>
        </Accordion>
      </SlidingPanel>
    </>
  );
}

export default PumpSequence;
