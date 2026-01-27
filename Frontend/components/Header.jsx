import React from 'react'
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { SidebarContext } from '../contexts/Sidebar'

function Header({children}) {


  const{expanded,setExpanded}=useContext(SidebarContext);
  
  return (
    <aside className={` h-screen ${expanded ? "w-64" : "w-16"} transition-all duration-500 ease-in-out fixed z-50` }>
      <nav className="h-full flex flex-col bg-white border-r shadow-lg">
        <div className="p-4 pb-2 flex justify-between items-center border-b border-gray-100">
          <img
            src="/OPD LOGO.png"
            className={`overflow-hidden transition-all duration-500 ${
              expanded ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-md"
          >
            {expanded ? <ChevronFirst className="transition-transform duration-300" /> : <ChevronLast className="transition-transform duration-300" />}
          </button>
        </div>

        
          <ul className="flex-1   px-3">{children}</ul>
       

        <div className="border-t border-gray-100 flex p-3 bg-gray-50/50">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md transition-transform duration-300 hover:scale-110 shadow-sm"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all duration-500 ${expanded ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-slate-800">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  )
}

function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-all duration-300 group
        transform hover:scale-105 active:scale-95
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 shadow-sm"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span
        className={`overflow-hidden transition-all duration-1000 ${
          expanded ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 animate-pulse-slow ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm whitespace-nowrap
          invisible opacity-0 -translate-x-3 transition-all duration-300
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          shadow-lg z-50
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
  


export  {Header,SidebarItem}