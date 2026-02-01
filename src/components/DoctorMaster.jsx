/* import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/Sidebar'
import { HeartOrgan } from 'healthicons-react';
import { Link } from 'react-router-dom';

function DoctorMaster() {

  const {expanded}=useContext(SidebarContext);
  return (

      
      <div className={`flex-1 min-h-screen bg-blue-200 py-12 ${expanded?"ml-64":"ml-16"} transition-all duration-1000`}>
              <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
              <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >01</p>
              <Link to='/admin/1/getDoctor/1'>
              <div className='sticky  top-[270px] w-4/5 mx-auto bg-amber-50 relative  border-gray-600 border-2 shadow-[10px_10px_0px_0px_rgb(31,41,55)] rounded-md  p-4'>
               
                  <p className={`text-5xl text-bold text-indigo-800 my-4`}>
                      Dr. Smit Gohel
                  </p>
                  <p className={`font-sans font-bold`}>
                    Civil Hospital
                  </p>
                  <p className={`font-sans my-1`}>
                    Dr. Smit Gohel is a renowned Interventional Cardiologist known for his steady hands and quiet confidence. A man in his late 30s with sharp features and rimless glasses, he exudes an aura of focused intelligence. He is often found in the catheterization lab, pioneering minimally invasive techniques to treat complex heart defects.
                   
                  </p>
                
                <div className={`absolute top-0 right-0`}>
                    <HeartOrgan className={`h-20 w-20`}/>
                </div>
              </div>
              </Link>
              </div>
              <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
              <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >02</p>
              <Link to='/admin/1/getDoctor/1'>
              <div className='sticky  top-[270px] w-4/5 mx-auto bg-amber-50 relative  border-gray-600 border-2 shadow-[10px_10px_0px_0px_rgb(31,41,55)] rounded-md  p-4'>
               
                  <p className={`text-5xl text-bold text-indigo-800 my-4`}>
                      Dr. Smit Gohel
                  </p>
                  <p className={`font-sans font-bold`}>
                    Civil Hospital
                  </p>
                  <p className={`font-sans my-1`}>
                    Dr. Smit Gohel is a renowned Interventional Cardiologist known for his steady hands and quiet confidence. A man in his late 30s with sharp features and rimless glasses, he exudes an aura of focused intelligence. He is often found in the catheterization lab, pioneering minimally invasive techniques to treat complex heart defects.
                   
                  </p>
                
                <div className={`absolute top-0 right-0`}>
                    <HeartOrgan className={`h-20 w-20`}/>
                </div>
              </div>
              </Link>
              </div>
              <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
              <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >03</p>
              <Link to='/admin/1/getDoctor/1'>
              <div className='sticky  top-[270px] w-4/5 mx-auto bg-amber-50 relative  border-gray-600 border-2 shadow-[10px_10px_0px_0px_rgb(31,41,55)] rounded-md  p-4'>
               
                  <p className={`text-5xl text-bold text-indigo-800 my-4`}>
                      Dr. Smit Gohel
                  </p>
                  <p className={`font-sans font-bold`}>
                    Civil Hospital
                  </p>
                  <p className={`font-sans my-1`}>
                    Dr. Smit Gohel is a renowned Interventional Cardiologist known for his steady hands and quiet confidence. A man in his late 30s with sharp features and rimless glasses, he exudes an aura of focused intelligence. He is often found in the catheterization lab, pioneering minimally invasive techniques to treat complex heart defects.
                   
                  </p>
                
                <div className={`absolute top-0 right-0`}>
                    <HeartOrgan className={`h-20 w-20`}/>
                </div>
              </div>
              </Link>
              </div>
          </div>
  )
}

export default DoctorMaster */



// import React, { useContext, useState } from 'react';
// import { 
//   Search, 
//   Plus, 
//   Filter, 
//   Trash2,
//   Edit2
// } from 'lucide-react';
// import { SidebarContext } from '../contexts/Sidebar';

// const AllDoctorsTable = () => {
//   // --- State Management ---
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Initial Data
//   const [doctors, setDoctors] = useState([
//     {
//       id: 1,
//       name: "Dr. Arjun Mehta",
//       email: "arjun.mehta@care.com",
//       specialty: "Cardiology",
//       hospital: "City Care General Hospital",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 2,
//       name: "Dr. Priya Sharma",
//       email: "priya.s@sunrise.com",
//       specialty: "Dermatology",
//       hospital: "Sunrise Multispeciality",
//       status: "On Leave",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 3,
//       name: "Dr. Rajesh Gupta",
//       email: "r.gupta@sterling.com",
//       specialty: "Pediatrics",
//       hospital: "Sterling Hospital",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 4,
//       name: "Dr. Anita Desai",
//       email: "anita.d@lotus.com",
//       specialty: "Gynecology",
//       hospital: "Lotus Eye & Women Care",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1623854764803-33345395885f?auto=format&fit=crop&w=100&h=100&q=80"
//     },
//     {
//       id: 5,
//       name: "Dr. Vikram Singh",
//       email: "vikram.ortho@apex.com",
//       specialty: "Orthopedics",
//       hospital: "Apex Heart Institute",
//       status: "Active",
//       image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=100&h=100&q=80"
//     }
//   ]);

//   // --- Handlers ---
//   const handleDelete = (id) => {
//     setDoctors(doctors.filter(doc => doc.id !== id));
//   };

//   const filteredDoctors = doctors.filter(doc => 
//     doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const {expanded}=useContext(SidebarContext);

//   return (
//     <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded?"ml-64":"ml-16"} transition-all duration-1000 `}>
      
//       {/* --- Page Header --- */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">Doctor Directory</h1>
//           <p className="text-sm text-slate-500 mt-1">Manage your network of specialized doctors</p>
//         </div>
        
//         {/* ADD NEW DOCTOR BUTTON */}
//         <button 
//           onClick={() => console.log("Navigate to Add Doctor Page")} 
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
//         >
//           <Plus className="w-4 h-4" />
//           Add New Doctor
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
//               placeholder="Search by name or specialty..." 
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
//                 <th className="px-6 py-4">Doctor Name</th>
//                 <th className="px-6 py-4">Specialty</th>
//                 <th className="px-6 py-4">Hospital</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {filteredDoctors.length > 0 ? (
//                 filteredDoctors.map((doctor) => (
//                   <tr key={doctor.id} className="hover:bg-blue-50/30 transition-colors group">
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <img 
//                           src={doctor.image} 
//                           alt={doctor.name} 
//                           className="w-10 h-10 rounded-full object-cover border border-blue-100"
//                         />
//                         <div>
//                           <div className="font-medium text-slate-900">{doctor.name}</div>
//                           <div className="text-xs text-slate-400">{doctor.email}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
//                         {doctor.specialty}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-slate-500">
//                       {doctor.hospital}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
//                         doctor.status === 'Active' 
//                           ? 'bg-green-50 text-green-700 border border-green-200' 
//                           : 'bg-gray-100 text-gray-600 border border-gray-200'
//                       }`}>
//                         <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
//                           doctor.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
//                         }`}></span>
//                         {doctor.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button className="p-1.5 hover:bg-blue-100 text-blue-600 rounded transition-colors" title="Edit">
//                           <Edit2 className="w-4 h-4" />
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(doctor.id)}
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
//                   <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
//                     No doctors found matching "{searchTerm}"
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
//           <span>Showing {filteredDoctors.length} results</span>
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

// export default AllDoctorsTable;



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
        fetch("http://localhost:3000/api/doctors/")
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
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <tr key={doctor.DoctorID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{doctor.DoctorID}
                    </td>

                    {/* Doctor Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={doctor.Image} 
                          alt={doctor.DoctorName} 
                          className="w-10 h-10 rounded-full object-cover border border-blue-100"
                        />
                        <div>
                          <div className="font-medium text-slate-900">{doctor.DoctorName}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1">
                             <Mail className="w-3 h-3" />
                             {doctor.Email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Specialty Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                        <Stethoscope className="w-3 h-3" />
                        {doctor.Specialty}
                      </span>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {doctor.HospitalName}
                       </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getDoctor/${doctor.DoctorID}`}>
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