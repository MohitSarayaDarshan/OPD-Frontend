import React from 'react'
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext=createContext(null)


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/me", {
      credentials: 'include' // VERY important for sessions
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setUser((data.data)[0]);
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}