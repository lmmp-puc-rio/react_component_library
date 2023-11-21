import React, { createContext, useState } from "react";

// Create Context Object
const HistoryContext = createContext();

// Hook
export default function useHistory() {
  // History States
  const [historyLocation, setHistoryLocation] = useState();

  const [hasChange, setHasChange] = useState();

  return { historyLocation, setHistoryLocation, hasChange, setHasChange };
}

// Specific Context Provider
function HistoryProvider({ children }) {
  const { historyLocation, setHistoryLocation, hasChange, setHasChange } = useHistory();

  return (
    <HistoryContext.Provider
      value={{ historyLocation, setHistoryLocation, hasChange, setHasChange }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryContext, HistoryProvider };
