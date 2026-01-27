import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../contexts/Sidebar'
import AdminMainHeader from './AdminMainHeader'
import Footer from './Footer'
import PatientMainHeader from './PatientMainHeader'
function PatientLayout() {

  return(
    <>
    <div className={`flex`}>
    <SidebarProvider>
      <PatientMainHeader/>
        <div className={`flex-1`}>
          <Outlet/>
          <Footer/>
        </div>
    </SidebarProvider>
    </div>
    
    </>
  )
}

export default PatientLayout