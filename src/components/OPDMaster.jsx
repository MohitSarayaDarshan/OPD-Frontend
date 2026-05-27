import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  Eye, // Imported View Icon
  ClipboardList, // For OPD No
  Calendar, 
  User, 
  Stethoscope,
  IndianRupee,
  RefreshCw // For Follow-up icon
} from 'lucide-react';
import { useEffect } from 'react';

const OPDMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your specific field names)
  // const [opdList, setOpdList] = useState([
  //   {
  //     OPDNo: "OPD-2025-1001",
  //     OPDDateTime: "2025-01-12 10:30 AM",
  //     PatientName: "Rahul Verma",
  //     IsFollowUpCase: false, // New Case
  //     TreatedByDoctorName: "Dr. Arjun Mehta",
  //     RegistrationFee: 500
  //   },
  //   {
  //     OPDNo: "OPD-2025-1002",
  //     OPDDateTime: "2025-01-12 11:15 AM",
  //     PatientName: "Sita Devi",
  //     IsFollowUpCase: true, // Follow Up
  //     TreatedByDoctorName: "Dr. Priya Sharma",
  //     RegistrationFee: 200
  //   },
  //   {
  //     OPDNo: "OPD-2025-1003",
  //     OPDDateTime: "2025-01-12 12:00 PM",
  //     PatientName: "Amit Patel",
  //     IsFollowUpCase: false,
  //     TreatedByDoctorName: "Dr. Rajesh Gupta",
  //     RegistrationFee: 500
  //   },
  //   {
  //     OPDNo: "OPD-2025-1004",
  //     OPDDateTime: "2025-01-13 09:45 AM",
  //     PatientName: "Vikram Singh",
  //     IsFollowUpCase: true,
  //     TreatedByDoctorName: "Dr. Arjun Mehta",
  //     RegistrationFee: 0
  //   },
  //   {
  //     OPDNo: "OPD-2025-1005",
  //     OPDDateTime: "2025-01-13 10:00 AM",
  //     PatientName: "Anjali Rao",
  //     IsFollowUpCase: false,
  //     TreatedByDoctorName: "Dr. Anita Desai",
  //     RegistrationFee: 800
  //   }
  // ]);
  const [opdList, setOpdList] = useState([])
  
  useEffect(
      ()=>{
        fetch("http://localhost:3000/api/opds/", {credentials:'include'})
        .then((res)=>res.json())
        .then((json)=>{console.log(json);setOpdList(json)})
      }
    ,[])

  // --- Handlers ---
  const handleDelete = (opdNo) => {
    setOpdList(opdList.filter(item => item.OPDNo !== opdNo));
  };

  // Filter by Patient Name or OPD No
  const filteredOPD = opdList.filter(item => 
    item.OPDNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">OPD Registrations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage outpatient visits, follow-ups, and daily consultations.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addOPD">
        <button 
          onClick={() => console.log("Navigate to Add OPD Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          New Registration
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
              placeholder="Search Patient or OPD No..." 
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
                <th className="px-6 py-4">OPD Details</th>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Case Type</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOPD.length > 0 ? (
                filteredOPD.map((item) => (
                  <tr key={item.OPDNo} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* OPD No & Date Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <ClipboardList className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="font-medium text-slate-900">{item.OPDNo}</div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                {item.OPDDateTime}
                            </div>
                        </div>
                      </div>
                    </td>

                    {/* Patient Name Column */}
                    {/* <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <User className="w-4 h-4 text-slate-400" />
                        {item.PatientName}
                      </div>
                    </td> */}

                    {/* IsFollowUpCase Column */}
                    <td className="px-6 py-4">
                      {item.IsFollowUpCase ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-medium border border-orange-100">
                            <RefreshCw className="w-3 h-3" />
                            Follow Up
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                            <Plus className="w-3 h-3" />
                            New Case
                        </span>
                      )}
                    </td>

                    {/* Treated By Doctor Column */}
                    {/* <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Stethoscope className="w-4 h-4 text-slate-400" />
                         {item.TreatedByDoctorName}
                       </div>
                    </td> */}

                    {/* Registration Fee Column */}
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-1 font-bold text-slate-800">
                            <IndianRupee className="w-3.5 h-3.5 text-slate-500" />
                            {item.RegistrationFee}
                        </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getOPD/${item.OPDID}`}>
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
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-400">
                    {/* No OPD records found matching "{searchTerm}" */}
                    No OPD records found matching 2
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredOPD.length} results</span>
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

export default OPDMaster;