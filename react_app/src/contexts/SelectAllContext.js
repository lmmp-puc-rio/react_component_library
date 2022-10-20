import React, { createContext,  useState } from 'react';

// Create Context Object
const SelectAllContext = createContext();

// Hook
export default function useSelect() {
  // Selected States
  const [isSelectChecked,setSelectChecked ] = useState(false);
    
  return { isSelectChecked, setSelectChecked };
}

// Specific Context Provider
function SelectAllProvider({ children }) {

  const { isSelectChecked, setSelectChecked } = useSelect();

  return (
    <SelectAllContext.Provider value={{ isSelectChecked, setSelectChecked }}>
      {children}
    </SelectAllContext.Provider>
  );
}


export { SelectAllContext, SelectAllProvider };