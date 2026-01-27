// import React, { useContext } from 'react';
// import {
//   Search,
//   Filter,
//   Plus,
//   Trash2,
//   Eye,
//   Download,
//   ChevronLeft,
//   ChevronRight,
//   FileText,
//   Users
// } from 'lucide-react';
// import { SidebarContext } from '../contexts/Sidebar';
// import { Link } from 'react-router-dom';

// const OPDMaster = () => {
//   const{expanded}=useContext(SidebarContext);
//   // Static data for OPD (Outpatient Department)
// const opdRecords = [
//   {
//     OPDID: 1,
//     OPDNo: 'OPD-2024-001',
//     OPDDateTime: '2024-01-15 09:30:00',
//     PatientID: 101,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 1,
//     RegistrationFee: 100.00,
//     Description: 'Fever and cold symptoms',
//     UserID: 1,
//     Created: '2024-01-15 09:00:00',
//     Modified: '2024-01-15 09:30:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 2,
//     OPDNo: 'OPD-2024-002',
//     OPDDateTime: '2024-01-15 10:15:00',
//     PatientID: 102,
//     IsFollowUpCase: true,
//     TreatedByDoctorID: 2,
//     RegistrationFee: 50.00,
//     Description: 'Follow-up for diabetes check',
//     UserID: 1,
//     Created: '2024-01-15 09:45:00',
//     Modified: '2024-01-15 10:15:00',
//     OLDOPDNo: 'OPD-2023-450'
//   },
//   {
//     OPDID: 3,
//     OPDNo: 'OPD-2024-003',
//     OPDDateTime: '2024-01-15 11:00:00',
//     PatientID: 103,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 3,
//     RegistrationFee: 100.00,
//     Description: 'Skin allergy consultation',
//     UserID: 2,
//     Created: '2024-01-15 10:30:00',
//     Modified: '2024-01-15 11:00:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 4,
//     OPDNo: 'OPD-2024-004',
//     OPDDateTime: '2024-01-15 14:30:00',
//     PatientID: 104,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 1,
//     RegistrationFee: 100.00,
//     Description: 'General health checkup',
//     UserID: 1,
//     Created: '2024-01-15 14:00:00',
//     Modified: '2024-01-15 14:30:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 5,
//     OPDNo: 'OPD-2024-005',
//     OPDDateTime: '2024-01-16 10:00:00',
//     PatientID: 105,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 2,
//     RegistrationFee: 100.00,
//     Description: 'Blood pressure consultation',
//     UserID: 2,
//     Created: '2024-01-16 09:30:00',
//     Modified: '2024-01-16 10:00:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 6,
//     OPDNo: 'OPD-2024-006',
//     OPDDateTime: '2024-01-16 11:45:00',
//     PatientID: 101,
//     IsFollowUpCase: true,
//     TreatedByDoctorID: 1,
//     RegistrationFee: 50.00,
//     Description: 'Follow-up for fever treatment',
//     UserID: 1,
//     Created: '2024-01-16 11:15:00',
//     Modified: '2024-01-16 11:45:00',
//     OLDOPDNo: 'OPD-2024-001'
//   },
//   {
//     OPDID: 7,
//     OPDNo: 'OPD-2024-007',
//     OPDDateTime: '2024-01-17 09:15:00',
//     PatientID: 106,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 3,
//     RegistrationFee: 100.00,
//     Description: 'Dental checkup and cleaning',
//     UserID: 2,
//     Created: '2024-01-17 08:45:00',
//     Modified: '2024-01-17 09:15:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 8,
//     OPDNo: 'OPD-2024-008',
//     OPDDateTime: '2024-01-17 16:00:00',
//     PatientID: 107,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 1,
//     RegistrationFee: 100.00,
//     Description: 'Cough and throat infection',
//     UserID: 1,
//     Created: '2024-01-17 15:30:00',
//     Modified: '2024-01-17 16:00:00',
//     OLDOPDNo: null
//   },
//   {
//     OPDID: 9,
//     OPDNo: 'OPD-2024-009',
//     OPDDateTime: '2024-01-18 13:30:00',
//     PatientID: 108,
//     IsFollowUpCase: true,
//     TreatedByDoctorID: 2,
//     RegistrationFee: 50.00,
//     Description: 'Monthly diabetes monitoring',
//     UserID: 2,
//     Created: '2024-01-18 13:00:00',
//     Modified: '2024-01-18 13:30:00',
//     OLDOPDNo: 'OPD-2024-002'
//   },
//   {
//     OPDID: 10,
//     OPDNo: 'OPD-2024-010',
//     OPDDateTime: '2024-01-19 10:45:00',
//     PatientID: 109,
//     IsFollowUpCase: false,
//     TreatedByDoctorID: 3,
//     RegistrationFee: 100.00,
//     Description: 'Eye examination',
//     UserID: 1,
//     Created: '2024-01-19 10:15:00',
//     Modified: '2024-01-19 10:45:00',
//     OLDOPDNo: null
//   }
// ];
//   return (
//     <div className={`bg-blue-50 min-h-screen p-4 md:p-8 flex-1 ${expanded?"ml-64":"ml-16"} transition-all duration-1000`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">OPD</h1>
//           <p className="text-gray-600">Manage all Outpatient Department records</p>
//         </div>

//         {/* Stats Cards - Only 2 cards now */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Total Treatment Types */}
//           <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Total OPD Records</p>
//                 <p className="text-3xl font-bold text-gray-800">{opdRecords.length}</p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-lg border border-black">
//                 <FileText className="text-blue-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Recent Additions */}
//           <div className="bg-yellow-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Follow-up Cases</p>
//                 <p className="text-3xl font-bold text-gray-800">{opdRecords.filter(opd => opd.IsFollowUpCase).length}</p> {/* Count follow-up cases */}
//               </div>
//               <div className="bg-yellow-100 p-3 rounded-lg border border-black">
//                 <Users className="text-yellow-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Bar */}
//         <div className="bg-blue-200 p-4 md:p-6 mb-8 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search OPD by name, ID, or description..."
//                   className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                 />
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <select className="px-4 py-3 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>All Types</option>
//                 <option>New Cases</option>
//                 <option>Follow-up Cases</option>
//               </select>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filter
//               </button>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Download className="w-5 h-5 mr-2" />
//                 Export
//               </button>
              
              
//               <button className="text-gray-800 font-bold bg-green-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-green-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Plus className="w-5 h-5 mr-2" />
//                 New OPD
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Treatment Types Table - Without Date Columns */}
//         <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)] mb-8">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-800">
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">OPD ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">OPD No</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">User ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Registration Fee</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {opdRecords.map((opd) => (
//                   <tr key={opd.id} className="border-b border-gray-300 hover:bg-blue-100/50">
//                     <td className="py-4 px-4 font-bold text-gray-800">{opd.OPDID}</td>
//                     <td className="py-4 px-4 font-medium text-gray-800">{opd.OPDNo}</td>
//                     <td className="py-4 px-4 text-gray-700 font-medium">{opd.PatientID}</td>
//                     <td className="py-4 px-4 text-gray-700">{opd.userID}</td>
//                     <td className="py-4 px-4 text-gray-700">{opd.RegistrationFee}</td>
//                     <td className="py-4 px-4">
//                       <div className="flex space-x-2">
//                         <Link to='/staff/getOPD/1'>
//                         <button
//                           className="text-blue-600 hover:text-blue-800 p-2 border border-blue-200 rounded-md bg-blue-50 hover:bg-blue-100"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
//                         </Link>
//                         <button
//                           className="text-red-600 hover:text-red-800 p-2 border border-red-200 rounded-md bg-red-50 hover:bg-red-100"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t-2 border-gray-800">
//             <div className="mb-4 sm:mb-0">
//               <p className="text-gray-700 font-medium">
//                 Showing <span className="font-bold">6</span> of <span className="font-bold">6</span> OPD Records
//               </p>
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <ChevronLeft className="w-4 h-4" />
//                 <span className="ml-1">Prev</span>
//               </button>
              
//               <button className="text-gray-800 font-bold bg-blue-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] px-4 py-2">1</button>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <span className="mr-1">Next</span>
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
            
//             <div className="mt-4 sm:mt-0 flex items-center">
//               <span className="text-gray-700 font-medium mr-2">ITEMS PER PAGE</span>
//               <select className="px-4 py-2 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>10</option>
//                 <option>25</option>
//                 <option>50</option>
//                 <option>100</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OPDMaster;


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

const OPDMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your specific field names)
  const [opdList, setOpdList] = useState([
    {
      OPDNo: "OPD-2025-1001",
      OPDDateTime: "2025-01-12 10:30 AM",
      PatientName: "Rahul Verma",
      IsFollowUpCase: false, // New Case
      TreatedByDoctorName: "Dr. Arjun Mehta",
      RegistrationFee: 500
    },
    {
      OPDNo: "OPD-2025-1002",
      OPDDateTime: "2025-01-12 11:15 AM",
      PatientName: "Sita Devi",
      IsFollowUpCase: true, // Follow Up
      TreatedByDoctorName: "Dr. Priya Sharma",
      RegistrationFee: 200
    },
    {
      OPDNo: "OPD-2025-1003",
      OPDDateTime: "2025-01-12 12:00 PM",
      PatientName: "Amit Patel",
      IsFollowUpCase: false,
      TreatedByDoctorName: "Dr. Rajesh Gupta",
      RegistrationFee: 500
    },
    {
      OPDNo: "OPD-2025-1004",
      OPDDateTime: "2025-01-13 09:45 AM",
      PatientName: "Vikram Singh",
      IsFollowUpCase: true,
      TreatedByDoctorName: "Dr. Arjun Mehta",
      RegistrationFee: 0
    },
    {
      OPDNo: "OPD-2025-1005",
      OPDDateTime: "2025-01-13 10:00 AM",
      PatientName: "Anjali Rao",
      IsFollowUpCase: false,
      TreatedByDoctorName: "Dr. Anita Desai",
      RegistrationFee: 800
    }
  ]);

  // --- Handlers ---
  const handleDelete = (opdNo) => {
    setOpdList(opdList.filter(item => item.OPDNo !== opdNo));
  };

  // Filter by Patient Name or OPD No
  const filteredOPD = opdList.filter(item => 
    item.PatientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                <th className="px-6 py-4">Treated By</th>
                <th className="px-6 py-4">Reg. Fee</th>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <User className="w-4 h-4 text-slate-400" />
                        {item.PatientName}
                      </div>
                    </td>

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
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Stethoscope className="w-4 h-4 text-slate-400" />
                         {item.TreatedByDoctorName}
                       </div>
                    </td>

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
                        <Link to={`/admin/getOPD/${item.OPDNo}`}>
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
                    No OPD records found matching "{searchTerm}"
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