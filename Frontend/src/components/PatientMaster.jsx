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

// const PatientMaster = () => {
//   const {expanded} = useContext(SidebarContext);
  
//   // Static data for Patients
//   const patients = [
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
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Patients</h1>
//           <p className="text-gray-600">Manage all patient records and their details</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Total Patients */}
//           <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Total Patients</p>
//                 <p className="text-3xl font-bold text-gray-800">{patients.length}</p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-lg border border-black">
//                 <Users className="text-blue-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Male Patients */}
//           <div className="bg-green-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Male Patients</p>
//                 <p className="text-3xl font-bold text-gray-800">
//                   {patients.filter(p => p.Gender === 'Male').length}
//                 </p>
//               </div>
//               <div className="bg-green-100 p-3 rounded-lg border border-black">
//                 <User className="text-green-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Female Patients */}
//           <div className="bg-pink-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Female Patients</p>
//                 <p className="text-3xl font-bold text-gray-800">
//                   {patients.filter(p => p.Gender === 'Female').length}
//                 </p>
//               </div>
//               <div className="bg-pink-100 p-3 rounded-lg border border-black">
//                 <User className="text-pink-600 w-6 h-6" />
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
//                   placeholder="Search patients by name, ID, or patient number..."
//                   className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                 />
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <select className="px-4 py-3 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>All Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>

//               <select className="px-4 py-3 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>All Blood Groups</option>
//                 <option>A+</option>
//                 <option>B+</option>
//                 <option>O+</option>
//                 <option>AB+</option>
//                 <option>A-</option>
//                 <option>B-</option>
//                 <option>O-</option>
//                 <option>AB-</option>
//               </select>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filter
//               </button>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Download className="w-5 h-5 mr-2" />
//                 Export
//               </button>
              
//               <Link to='/staff/addPatient'>
//               <button className="text-gray-800 font-bold bg-green-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-green-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Plus className="w-5 h-5 mr-2" />
//                 Add New Patient
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Patients Table */}
//         <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)] mb-8">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-800">
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient No</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Age</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Gender</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Blood Group</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Registration Date</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map((patient) => (
//                   <tr key={patient.PatientID} className="border-b border-gray-300 hover:bg-blue-100/50">
//                     <td className="py-4 px-4 font-bold text-gray-800">{patient.PatientID}</td>
//                     <td className="py-4 px-4 font-medium text-gray-800">#{patient.PatientNo}</td>
//                     <td className="py-4 px-4 font-medium text-gray-800">{patient.PatientName}</td>
//                     <td className="py-4 px-4 text-gray-700 font-medium">{patient.Age}</td>
//                     <td className="py-4 px-4 text-gray-700">
//                       <span className={`px-3 py-1 rounded-full text-xs font-bold ${patient.Gender === 'Male' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
//                         {patient.Gender}
//                       </span>
//                     </td>
//                     <td className="py-4 px-4 text-gray-700">
//                       <div className="flex items-center">
//                         <Droplets className="w-4 h-4 mr-2 text-red-500" />
//                         <span className={`px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200`}>
//                           {patient.BloodGroup}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-gray-700">
//                       {new Date(patient.RegistrationDateTime).toLocaleDateString('en-IN')}
//                       {/* {(patient.RegistrationDateTime)} */}
//                     </td>
//                     <td className="py-4 px-4">
//                       <div className="flex space-x-2">
//                         <Link to="/staff/getPatient/1">
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
//                 Showing <span className="font-bold">{patients.length}</span> of <span className="font-bold">{patients.length}</span> patients
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
//               <span className="text-gray-700 font-medium mr-2">PATIENTS PER PAGE</span>
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

// export default PatientMaster;



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

const PatientMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your specific field names)
  const [patientList, setPatientList] = useState([
    {
      PatientID: 1001,
      PatientName: "Rahul Verma",
      Age: 34,
      BloodGroup: "O+",
      Gender: "Male",
      HospitalName: "City Care General Hospital",
      MobileNo: "9876543210"
    },
    {
      PatientID: 1002,
      PatientName: "Priya Das",
      Age: 28,
      BloodGroup: "A-",
      Gender: "Female",
      HospitalName: "Sunrise Multispeciality",
      MobileNo: "9988776655"
    },
    {
      PatientID: 1003,
      PatientName: "Amit Patel",
      Age: 45,
      BloodGroup: "B+",
      Gender: "Male",
      HospitalName: "Sterling Hospital",
      MobileNo: "8877665544"
    },
    {
      PatientID: 1004,
      PatientName: "Sita Devi",
      Age: 62,
      BloodGroup: "AB+",
      Gender: "Female",
      HospitalName: "City Care General Hospital",
      MobileNo: "7766554433"
    },
    {
      PatientID: 1005,
      PatientName: "Vikram Singh",
      Age: 12,
      BloodGroup: "O-",
      Gender: "Male",
      HospitalName: "Apex Heart Institute",
      MobileNo: "9123456789"
    }
  ]);

  // --- Handlers ---
  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this patient?")) {
      try {
        // TODO: Replace with actual API call
        // await fetch(`/api/patients/${id}`, { method: 'DELETE' });
        setPatientList(patientList.filter(patient => patient.PatientID !== id));
        alert('Patient deleted successfully');
      } catch (error) {
        console.error('Error deleting patient:', error);
        alert('Failed to delete patient. Please try again.');
      }
    }
  };

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