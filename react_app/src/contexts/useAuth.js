import { useState, useEffect } from 'react';


export default function useAuth() {

  // Get Token from Local Storage
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect((token) => {

    if (token && token !== "" && token !== undefined) {
      // Re-set Token for refresh on component mount
      setToken(token);
    }}, []);
  
  // Handle Login Function
  async function handleLogin(token) {
    localStorage.setItem('token', token);
    // Set Token
    setToken(token);
    
  }

  // Handle Logout Function
  function handleLogout() {

    // Revoque Token
    setToken(undefined);
    localStorage.removeItem('token');    
  }
  
  // return { authenticated, handleLogin, handleLogout, token };
  return { handleLogin, handleLogout, token };
}