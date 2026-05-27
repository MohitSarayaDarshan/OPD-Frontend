import React, { Activity } from 'react'
import { Header, SidebarItem } from './Header'
import { ActivityIcon, AlertCircle, CalendarCheck, Clipboard, ClipboardList, DoorOpen, File, FileArchiveIcon, FileLineChart, Hospital, LayoutDashboard, LucideActivity, Receipt, UserCheck, UserCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { OutpatientDepartment } from 'healthicons-react'


function StaffMainHeader() {
  return (
    <>
        <Header>
            <Link to='/staff/dashboard'><SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" /></Link>  
            <Link to='/staff/getAllReceipts'><SidebarItem icon={<ClipboardList size={20}/>} text="Receipt" /></Link>
            <Link to='/staff/getAllPatients'><SidebarItem icon={<Users size={20}/>} text="Patients" /></Link>
            <Link to='/staff/getAllOPDs'><SidebarItem icon={<Clipboard size={20}/>} text="OPD" /></Link>
            <Link to='/staff/appointments'><SidebarItem icon={<CalendarCheck size={20} />} text="Appointments" /></Link>
        </Header>
        
    </>
  )
}

export default StaffMainHeader