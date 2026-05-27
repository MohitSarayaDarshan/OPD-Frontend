import React, { useState, useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  Eye, // Imported View Icon
  User, 
  Phone, 
  Droplet, // For Blood Group
  Building2,
  Calendar // For Age
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PatientMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your specific field names)
  // const [patientList, setPatientList] = useState([
  //   {
  //     PatientID: 1001,
  //     PatientName: "Rahul Verma",
  //     Age: 34,
  //     BloodGroup: "O+",
  //     Gender: "Male",
  //     HospitalName: "City Care General Hospital",
  //     MobileNo: "9876543210"
  //   },
  //   {
  //     PatientID: 1002,
  //     PatientName: "Priya Das",
  //     Age: 28,
  //     BloodGroup: "A-",
  //     Gender: "Female",
  //     HospitalName: "Sunrise Multispeciality",
  //     MobileNo: "9988776655"
  //   },
  //   {
  //     PatientID: 1003,
  //     PatientName: "Amit Patel",
  //     Age: 45,
  //     BloodGroup: "B+",
  //     Gender: "Male",
  //     HospitalName: "Sterling Hospital",
  //     MobileNo: "8877665544"
  //   },
  //   {
  //     PatientID: 1004,
  //     PatientName: "Sita Devi",
  //     Age: 62,
  //     BloodGroup: "AB+",
  //     Gender: "Female",
  //     HospitalName: "City Care General Hospital",
  //     MobileNo: "7766554433"
  //   },
  //   {
  //     PatientID: 1005,
  //     PatientName: "Vikram Singh",
  //     Age: 12,
  //     BloodGroup: "O-",
  //     Gender: "Male",
  //     HospitalName: "Apex Heart Institute",
  //     MobileNo: "9123456789"
  //   }
  // ]);
  const [patientList, setPatientList] = useState([])

  useEffect(
        ()=>{
          fetch("http://localhost:3000/api/patients/", {credentials:'include'})
          .then((res)=>res.json())
          .then((json)=>setPatientList(json))
        }
      ,[])

  // Filter by Name or Mobile Number
  const filteredPatients = patientList.filter(patient => 
    patient.PatientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.MobileNo.includes(searchTerm)
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patient Master</h1>
          <p className="text-sm text-slate-500 mt-1">Manage patient records, demographics, and hospital registrations.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addPatient">
        <button 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium transform hover:scale-105 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Add New Patient
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
              placeholder="Search Name or Mobile No..." 
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
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Demographics</th>
                <th className="px-6 py-4">Blood Group</th>
                <th className="px-6 py-4">Mobile No</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient, index) => (
                  <tr key={patient.PatientID} className="hover:bg-blue-50/30 transition-all duration-200 group" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.05}s both` }}>
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{patient.PatientID}
                    </td>

                    {/* Patient Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="font-medium text-slate-900">{patient.PatientName}</div>
                      </div>
                    </td>

                    {/* Demographics (Age/Gender) Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-slate-600">
                         <span>{patient.Age} Yrs</span>
                         <span className="text-slate-300">|</span>
                         <span>{patient.Gender}</span>
                      </div>
                    </td>

                    {/* Blood Group Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                        <Droplet className="w-3 h-3 fill-current" />
                        {patient.BloodGroup}
                      </span>
                    </td>

                    {/* Mobile No Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Phone className="w-3.5 h-3.5 text-slate-400" />
                         {patient.MobileNo}
                       </div>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {patient.HospitalName}
                       </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getPatient/${patient.PatientID}`}>
                          <button className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-700 rounded transition-all duration-300 hover:scale-110 active:scale-95" title="View Details">
                            <Eye className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-400">
                    No patients found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredPatients.length} results</span>
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

export default PatientMaster;