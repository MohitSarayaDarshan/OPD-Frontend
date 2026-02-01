import React, { Activity } from 'react'
import { Header, SidebarItem } from './Header'
import { ActivityIcon, AlertCircle, Clipboard, ClipboardList, DoorOpen, File, FileArchiveIcon, FileLineChart, Hospital, LayoutDashboard, LucideActivity, Receipt, UserCheck, UserCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { OutpatientDepartment } from 'healthicons-react'


function StaffMainHeader() {
  return (
    <>
        <Header>
            <Link to='/staff/dashboard'><SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" /></Link>  
            
            <Link to='/staff/getAllReceipts'><SidebarItem icon={<ClipboardList size={20}/>} text="Receipt" /></Link>
        </Header>
        
    </>
  )
}

export default StaffMainHeader