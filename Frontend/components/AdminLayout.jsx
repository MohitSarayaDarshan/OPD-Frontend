import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../contexts/Sidebar'
import AdminMainHeader from './AdminMainHeader'
import Footer from './Footer'
import { ArrayProvider } from '../contexts/ArrayContext'
import { IndexProvider } from '../contexts/indexContext'

function AdminLayout() {

  return(
    
    <div className={`flex`}>
    <SidebarProvider>
      <AdminMainHeader/>
      <div className={`flex-1`}>
        <ArrayProvider>
          <IndexProvider>
            <Outlet/>
          </IndexProvider>
        </ArrayProvider>
        <Footer/>
      </div>  
    </SidebarProvider>
    </div>
    
  
  )
}

export default AdminLayout