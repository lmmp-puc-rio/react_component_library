// Main import of React
import React, { createContext,  useState } from 'react';

// Create Context Object
const FormsContext = createContext();

// Hook
export default function useModal() {


  // Values Forms States and Error States

  const [ valuesInfo, setValuesInfo ] = useState({});
  const [ errorInfo, setErrorInfo ] = useState(0);

  const [valuesScenery, setValuesScenery ] = useState({});
  const [errorScenery, setErrorScenery] = useState(0);

  return { valuesInfo, setValuesInfo,  errorInfo, setErrorInfo, valuesScenery, setValuesScenery, errorScenery, setErrorScenery };
    
}

// Specific Context Provider
function FormsProvider({ children }) {

  const { valuesInfo, setValuesInfo,  errorInfo, setErrorInfo, valuesScenery, setValuesScenery, errorScenery, setErrorScenery } = useModal();

  return (
    < FormsContext.Provider value={{ valuesInfo, setValuesInfo,  errorInfo, setErrorInfo, valuesScenery, setValuesScenery, errorScenery, setErrorScenery }}>
      {children}
    </ FormsContext.Provider>
  );
}



export { FormsContext, FormsProvider };