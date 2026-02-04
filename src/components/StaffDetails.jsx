import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  ArrowLeft, 
  User, 
  Building2, 
  FileText, 
  Calendar, 
  Clock,
  ShieldCheck,
  Edit,
  Trash2
} from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';

const StaffDetails = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

  // --- Mock Data (Replace with API call using id) ---
  const [staffData,setStaffData] = useState({
    StaffID: id || 420,
    StaffName: "Krunal Galani",
    HospitalID: 1,
    HospitalName: "City Care General Hospital",
    Description: "Krunal Galani is a dedicated Hospital Staff Manager responsible for overseeing workforce logistics. He handles shift scheduling, attendance tracking, and administrative support for the team, ensuring smooth daily operations and 24/7 staffing coverage.",
    UserID: 10,
    Created: "2025-10-21T10:30:00",
    Modified: "2025-10-21T10:30:00"
  });

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/staffs/${id}`);
      const data = await response.json();
      setStaffData(data[0]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  fetchData();
}, [id]);

  // Helper to format dates
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    return new Date(isoString).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const handleDelete = async(id) => {
 
    if(confirm("Are you sure you want to delete this Staff record?")) {
      try {
        // TODO: Replace with actual API call
        // await fetch(`/api/opds/${id}`, { method: 'DELETE' });
        const req=await fetch(`http://localhost:3000/api/staffs/delete/${id}`,{
          method:'DELETE'
        })

        if (!req.status==201) {
        throw new Error('Failed to delete the record from the server');
      }

        
        alert(`Staff deleted with ${id}`);
        navigate('/admin/getAllStaffs');
      } catch (error) {
        console.error('Error deleting Staff:', error);
        alert('Failed to delete Staff record. Please try again.');
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Page Header --- */}
      <div className="flex items-center gap-4 mb-8 animate-slide-down">
        <button 
          onClick={() => navigate('/admin/getAllStaffs')}
          className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 text-slate-500 hover:text-slate-700 transform hover:scale-110 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Staff Profile</h1>
          <p className="text-sm text-slate-500 mt-1">View detailed information for Staff ID: #{staffData.StaffID}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: Main Profile Card --- */}
        <div className="lg:col-span-2 space-y-6 animate-scale-in">
          
          {/* Identity Card */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-green-600 to-green-500 relative"></div>
            <div className="px-8 pb-8">
              <div className="relative -mt-12 mb-4">
                <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-md">
                   
                      <img src={staffData.Image} className="w-full h-full bg-green-50 rounded-full flex items-center justify-center text-green-600" />
                   
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{staffData.StaffName}</h2>
                  <div className="flex items-center gap-2 text-slate-500 mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{staffData.HospitalID}</span>
                    <User className='w-4 h-4'/>
                    <span>{staffData.StaffID}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wide rounded-full border border-green-100">
                  Active
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-green-500" /> Description
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {staffData.Description || "No description provided."}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-green-500" /> Role
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {staffData.Role || "Role"}
                </p>
              </div>
            </div>
          </div>

          {/* Association Details */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-600" />
              Hospital Association
            </h3>
            <div className="grid grid-cols-1 gap-4">
               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                 <p className="text-xs text-slate-400 font-medium uppercase">Hospital ID</p>
                 <p className="text-lg font-mono font-bold text-slate-700 mt-1">#{staffData.HospitalID}</p>
                 <p className="text-sm text-slate-500 mt-1">{staffData.HospitalName}</p>
               </div>
            </div>
          </div>

        </div>

        {/* --- Right Column: System Meta Data --- */}
        <div className="lg:col-span-1 space-y-6 animate-scale-in">
          
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              System Data
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-xs text-slate-500">Internal Staff ID</span>
                <span className="text-sm font-mono font-medium text-slate-700">#{staffData.StaffID}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-xs text-slate-500">Created By User</span>
                <span className="text-sm font-mono font-medium text-slate-700">ID: {staffData.UserID}</span>
              </div>
              
              <div className="py-2">
                <span className="text-xs text-slate-500 block mb-1">Created On</span>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                   <Calendar className="w-3.5 h-3.5 text-slate-400" />
                   {formatDate(staffData.Created)}
                </div>
              </div>

              <div className="py-2">
                <span className="text-xs text-slate-500 block mb-1">Last Modified</span>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                   <Clock className="w-3.5 h-3.5 text-slate-400" />
                   {formatDate(staffData.Modified)}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-green-50 rounded-xl border border-green-100 p-6">
             <h4 className="text-sm font-bold text-green-900 mb-3">Actions</h4>
             <div className="space-y-2">
                <Link to={'/admin/editStaff/'+id}>
                <button 
                  onClick={() => navigate(`/admin/editStaff/${staffData.StaffID}`)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-white text-green-600 text-sm font-medium rounded-lg border border-green-200 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm transform hover:scale-105 active:scale-95"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
                </Link>
                <button 
                  onClick={()=>{handleDelete(id)}}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-white text-red-600 text-sm font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-all duration-300 shadow-sm transform hover:scale-105 active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Staff
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffDetails;