import React, { createContext,  useState } from 'react';

// Create Context Object
const AccordionSmallFrameContext = createContext();

// Hook
export default function useModal() {
  // ActiveName at AccordionSmallFrame
  const [activeName, setActiveName] = useState();
    
  return { activeName, setActiveName};
}

// Specific Context Provider
function AccordionSmallFrameProvider({ children }) {

  const { activeName, setActiveName } = useModal();

  return (
    <AccordionSmallFrameContext.Provider value={{ activeName, setActiveName }}>
      {children}
    </AccordionSmallFrameContext.Provider>
  );
}


export {AccordionSmallFrameContext, AccordionSmallFrameProvider };