import React, { useContext, useState } from 'react';
import { 
  LogOut, 
  User, 
  ChevronDown, 
  Stethoscope, 
  HeartPulse
} from 'lucide-react';
import { SidebarContext } from '../contexts/Sidebar';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {expanded}=useContext(SidebarContext)
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Example user data - usually comes from an Auth Context
  const user = {
    name: "User",
    role: "Role"
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Logic to clear tokens/context and redirect to login
  };

  return (
    <nav className={`${expanded?"ml-64":"ml-16"} transition-all duration-500 fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-4 md:px-8 flex items-center justify-between shadow-sm`}>
      
      {/* --- 1st Component: OPD Logo (Left Side) --- */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-blue-600 p-1.5 rounded-lg transition-transform group-hover:rotate-12">
          <HeartPulse className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
            OPD<span className="text-blue-600">+</span>
          </span>
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            Management System
          </span>
        </div>
      </div>

      {/* --- 2nd Component: User Menu / Logout (End Side) --- */}
      <div className="relative">
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center gap-3 p-1.5 pl-3 rounded-full hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200"
        >
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-700">{user.name}</span>
            <span className="text-[11px] text-slate-500 font-medium">{user.role}</span>
          </div>
          
          <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* --- Logout Dropdown --- */}
        {isProfileOpen && (
          <>
            {/* Backdrop to close dropdown */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsProfileOpen(false)}
            ></div>
            
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden py-1 animate-scale-in">
              <div className="px-4 py-3 border-b border-gray-50 md:hidden">
                <p className="text-sm font-bold text-slate-800">{user.name}</p>
                <p className="text-xs text-slate-500">{user.role}</p>
              </div>
              
              <Link to='/'>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
              >
                <LogOut className="w-4 h-4" />
                Logout Account
              </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;