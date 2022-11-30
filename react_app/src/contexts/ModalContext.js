import React, { createContext,  useState } from 'react';

// Create Context Object
const ModalContext = createContext();

// Hook
export default function useModal() {
  // Toast states
  const [isModalOpen,setIsModalOpen ] = useState(false);
    
  return { isModalOpen, setIsModalOpen };
}

// Specific Context Provider
function ModalProvider({ children }) {

  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}


export { ModalContext, ModalProvider };