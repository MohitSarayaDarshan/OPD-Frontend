import React, { createContext, useState } from 'react'

export const SidebarContext=createContext();

export function SidebarProvider({children}) {

  const[expanded,setExpanded]=useState(false);
  return (
    
      <SidebarContext.Provider value={{expanded,setExpanded}}>
          {children}
      </SidebarContext.Provider>
    ) 
}