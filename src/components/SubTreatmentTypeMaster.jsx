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

// const SubTreatmentTypeMaster = () => {
//   const{expanded}=useContext(SidebarContext);
//   // Static data
//   // Static data for SubTreatmentTypes
// const subTreatmentTypes = [
//   {
//     SubTreatmentTypeID: 1,
//     SubTreatmentTypeName: 'General Consultation',
//     TreatmentTypeID: 1,
//     Rate: 500.00,
//     IsActive: true,
//     Description: 'Routine general health checkup and consultation',
//     UserID: 1,
//     Created: '2024-01-15 10:30:00',
//     Modified: '2024-01-15 10:30:00',
//     AccountID: 101
//   },
//   {
//     SubTreatmentTypeID: 2,
//     SubTreatmentTypeName: 'Dental Checkup',
//     TreatmentTypeID: 2,
//     Rate: 300.00,
//     IsActive: true,
//     Description: 'Basic dental examination and cleaning',
//     UserID: 1,
//     Created: '2024-01-15 11:45:00',
//     Modified: '2024-01-16 09:15:00',
//     AccountID: 101
//   },
//   {
//     SubTreatmentTypeID: 3,
//     SubTreatmentTypeName: 'Physiotherapy Session',
//     TreatmentTypeID: 3,
//     Rate: 800.00,
//     IsActive: true,
//     Description: '45-minute physiotherapy treatment session',
//     UserID: 2,
//     Created: '2024-01-16 14:20:00',
//     Modified: '2024-01-16 14:20:00',
//     AccountID: 102
//   },
//   {
//     SubTreatmentTypeID: 4,
//     SubTreatmentTypeName: 'ECG Test',
//     TreatmentTypeID: 4,
//     Rate: 1200.00,
//     IsActive: true,
//     Description: 'Electrocardiogram test for heart monitoring',
//     UserID: 1,
//     Created: '2024-01-17 09:00:00',
//     Modified: '2024-01-18 16:30:00',
//     AccountID: 101
//   },
//   {
//     SubTreatmentTypeID: 5,
//     SubTreatmentTypeName: 'Blood Test - Basic',
//     TreatmentTypeID: 5,
//     Rate: 400.00,
//     IsActive: true,
//     Description: 'Complete blood count and basic parameters',
//     UserID: 2,
//     Created: '2024-01-18 11:00:00',
//     Modified: '2024-01-18 11:00:00',
//     AccountID: 102
//   },
//   {
//     SubTreatmentTypeID: 6,
//     SubTreatmentTypeName: 'X-Ray - Chest',
//     TreatmentTypeID: 6,
//     Rate: 600.00,
//     IsActive: false,
//     Description: 'Chest X-ray examination (currently unavailable)',
//     UserID: 1,
//     Created: '2024-01-10 13:00:00',
//     Modified: '2024-01-20 10:00:00',
//     AccountID: 101
//   },
//   {
//     SubTreatmentTypeID: 7,
//     SubTreatmentTypeName: 'Ultrasound - Abdomen',
//     TreatmentTypeID: 7,
//     Rate: 1500.00,
//     IsActive: true,
//     Description: 'Complete abdominal ultrasound scan',
//     UserID: 2,
//     Created: '2024-01-19 15:30:00',
//     Modified: '2024-01-19 15:30:00',
//     AccountID: 102
//   },
//   {
//     SubTreatmentTypeID: 8,
//     SubTreatmentTypeName: 'MRI Scan - Brain',
//     TreatmentTypeID: 8,
//     Rate: 5000.00,
//     IsActive: true,
//     Description: 'Magnetic Resonance Imaging of the brain',
//     UserID: 1,
//     Created: '2024-01-20 08:45:00',
//     Modified: '2024-01-21 14:20:00',
//     AccountID: 101
//   }
// ];

//   return (
//     <div className={`bg-blue-50 min-h-screen p-4 md:p-8 flex-1 ${expanded?"ml-64":"ml-16"} transition-all duration-1000`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Sub-Treatment Types</h1>
//           <p className="text-gray-600">Manage all sub treatment types and their details</p>
//         </div>

//         {/* Stats Cards - Only 2 cards now */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Total Sub-Treatment Types */}
//           <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Total Sub-Treatment Types</p>
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
//                   placeholder="Search sub treatment types by name, ID"
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
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Sub-Treatment Type ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Sub-Treatment Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Treatment Type ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Rate</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">User ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {subTreatmentTypes.map((sub) => (
//                   <tr key={sub.id} className="border-b border-gray-300 hover:bg-blue-100/50">
//                     <td className="py-4 px-4 font-bold text-gray-800">{sub.SubTreatmentTypeID}</td>
//                     <td className="py-4 px-4 font-medium text-gray-800">{sub.SubTreatmentTypeName}</td>
//                     <td className="py-4 px-4 text-gray-700 font-medium">{sub.TreatmentTypeID}</td>
//                     <td className="py-4 px-4 text-gray-700">{sub.UserID}</td>
//                     <td className="py-4 px-4 text-gray-700 font-medium">{sub.Rate}</td>
//                     <td className="py-4 px-4">
//                       <div className="flex space-x-2">
//                         <Link to='/admin/1/getSubTreatment/1'>
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
//                 Showing <span className="font-bold">6</span> of <span className="font-bold">6</span> sub treatment types
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

// export default SubTreatmentTypeMaster;



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
  Activity, 
  FileText,
  IndianRupee, // For Rate
  Layers
} from 'lucide-react';
import { useEffect } from 'react';

const SubTreatmentTypeMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your DB Schema)
  // const [subTreatmentList, setSubTreatmentList] = useState([
  //   {
  //     SubTreatmentTypeID: 1,
  //     SubTreatmentTypeName: "Root Canal - Anterior",
  //     TreatmentTypeName: "Root Canal Treatment",
  //     Rate: 3500,
  //     IsActive: true
  //   },
  //   {
  //     SubTreatmentTypeID: 2,
  //     SubTreatmentTypeName: "Root Canal - Molar",
  //     TreatmentTypeName: "Root Canal Treatment",
  //     Rate: 5000,
  //     IsActive: true
  //   },
  //   {
  //     SubTreatmentTypeID: 3,
  //     SubTreatmentTypeName: "MRI Brain (Contrast)",
  //     TreatmentTypeName: "MRI Scan (Full Body)",
  //     Rate: 8500,
  //     IsActive: true
  //   },
  //   {
  //     SubTreatmentTypeID: 4,
  //     SubTreatmentTypeName: "Follow-up Consultation",
  //     TreatmentTypeName: "General Consultation",
  //     Rate: 300,
  //     IsActive: true
  //   },
  //   {
  //     SubTreatmentTypeID: 5,
  //     SubTreatmentTypeName: "Laser Cataract Surgery",
  //     TreatmentTypeName: "Cataract Surgery",
  //     Rate: 35000,
  //     IsActive: false
  //   }
  // ]);
  const [subTreatmentList, setSubTreatmentList] = useState([])
  useEffect(
        ()=>{
          fetch("http://localhost:3000/api/subtreatments/")
          .then((res)=>res.json())
          .then((json)=>setSubTreatmentList(json))
        }
      ,[])

  // --- Handlers ---
  const handleDelete = (id) => {
    setSubTreatmentList(subTreatmentList.filter(item => item.SubTreatmentTypeID !== id));
  };

  // Filter by SubTreatment Name or Parent Treatment Name
  const filteredSubTreatments = subTreatmentList.filter(item => 
    item.SubTreatmentTypeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.TreatmentTypeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sub-Treatment Types</h1>
          <p className="text-sm text-slate-500 mt-1">Manage specific procedures, rates, and parent treatment categories.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addSubTreatment">
        <button 
          onClick={() => console.log("Navigate to Add Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Sub-Treatment
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
              placeholder="Search Sub-Treatment or Category..." 
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
                <th className="px-6 py-4">Sub-Treatment Name</th>
                <th className="px-6 py-4">Parent Treatment</th>
                <th className="px-6 py-4">Rate</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSubTreatments.length > 0 ? (
                filteredSubTreatments.map((item) => (
                  <tr key={item.SubTreatmentTypeID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{item.SubTreatmentTypeID}
                    </td>

                    {/* SubTreatment Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Activity className="w-4 h-4" />
                        </div>
                        <div className="font-medium text-slate-900">{item.SubTreatmentTypeName}</div>
                      </div>
                    </td>

                    {/* Parent Treatment Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Layers className="w-4 h-4 text-slate-400" />
                        {item.TreatmentTypeName}
                      </div>
                    </td>

                    {/* Rate Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 font-medium text-slate-900 bg-green-50 px-2 py-1 rounded w-max border border-green-100 text-xs">
                        <IndianRupee className="w-3 h-3 text-green-600" />
                        {item.Rate}
                      </div>
                    </td>

                    {/* IsActive Column */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.IsActive 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          item.IsActive ? 'bg-green-500' : 'bg-gray-400'
                        }`}></span>
                        {item.IsActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    {/* Actions Column (With View Icon) */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getSubTreatment/${item.SubTreatmentTypeID}`}>
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
                    No sub-treatments found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredSubTreatments.length} results</span>
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

export default SubTreatmentTypeMaster;