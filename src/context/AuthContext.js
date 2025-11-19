import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    // ✅ Load saved login info from localStorage (so refresh doesn’t log you out)
    return localStorage.getItem("userType") || null;
  });

  const login = (type) => {
    setUserType(type);
    localStorage.setItem("userType", type);
  };

  const logout = () => {
    setUserType(null);
    localStorage.removeItem("userType");
  };

  // Optional: just to sync across tabs
  useEffect(() => {
    const syncAuth = () => setUserType(localStorage.getItem("userType"));
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
