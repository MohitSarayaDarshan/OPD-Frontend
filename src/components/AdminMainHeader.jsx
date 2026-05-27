import React, { Activity } from 'react'
import { Header, SidebarItem } from './Header'
import { BedDouble, BedSingle, Clipboard, ClipboardList, HeartPulse, Hospital, LayoutDashboard, Stethoscope, Syringe, User, UserCircle, UserCircleIcon, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Doctor, SpeechLanguageTherapySpecialtiesOutlineSpecialties, WaterTreatment } from 'healthicons-react'
import { Diagnostics } from 'healthicons-react/filled'
import Navbar from './Navbar'


function AdminMainHeader() {
  return (
    <>
        
        <Header>
            
            <Link to='/admin/dashboard'><SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" /></Link>
            <Link to='/admin/getAllHospitals'><SidebarItem icon={<Hospital size={20}/>} text="Hospital"/></Link>
            <Link to='/admin/getAllDoctors'><SidebarItem icon={<Doctor size={20}/>} text="Doctor"/></Link>
            <Link to='/admin/getAllStaffs'><SidebarItem icon={<User size={20}/>} text="Staff"/></Link>
            <Link to='/admin/getAllTreatments'><SidebarItem icon={<Syringe size={20}/>} text="Treatment"/></Link>
            <Link to='/admin/getAllDiagnosisTypes'><SidebarItem icon={<Stethoscope size={20}/>} text="Diagnosis"/></Link>
            <Link to='/admin/getAllSubTreatments'><SidebarItem icon={<HeartPulse size={20}/>} text="SubTreatment"/></Link>
            <Link to='/admin/getAllPatients'><SidebarItem icon={<Users size={20}/>} text="Patients" /></Link>
            <Link to='/admin/getAllOPds'><SidebarItem icon={<Clipboard size={20}/>} text="OPD" /></Link>
             <Link to='/admin/getAllReceipts'><SidebarItem icon={<ClipboardList size={20}/>} text="Receipt" /></Link>
        </Header>
        
    </>
  )
}

export default AdminMainHeader