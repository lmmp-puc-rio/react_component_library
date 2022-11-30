import React, { createContext,  useState } from 'react';

// Create Context Object
const ActiveTabContext = createContext();

// Hook
export default function useModal() {
  // ActiveTab states
  const [activeTab, setActiveTab] = useState("tab1");
    
  return { activeTab, setActiveTab};
}

// Specific Context Provider
function ActiveTabProvider({ children }) {

  const { activeTab, setActiveTab } = useModal();

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}


export { ActiveTabContext, ActiveTabProvider };