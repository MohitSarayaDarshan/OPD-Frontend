import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../contexts/Sidebar'
import AdminMainHeader from './AdminMainHeader'
import Footer from './Footer'
import Navbar from './Navbar'
function AdminLayout() {

  return(
    <>
    <div className={`flex`}>
    
    <SidebarProvider>
      <Navbar/>
      <AdminMainHeader/>
      <div className={`flex-1 mt-10`}>
        <Outlet/>
        <Footer/>
      </div>
    </SidebarProvider>
    </div>
    
    </>
  )
}

export default AdminLayout