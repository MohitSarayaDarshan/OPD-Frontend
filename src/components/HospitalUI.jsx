import React, { useContext } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SidebarContext } from '../contexts/Sidebar';
import { Hospital } from 'lucide-react';

function HospitalUI() {

    const {route}=useParams();
    const {expanded}=useContext(SidebarContext)

    return (
       <div className={` flex-1 ${expanded? "ml-64":"ml-16"} h-screen  transition-all duration-1000 items-center  p-5 `}>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Hospitals</h1>
            </div>
            
            <div className={`grid grid-cols-3 gap-6 `}>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Civil Hospital</p>
            </div>
            </Link>

            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Apollo Grace General</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>City Care Institute</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Sunrise Pediatrics</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Green Valley Heart</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Lotus Eye Care</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Apex Trauma Center</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Sterling Neuro & Spine</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Krystal Maternity Home</p>
            </div>
            </Link>
            <Link to={"/admin/1/"+route}>
            <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md  justify-center flex hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
                <p className={`font-bold text-gray-800 text-3xl m-4 `}>Prime Oncology Centre</p>
            </div>
            </Link>
            </div>
            
       </div>
    )
}

export default HospitalUI