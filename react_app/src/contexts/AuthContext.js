import React, { createContext, useEffect } from 'react';

import useAuth from './useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, handleLogin, handleLogout, token
  } = useAuth();


  // update token from localStorage
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token && token !== "" && token !== undefined) {
      localStorage.setItem('token', token)
      }
    }, []);

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin, handleLogout ,token}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };