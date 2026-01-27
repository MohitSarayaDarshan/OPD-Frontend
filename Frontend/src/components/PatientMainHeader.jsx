import React, { Activity } from 'react'
import { Header, SidebarItem } from './Header'
import { ActivityIcon, AlertCircle, Clipboard, ClipboardList, DoorOpen, File, FileArchiveIcon, FileLineChart, Hospital, LayoutDashboard, LucideActivity, Receipt, UserCheck, UserCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { OutpatientDepartment, PrescriptionDocument } from 'healthicons-react'


function PatientMainHeader() {
  return (
    <>
        <Header>
            <Link to='/patient/dashboard'><SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" /></Link>  
            <Link to="/patient/bookAppointment"><SidebarItem icon={<PrescriptionDocument size={20}/>} text="Appointment" /></Link>
            <Link to='/patient/getAllVisits'><SidebarItem icon={<ClipboardList size={20}/>} text="Visits" /></Link>
        </Header>
    </>
  )
}

export default PatientMainHeader