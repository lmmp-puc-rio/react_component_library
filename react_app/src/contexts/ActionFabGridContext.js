import React, { createContext, useState, useEffect } from "react";

// # Import data of Rows
import { dataRows, RevestimentoAnteriorData } from "../data/rows";

// Create Context Object
const ActionFabGridContext = createContext();

// Hook
export default function useSelect() {
  // Selected States
  const [isSelectAllChecked, setSelectAllChecked] = useState(false);
  const [countSelectRows, setCountSelectRows] = useState("");
  const [rows, setRows] = useState([]);

  // Function responsible for bringing all Rows
  function getRows() {
    const rowsResponse = RevestimentoAnteriorData;
    setRows([...rowsResponse]);
  }

  useEffect(() => {
    getRows();
  }, []);

  return {
    isSelectAllChecked,
    setSelectAllChecked,
    countSelectRows,
    setCountSelectRows,
    rows,
    setRows,
  };
}

// Specific Context Provider
function ActionFabGridProvider({ children }) {
  const {
    isSelectAllChecked,
    setSelectAllChecked,
    countSelectRows,
    setCountSelectRows,
    rows,
    setRows,
  } = useSelect();

  return (
    <ActionFabGridContext.Provider
      value={{
        isSelectAllChecked,
        setSelectAllChecked,
        countSelectRows,
        setCountSelectRows,
        rows,
        setRows,
      }}
    >
      {children}
    </ActionFabGridContext.Provider>
  );
}

export { ActionFabGridContext, ActionFabGridProvider };
