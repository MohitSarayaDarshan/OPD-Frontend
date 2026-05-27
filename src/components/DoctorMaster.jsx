import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  Eye, // Imported View Icon
  User, 
  Stethoscope, 
  Building2,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Updated to your specific field names)
  // const [doctorList, setDoctorList] = useState([
  //   {
  //     DoctorID: 1,
  //     DoctorName: "Dr. Arjun Mehta",
  //     Specialty: "Cardiology", // Kept for UI completeness
  //     HospitalName: "City Care General Hospital",
  //     Email: "arjun.m@care.com",
  //     Image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80"
  //   },
  //   {
  //     DoctorID: 2,
  //     DoctorName: "Dr. Priya Sharma",
  //     Specialty: "Dermatology",
  //     HospitalName: "Sunrise Multispeciality",
  //     Email: "priya.s@sunrise.com",
  //     Image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80"
  //   },
  //   {
  //     DoctorID: 3,
  //     DoctorName: "Dr. Rajesh Gupta",
  //     Specialty: "Pediatrics",
  //     HospitalName: "Sterling Hospital",
  //     Email: "r.gupta@sterling.com",
  //     Image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&h=100&q=80"
  //   },
  //   {
  //     DoctorID: 4,
  //     DoctorName: "Dr. Anita Desai",
  //     Specialty: "Gynecology",
  //     HospitalName: "Lotus Eye & Women Care",
  //     Email: "anita.d@lotus.com",
  //     Image: "https://images.unsplash.com/photo-1623854764803-33345395885f?auto=format&fit=crop&w=100&h=100&q=80"
  //   },
  //   {
  //     DoctorID: 5,
  //     DoctorName: "Dr. Vikram Singh",
  //     Specialty: "Orthopedics",
  //     HospitalName: "Apex Heart Institute",
  //     Email: "vikram.ortho@apex.com",
  //     Image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&h=100&q=80"
  //   }
  // ]);

  const [doctorList, setDoctorList] = useState([])
  
    useEffect(
      ()=>{
        fetch("http://localhost:3000/api/doctors/",{credentials:'include'})
        .then((res)=>res.json())
        .then((json)=>setDoctorList(json))
      }
    ,[])

  // --- Handlers ---
  const handleDelete = (id) => {
    setDoctorList(doctorList.filter(doc => doc.DoctorID !== id));
  };

  // Filter by Name or Specialty
  const filteredDoctors = doctorList.filter(doc => 
    doc.DoctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.Specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Doctor Master</h1>
          <p className="text-sm text-slate-500 mt-1">Manage doctor profiles and hospital associations.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addDoctor">
        <button 
          onClick={() => console.log("Navigate to Add Doctor Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add New Doctor
        </button>
        </Link>
      </div>

      {/* --- Table Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Name or Specialty..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-blue-50/50 text-slate-900 font-semibold border-b border-blue-100">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Doctor Name</th>
                <th className="px-6 py-4">Specialty</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4">Exp/Rating</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
  <tr key={doctor.DoctorID} className="hover:bg-blue-50/30 transition-colors group">
    
    {/* ID */}
    <td className="px-6 py-4 font-mono text-xs text-slate-400">
      #{doctor.DoctorID}
    </td>

    {/* Doctor Info */}
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <img src={doctor.Image} className="w-10 h-10 rounded-full object-cover border" />
        <div>
          <div className="font-medium text-slate-900">{doctor.DoctorName}</div>
          <div className="text-xs text-slate-400">ID: {doctor.UserID}</div>
        </div>
      </div>
    </td>

    {/* Specialty (Pulled from Description via project) */}
    <td className="px-6 py-4">
      <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
        {doctor.Specialty}
      </span>
    </td>

    {/* Hospital Name (Now available via $lookup) */}
    <td className="px-6 py-4">
      <div className="flex items-center gap-2 text-slate-600">
        <Building2 className="w-4 h-4 text-slate-400" />
        {doctor.HospitalName}
      </div>
    </td>

    {/* Professional Stats */}
    <td className="px-6 py-4">
      <div className="text-xs font-semibold text-slate-500">
        {doctor.Experience}Y Exp | <span className="text-amber-500">★ {doctor.Rating}</span>
      </div>
    </td>

    {/* Actions */}
    <td className="px-6 py-4 text-right">
      <Link to={`/admin/getDoctor/${doctor.DoctorID}`}>
        <button className="p-1.5 hover:bg-slate-100 rounded">
          <Eye className="w-4 h-4" />
        </button>
      </Link>
    </td>
  </tr>
              ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
                    No doctors found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredDoctors.length} results</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded font-medium">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};


export default DoctorMaster;