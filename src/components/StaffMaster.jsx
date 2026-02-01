
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
//   Calendar,
//   User,
//   Users,
//   Droplets
// } from 'lucide-react';
// import { SidebarContext } from '../contexts/Sidebar';
// import { Link } from 'react-router-dom';

// function StaffMaster() {
//   const {expanded}=useContext(SidebarContext)
//   const Staffs = [
//     {
//       PatientID: 101,
//       PatientName: 'Rahul Sharma',
//       PatientNo: 1001,
//       RegistrationDateTime: '2024-01-15 09:30:00',
//       Age: 35,
//       BloodGroup: 'B+',
//       Gender: 'Male'
//     },
//     {
//       PatientID: 102,
//       PatientName: 'Priya Patel',
//       PatientNo: 1002,
//       RegistrationDateTime: '2024-01-15 10:15:00',
//       Age: 28,
//       BloodGroup: 'O+',
//       Gender: 'Female'
//     },
//     {
//       PatientID: 103,
//       PatientName: 'Amit Kumar',
//       PatientNo: 1003,
//       RegistrationDateTime: '2024-01-15 11:00:00',
//       Age: 45,
//       BloodGroup: 'A+',
//       Gender: 'Male'
//     },
//     {
//       PatientID: 104,
//       PatientName: 'Sneha Reddy',
//       PatientNo: 1004,
//       RegistrationDateTime: '2024-01-15 14:30:00',
//       Age: 32,
//       BloodGroup: 'AB+',
//       Gender: 'Female'
//     },
//     {
//       PatientID: 105,
//       PatientName: 'Vikram Singh',
//       PatientNo: 1005,
//       RegistrationDateTime: '2024-01-16 10:00:00',
//       Age: 50,
//       BloodGroup: 'O-',
//       Gender: 'Male'
//     },
//     {
//       PatientID: 106,
//       PatientName: 'Anjali Gupta',
//       PatientNo: 1006,
//       RegistrationDateTime: '2024-01-17 09:15:00',
//       Age: 29,
//       BloodGroup: 'B-',
//       Gender: 'Female'
//     },
//     {
//       PatientID: 107,
//       PatientName: 'Rajesh Nair',
//       PatientNo: 1007,
//       RegistrationDateTime: '2024-01-17 16:00:00',
//       Age: 38,
//       BloodGroup: 'A-',
//       Gender: 'Male'
//     },
//     {
//       PatientID: 108,
//       PatientName: 'Pooja Mehta',
//       PatientNo: 1008,
//       RegistrationDateTime: '2024-01-18 13:30:00',
//       Age: 41,
//       BloodGroup: 'O+',
//       Gender: 'Female'
//     },
//     {
//       PatientID: 109,
//       PatientName: 'Sanjay Verma',
//       PatientNo: 1009,
//       RegistrationDateTime: '2024-01-19 10:45:00',
//       Age: 55,
//       BloodGroup: 'AB-',
//       Gender: 'Male'
//     },
//     {
//       PatientID: 110,
//       PatientName: 'Neha Joshi',
//       PatientNo: 1010,
//       RegistrationDateTime: '2024-01-20 11:20:00',
//       Age: 27,
//       BloodGroup: 'B+',
//       Gender: 'Female'
//     }
//   ];
//   return (
//     <div className={`bg-blue-50 min-h-screen p-4 md:p-8 flex-1 ${expanded?"ml-64":"ml-16"} transition-all duration-1000`}>

//       <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Staffs</h1>
//           <p className="text-gray-600">Manage all staff records and their details</p>
//         </div>

//        <div className="bg-blue-200 p-4 md:p-6 mb-8 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                    <div className="flex-1">
//                      <div className="relative">
//                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                        <input
//                          type="text"
//                          placeholder="Search staffs by name, ID, or staff number..."
//                          className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                        />
//                      </div>
//                    </div>
                   
//                    <div className="flex gap-4">
                     
       
                     
                     
//                      <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                        <Filter className="w-5 h-5 mr-2" />
//                        Filter
//                      </button>
                     
                   
                     
//                      <button className="text-gray-800 font-bold bg-green-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-green-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                        <Plus className="w-5 h-5 mr-2" />
//                        Add New Staff
//                      </button>
//                    </div>
//                  </div>
//                </div> 

//      <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)] mb-8">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-800">
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Staff ID</th>
                  
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Staff Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Hospital ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
                  
//                 </tr>
//               </thead>
//               <tbody>
//                 {Staffs.map((patient) => (
//                   <tr key={patient.PatientID} className="border-b border-gray-300 hover:bg-blue-100/50">
//                     <td className="py-4 px-4 font-bold text-gray-800">{patient.PatientID}</td>
//                     <td className="py-4 px-4 font-bold text-gray-800">{patient.PatientName}</td>
//                     <td className="py-4 px-4 font-bold text-gray-800">{patient.PatientNo}</td>
                    
                    
//                     <td className="py-4 px-4">
//                       <div className="flex space-x-2">
//                         <Link to='/admin/1/getStaff/1'>
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
//                 Showing <span className="font-bold">{Staffs.length}</span> of <span className="font-bold">{Staffs.length}</span> Staffs
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
//               <span className="text-gray-700 font-medium mr-2">Staffs PER PAGE</span>
//               <select className="px-4 py-2 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>10</option>
//                 <option>25</option>
//                 <option>50</option>
//                 <option>100</option>
//               </select>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default StaffMaster


// import React, { useState, useContext } from 'react';
// import { SidebarContext } from '../contexts/Sidebar'; // Imported Context
// import { 
//   Search, 
//   Plus, 
//   Filter, 
//   Trash2, 
//   Edit2, 
//   Clock, 
//   BadgeCheck 
// } from 'lucide-react';

// const StaffMaster = () => {
//   // --- Context for Sidebar Transition ---
//   const { expanded } = useContext(SidebarContext);

//   // --- State Management ---
//   const [searchTerm, setSearchTerm] = useState('');

//   // Initial Data (Dummy Staff Data)
//   const [staffList, setStaffList] = useState([
//     {
//       id: 1,
//       name: "Alice Johnson",
//       email: "alice.j@hospital.com",
//       role: "Senior Nurse",
//       department: "ICU",
//       shift: "Morning (8AM - 4PM)",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 2,
//       name: "Robert Smith",
//       email: "bob.smith@hospital.com",
//       role: "Ward Boy",
//       department: "General Ward",
//       shift: "Night (8PM - 8AM)",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 3,
//       name: "Sarah Williams",
//       email: "sarah.w@hospital.com",
//       role: "Receptionist",
//       department: "Front Desk",
//       shift: "Morning (9AM - 5PM)",
//       status: "On Leave",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 4,
//       name: "David Brown",
//       email: "david.b@hospital.com",
//       role: "Lab Technician",
//       department: "Pathology",
//       shift: "Afternoon (12PM - 8PM)",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 5,
//       name: "Emily Davis",
//       email: "emily.d@hospital.com",
//       role: "Pharmacist",
//       department: "Pharmacy",
//       shift: "Morning (9AM - 5PM)",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&h=100&q=80"
//     }
//   ]);

//   // --- Handlers ---
//   const handleDelete = (id) => {
//     setStaffList(staffList.filter(staff => staff.id !== id));
//   };

//   // Filter by Name or Role
//   const filteredStaff = staffList.filter(staff => 
//     staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     staff.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     // Updated Main Div with Sidebar Transition Logic
//     <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
//       {/* --- Page Header --- */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
//           <p className="text-sm text-slate-500 mt-1">Manage nurses, ward boys, receptionists, and other staff.</p>
//         </div>
        
//         {/* ADD NEW STAFF BUTTON */}
//         <button 
//           onClick={() => console.log("Navigate to Add Staff Page")} 
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
//         >
//           <Plus className="w-4 h-4" />
//           Add New Staff
//         </button>
//       </div>

//       {/* --- Table Container --- */}
//       <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
        
//         {/* Toolbar */}
//         <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center bg-white">
//           <div className="relative w-full sm:w-72">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//             <input 
//               type="text" 
//               placeholder="Search by name or role..." 
//               className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
//             <Filter className="w-4 h-4" />
//             Filter
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-sm text-slate-600">
//             <thead className="bg-blue-50/50 text-slate-900 font-semibold border-b border-blue-100">
//               <tr>
//                 <th className="px-6 py-4">Staff Name</th>
//                 <th className="px-6 py-4">Role</th>
//                 <th className="px-6 py-4">Department</th>
//                 <th className="px-6 py-4">Shift</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {filteredStaff.length > 0 ? (
//                 filteredStaff.map((staff) => (
//                   <tr key={staff.id} className="hover:bg-blue-50/30 transition-colors group">
//                     {/* Name Column */}
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <img 
//                           src={staff.image} 
//                           alt={staff.name} 
//                           className="w-10 h-10 rounded-full object-cover border border-blue-100"
//                         />
//                         <div>
//                           <div className="font-medium text-slate-900">{staff.name}</div>
//                           <div className="text-xs text-slate-400">{staff.email}</div>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Role Column */}
//                     <td className="px-6 py-4">
//                       <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
//                         <BadgeCheck className="w-3 h-3" />
//                         {staff.role}
//                       </span>
//                     </td>

//                     {/* Department Column */}
//                     <td className="px-6 py-4 text-slate-500">
//                       {staff.department}
//                     </td>

//                     {/* Shift Column */}
//                     <td className="px-6 py-4">
//                        <div className="flex items-center gap-1.5 text-slate-500">
//                          <Clock className="w-3.5 h-3.5 text-slate-400" />
//                          {staff.shift}
//                        </div>
//                     </td>

//                     {/* Status Column */}
//                     <td className="px-6 py-4">
//                       <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
//                         staff.status === 'Active' 
//                           ? 'bg-green-50 text-green-700 border border-green-200' 
//                           : 'bg-gray-100 text-gray-600 border border-gray-200'
//                       }`}>
//                         <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
//                           staff.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
//                         }`}></span>
//                         {staff.status}
//                       </span>
//                     </td>

//                     {/* Actions Column */}
//                     <td className="px-6 py-4 text-right">
//                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button className="p-1.5 hover:bg-blue-100 text-blue-600 rounded transition-colors" title="Edit">
//                           <Edit2 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(staff.id)}
//                           className="p-1.5 hover:bg-red-100 text-red-600 rounded transition-colors" 
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="px-6 py-8 text-center text-slate-400">
//                     No staff members found matching "{searchTerm}"
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
//           <span>Showing {filteredStaff.length} results</span>
//           <div className="flex gap-1">
//             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
//             <button className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded font-medium">1</button>
//             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
//             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default StaffMaster;



import React, { useState, useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  BadgeCheck,
  Building2, // Imported for Hospital Name
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Removed Shift, Added HospitalName)
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.j@hospital.com",
      role: "Senior Nurse",
      department: "ICU",
      hospitalName: "City Care General Hospital",
      status: "Active",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 2,
      name: "Robert Smith",
      email: "bob.smith@hospital.com",
      role: "Ward Boy",
      department: "General Ward",
      hospitalName: "Sunrise Multispeciality",
      status: "Active",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.w@hospital.com",
      role: "Receptionist",
      department: "Front Desk",
      hospitalName: "Sterling Hospital",
      status: "On Leave",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.b@hospital.com",
      role: "Lab Technician",
      department: "Pathology",
      hospitalName: "City Care General Hospital",
      status: "Active",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      id: 5,
      name: "Emily Davis",
      email: "emily.d@hospital.com",
      role: "Pharmacist",
      department: "Pharmacy",
      hospitalName: "Apex Heart Institute",
      status: "Active",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ]);

  // --- Handlers ---
  const handleDelete = (id) => {
    setStaffList(staffList.filter(staff => staff.id !== id));
  };

  // Filter by Name or Role
  const filteredStaff = staffList.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage nurses, ward boys, receptionists, and other staff.</p>
        </div>
        
        {/* ADD NEW STAFF BUTTON */}
        <button 
          onClick={() => console.log("Navigate to Add Staff Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add New Staff
        </button>
      </div>

      {/* --- Table Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or role..." 
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
                <th className="px-6 py-4">Staff Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Hospital Name</th> {/* Added Hospital Name */}
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStaff.length > 0 ? (
                filteredStaff.map((staff) => (
                  <tr key={staff.id} className="hover:bg-blue-50/30 transition-colors group">
                    {/* Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={staff.image} 
                          alt={staff.name} 
                          className="w-10 h-10 rounded-full object-cover border border-blue-100"
                        />
                        <div>
                          <div className="font-medium text-slate-900">{staff.name}</div>
                          <div className="text-xs text-slate-400">{staff.email}</div>
                        </div>
                      </div>
                    </td>

                    {/* Role Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                        <BadgeCheck className="w-3 h-3" />
                        {staff.role}
                      </span>
                    </td>

                    {/* Department Column */}
                    <td className="px-6 py-4 text-slate-500">
                      {staff.department}
                    </td>

                    {/* Hospital Name Column (Replaced Shift) */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {staff.hospitalName}
                       </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getStaff/${staff.id}`}>
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
                    No staff members found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredStaff.length} results</span>
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

export default StaffMaster;