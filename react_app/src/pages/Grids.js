// #  Main Imports
import React, { useEffect, useState } from "react";

// #  Local SubComponents & utils
import { ActionFabGrid, GridForm } from "../components/common";

// # Import Component Style
import "./pages.css";
import { darkColors } from "../components/common/MaterialColors";

const Grids = (props) => {
  //TODO: Bring all dynamic data from the API
  const conversionFactors = {
    lenght: { km: 1000, cm: 1 / 100, mm: 1 / 1000, um: 1 / 1000000, m: 1 },
    pressure: { psi: 0.000145038, mmHg: 0.00750062, Pa: 1 },
  };

  const formData = {
    gap: {
      label: "Gap:",
      defaultValue: "0",
      unitType: "lenght",
      selectecUnit: "mm",
    },
    size: {
      label: "Size:",
      defaultValue: "0",
      unitType: "lenght",
      selectecUnit: "cm",
    },
    p0: {
      label: "Inlet Pressure:",
      defaultValue: "0",
      unitType: "pressure",
      selectecUnit: "psi",
    },
  };

  
 /* Header - ActionFabGrid */
  const metaData = {
    header: [
      { key: "id", label: "ID", expandable: false },
      { key: "name", label: "Name", expandable: false },
      { key: "desc", label: "Description", expandable: true },
      { key: "created", label: "Created", expandable: true },
      { key: "modified", label: "Modified", expandable: true },
      { key: "lastrun", label: "Last Run", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  /* States to control ActionFabGrid */
  const [isSelectAllChecked, setSelectAllChecked] = useState(false);
  const [countSelectRows, setCountSelectRows] = useState("");
  const [rows, setRows] = useState([]);

  // Route
  const route = "/grids";

  return (
    <div className="page" style={{ color: "black" }}>
      <legend className="pages-title"> GridForm </legend>
      {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
      <GridForm data={formData} conversionFactors={conversionFactors} />
      <legend className="pages-title"> ExpandableGrid and Fab </legend>
      <ActionFabGrid
        metaData={metaData}
        isSelectAllChecked={isSelectAllChecked}
        setSelectAllChecked={setSelectAllChecked}
        countSelectRows={countSelectRows}
        setCountSelectRows={setCountSelectRows}
        rows={rows}
        setRows={setRows}
      />
    </div>
  );
};

export default Grids;
