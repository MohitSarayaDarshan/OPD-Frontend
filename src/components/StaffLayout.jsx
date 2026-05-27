import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../contexts/Sidebar'
import AdminMainHeader from './AdminMainHeader'
import StaffMainHeader from './StaffMainHeader'
import Footer from './Footer'
import Navbar from './Navbar'
function StaffLayout() {

  return(
    <>
    <div className={`flex`}>
    <SidebarProvider>
      <Navbar/>
      <StaffMainHeader/>
      <div className={`flex-1 mt-10`}>
        <Outlet/>
        <Footer/>
      </div>
    </SidebarProvider>
    </div>
    </>
  )
}

export default StaffLayout