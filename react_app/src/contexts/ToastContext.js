import React, { createContext,  useState } from 'react';
import { showToast } from '../common/toast/possibleAlerts';

// Create Context Object
const ToastContext = createContext();

// Hook
export default function useToast() {
  // Toast states
  const [toastList,setToastList ] = useState([]);
    
  return { toastList, setToastList, showToast };
}

// Specific Context Provider
function ToastProvider({ children }) {

  const { toastList, setToastList, showToast } = useToast();

  return (
    <ToastContext.Provider value={{ toastList, setToastList, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}


export { ToastContext, ToastProvider };