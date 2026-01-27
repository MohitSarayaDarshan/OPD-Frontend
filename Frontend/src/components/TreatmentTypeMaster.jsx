// import React, { useContext } from 'react';
// import {
//   Search,
//   Filter,
//   Plus,
//   Edit,
//   Trash2,
//   Eye,
//   Download,
//   MoreVertical,
//   ChevronLeft,
//   ChevronRight,
//   FileText,
//   Calendar
// } from 'lucide-react';
// import { SidebarContext } from '../contexts/Sidebar';
// import { Link } from 'react-router-dom';

// const TreatmentTypes = () => {
//   const{expanded}=useContext(SidebarContext);
//   // Static data
//   const treatmentTypes = [
//     {
//       id: 1,
//       treatmentTypeID: 'TT001',
//       treatmentTypeName: 'General Consultation',
//       treatmentTypeShortName: 'CONSULT',
//       hospitalID: 'HOSP001',
//       description: 'General medical consultation with physician',
//       userID: 'USER001',
//       created: '2024-01-15 10:30:00',
//       modified: '2024-01-15 10:30:00'
//     },
//     {
//       id: 2,
//       treatmentTypeID: 'TT002',
//       treatmentTypeName: 'Physical Therapy',
//       treatmentTypeShortName: 'PHYSTHER',
//       hospitalID: 'HOSP001',
//       description: 'Physical rehabilitation therapy sessions',
//       userID: 'USER002',
//       created: '2024-01-16 14:20:00',
//       modified: '2024-01-16 14:20:00'
//     },
//     {
//       id: 3,
//       treatmentTypeID: 'TT003',
//       treatmentTypeName: 'Surgical Procedure',
//       treatmentTypeShortName: 'SURGERY',
//       hospitalID: 'HOSP002',
//       description: 'Minor and major surgical procedures',
//       userID: 'USER003',
//       created: '2024-01-17 09:15:00',
//       modified: '2024-01-18 11:45:00'
//     },
//     {
//       id: 4,
//       treatmentTypeID: 'TT004',
//       treatmentTypeName: 'Laboratory Tests',
//       treatmentTypeShortName: 'LABTEST',
//       hospitalID: 'HOSP001',
//       description: 'Blood tests and other lab examinations',
//       userID: 'USER001',
//       created: '2024-01-18 13:10:00',
//       modified: '2024-01-18 13:10:00'
//     },
//     {
//       id: 5,
//       treatmentTypeID: 'TT005',
//       treatmentTypeName: 'Radiology Imaging',
//       treatmentTypeShortName: 'XRAY',
//       hospitalID: 'HOSP003',
//       description: 'X-ray, MRI, CT scan and ultrasound',
//       userID: 'USER004',
//       created: '2024-01-19 16:30:00',
//       modified: '2024-01-20 09:20:00'
//     },
//     {
//       id: 6,
//       treatmentTypeID: 'TT006',
//       treatmentTypeName: 'Dental Checkup',
//       treatmentTypeShortName: 'DENTAL',
//       hospitalID: 'HOSP001',
//       description: 'Dental examination and cleaning',
//       userID: 'USER002',
//       created: '2024-01-20 11:45:00',
//       modified: '2024-01-20 11:45:00'
//     },
//   ];

//   return (
//     <div className={`bg-blue-50 min-h-screen p-4 md:p-8 flex-1 ${expanded?"ml-64":"ml-16"} transition-all duration-1000`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Treatment Types</h1>
//           <p className="text-gray-600">Manage all treatment types and their details</p>
//         </div>

//         {/* Stats Cards - Only 2 cards now */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Total Treatment Types */}
//           <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Total Treatment Types</p>
//                 <p className="text-3xl font-bold text-gray-800">6</p>
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
//                 <p className="text-gray-600 font-medium mb-1">Recent Additions</p>
//                 <p className="text-3xl font-bold text-gray-800">6</p>
//               </div>
//               <div className="bg-yellow-100 p-3 rounded-lg border border-black">
//                 <Calendar className="text-yellow-600 w-6 h-6" />
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
//                   placeholder="Search treatment types by name, ID, or description..."
//                   className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                 />
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <select className="px-4 py-3 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>All Status</option>
//                 <option>Active</option>
//                 <option>Inactive</option>
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
//                 Add New
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
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Treatment Type ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Treatment Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Short Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">User ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {treatmentTypes.map((treatment) => (
//                   <tr key={treatment.id} className="border-b border-gray-300 hover:bg-blue-100/50">
//                     <td className="py-4 px-4 font-bold text-gray-800">{treatment.treatmentTypeID}</td>
//                     <td className="py-4 px-4 font-medium text-gray-800">{treatment.treatmentTypeName}</td>
//                     <td className="py-4 px-4 text-gray-700 font-medium">
//                       <span className="bg-gray-100 px-3 py-1 rounded-md border border-gray-300">
//                         {treatment.treatmentTypeShortName}
//                       </span>
//                     </td>
                    
                    
//                     <td className="py-4 px-4 text-gray-700">
//                       <span className="font-medium">
//                         {treatment.userID}
//                       </span>
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex space-x-2">
//                         <Link to='/admin/1/getTreatment/1'>
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
//                 Showing <span className="font-bold">6</span> of <span className="font-bold">6</span> treatment types
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

// export default TreatmentTypes;




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
  FileText, 
  Building2
} from 'lucide-react';

const TreatmentTypeMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Updated to your specific field names)
  const [treatmentList, setTreatmentList] = useState([
    {
      TreatmentTypeID: 1,
      TreatmentTypeName: "General Consultation",
      TreatmentTypeShortName: "OPD-GEN",
      HospitalName: "City Care General Hospital"
    },
    {
      TreatmentTypeID: 2,
      TreatmentTypeName: "Root Canal Treatment",
      TreatmentTypeShortName: "DEN-RCT",
      HospitalName: "Sunrise Multispeciality"
    },
    {
      TreatmentTypeID: 3,
      TreatmentTypeName: "MRI Scan (Full Body)",
      TreatmentTypeShortName: "RAD-MRI",
      HospitalName: "Sterling Hospital"
    },
    {
      TreatmentTypeID: 4,
      TreatmentTypeName: "Cataract Surgery",
      TreatmentTypeShortName: "OPH-CAT",
      HospitalName: "Lotus Eye Care"
    },
    {
      TreatmentTypeID: 5,
      TreatmentTypeName: "Physiotherapy Session",
      TreatmentTypeShortName: "PHY-SES",
      HospitalName: "City Care General Hospital"
    }
  ]);

  // --- Handlers ---
  const handleDelete = (id) => {
    setTreatmentList(treatmentList.filter(item => item.TreatmentTypeID !== id));
  };

  // Filter by Name or Short Name
  const filteredTreatments = treatmentList.filter(item => 
    item.TreatmentTypeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.TreatmentTypeShortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Treatment Types</h1>
          <p className="text-sm text-slate-500 mt-1">Manage standard treatment categories and hospital associations.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addTreatmentType">
        <button 
          onClick={() => console.log("Navigate to Add Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Treatment Type
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
              placeholder="Search Name or Short Name..." 
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
                <th className="px-6 py-4">Treatment Name</th>
                <th className="px-6 py-4">Short Name</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTreatments.length > 0 ? (
                filteredTreatments.map((item) => (
                  <tr key={item.TreatmentTypeID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{item.TreatmentTypeID}
                    </td>

                    {/* Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <FileText className="w-4 h-4" />
                        </div>
                        <div className="font-medium text-slate-900">{item.TreatmentTypeName}</div>
                      </div>
                    </td>

                    {/* Short Name Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded border border-gray-200 bg-gray-50 text-xs font-semibold text-slate-600">
                        {item.TreatmentTypeShortName}
                      </span>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {item.HospitalName}
                       </div>
                    </td>

                    {/* Actions Column (Added View Icon) */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getTreatment/${item.TreatmentTypeID}`}>
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
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
                    No treatments found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredTreatments.length} results</span>
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

export default TreatmentTypeMaster;