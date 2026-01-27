// import React, { use, useContext } from 'react'
// import { SidebarContext } from '../contexts/Sidebar'
// import { Download, Filter, Plus, Search } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function HospitalMaster() {
//   const {expanded}=useContext(SidebarContext);
//   return (
    
//     <div className={`relative ${expanded? "ml-64" : "ml-16"} flex-1 bg-blue-200 transition-all duration-1000`}>
     
//       <div className="bg-white  p-4 md:p-6 mb-8 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)] ">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search hospitals by name, ID, or patient number..."
//                   className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                 />
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <Link to='/admin/addHospital'>
//               <button className="text-gray-800 font-bold bg-green-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-green-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Plus className="w-5 h-5 mr-2" />
//                 Add New Hospital
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
      

      
//       <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
//         <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >01</p>
//         <Link to={"/admin/getHospital/1"}>
//         <div className={`sticky  top-[270px]  bg-white   justify-center items-center px-28 py-1 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]`}>
//           <p className={`font-extrabold text-3xl m-4 text-center`}>City Care General</p>
//           <p className={`font-light  m-2 text-center`}>Premier facility for general medicine and surgery</p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Address: 123 Main St,New York, NY </p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Opened: 2023-01-15</p>
//         </div>
//         </Link>
//       </div>
      

//        <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
//         <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >02</p>
//         <Link to={"/admin/getHospital/1"}>
//         <div className={`sticky  top-[270px]  bg-white   justify-center items-center px-28 py-1 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]`}>
//           <p className={`font-extrabold text-3xl m-4 text-center`}>City Care General</p>
//           <p className={`font-light  m-2 text-center`}>Premier facility for general medicine and surgery</p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Address: 123 Main St,New York, NY </p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Opened: 2023-01-15</p>
//         </div>
//         </Link>
//       </div>

//        <div className={`relative pt-[270px] p-[135px] pb-0 w-2/3   h-[1000px] mx-auto `}>
//         <p className={`text-9xl text-gray-800 font-extrabold font-sans top-[175px] left-[65px]  absolute opacity-90`} >03</p>
//         <Link to={"/admin/getHospital/1"}>
//         <div className={`sticky  top-[270px]  bg-white   justify-center items-center px-28 py-1 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]`}>
//           <p className={`font-extrabold text-3xl m-4 text-center`}>City Care General</p>
//           <p className={`font-light  m-2 text-center`}>Premier facility for general medicine and surgery</p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Address: 123 Main St,New York, NY </p>
//           <p className={`text-2xl font-bold m-2 text-center`}>Opened: 2023-01-15</p>
//         </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default HospitalMaster


// import React, { useState } from 'react';
// import { MapPin, Phone, Star, Clock, Search, Filter, ChevronRight } from 'lucide-react';

// // Dummy Data (Kept same as before)
// const hospitalsData = [
//   {
//     id: 1,
//     name: "City Care General Hospital",
//     location: "Kotecha Chowk, Rajkot",
//     rating: 4.5,
//     reviews: 128,
//     status: "Open",
//     image: "https://images.unsplash.com/photo-1587351021759-3e566b9af953?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Cardiology", "Neurology", "General"],
//     contact: "+91 98765 43210"
//   },
//   {
//     id: 2,
//     name: "Sunrise Multispeciality",
//     location: "Kalavad Road, Rajkot",
//     rating: 4.8,
//     reviews: 340,
//     status: "Open",
//     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Orthopedics", "Pediatrics"],
//     contact: "+91 99887 77665"
//   },
//   {
//     id: 3,
//     name: "Sterling Hospital",
//     location: "150ft Ring Road, Rajkot",
//     rating: 4.2,
//     reviews: 85,
//     status: "Closed",
//     image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Oncology", "Radiology"],
//     contact: "+91 76543 21098"
//   },
//   {
//     id: 4,
//     name: "Lotus Eye Care",
//     location: "Yagnik Road, Rajkot",
//     rating: 4.9,
//     reviews: 210,
//     status: "Open",
//     image: "https://images.unsplash.com/photo-1632833239869-a37e3a51a919?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Ophthalmology"],
//     contact: "+91 90123 45678"
//   },
//   {
//     id: 5,
//     name: "Apex Heart Institute",
//     location: "University Road, Rajkot",
//     rating: 4.6,
//     reviews: 150,
//     status: "Open",
//     image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Cardiology", "Surgery"],
//     contact: "+91 88990 01122"
//   },
//   {
//     id: 6,
//     name: "Civil Hospital",
//     location: "Civil Hospital Chowk, Rajkot",
//     rating: 3.9,
//     reviews: 500,
//     status: "Open",
//     image: "https://images.unsplash.com/photo-1538108149393-fbbd8189718c?auto=format&fit=crop&w=400&h=250&q=80",
//     tags: ["Government", "General"],
//     contact: "+91 77665 54433"
//   }
// ];

// const AllHospitals = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
//       {/* --- Header Section --- */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-bold text-slate-900">Partner Hospitals</h1>
//               <p className="text-sm text-slate-500 mt-1">Find and book appointments at top medical centers</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               <div className="relative group">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
//                 <input 
//                   type="text" 
//                   placeholder="Search by name or area..." 
//                   className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
//                 <Filter className="h-4 w-4" />
//                 <span>Filters</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Main Content Grid --- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hospitalsData.map((hospital) => (
//             // UPDATED CARD CONTAINER CHASSIS
//             <div 
//               key={hospital.id} 
//               className="group bg-blue-50/50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col"
//             >
              
//               {/* Card Image Area */}
//               <div className="relative h-48 bg-blue-100/20 overflow-hidden">
//                 <img 
//                   src={hospital.image} 
//                   alt={hospital.name} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-3 right-3">
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium backdrop-blur-md ${
//                     hospital.status === 'Open' 
//                       ? 'bg-green-100/90 text-green-800 border border-green-200' 
//                       : 'bg-red-100/90 text-red-800 border border-red-200'
//                   }`}>
//                     <Clock className="w-3 h-3 mr-1" />
//                     {hospital.status}
//                   </span>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-5 flex-1 flex flex-col">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
//                     {hospital.name}
//                   </h3>
//                   <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-blue-100">
//                     <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
//                     <span className="text-xs font-bold text-slate-700">{hospital.rating}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center text-slate-500 text-sm mb-4">
//                   <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
//                   {hospital.location}
//                 </div>

//                 {/* UPDATED TAGS (White background to pop on blue card) */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {hospital.tags.map((tag, index) => (
//                     <span key={index} className="px-2 py-1 bg-white text-slate-600 text-xs rounded border border-blue-100">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-auto pt-4 border-t border-blue-100/50 flex items-center justify-between">
//                   <div className="flex items-center text-slate-500 text-xs">
//                     <Phone className="w-3.5 h-3.5 mr-1" />
//                     {hospital.contact}
//                   </div>
                  
//                   <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
//                     View Details
//                     <ChevronRight className="w-4 h-4 ml-1" />
//                   </button>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllHospitals;



// import React, { useState, useContext } from 'react';
// import { SidebarContext } from '../contexts/Sidebar';
// import { 
//   Search, 
//   Filter, 
//   MapPin, 
//   CreditCard, 
//   Clock, 
//   Phone, 
//   ChevronRight, 
//   Building2 
// } from 'lucide-react';

// const AllHospitals = () => {
//   // --- Context for Sidebar Transition ---
//   const { expanded } = useContext(SidebarContext);

//   // --- State Management ---
//   const [searchTerm, setSearchTerm] = useState('');

//   // Initial Data (Updated with your DB fields + Images)
//   const [hospitalList, setHospitalList] = useState([
//     {
//       HospitalID: 101,
//       HospitalName: "City Care General Hospital",
//       Address: "Kotecha Chowk, Rajkot, Gujarat",
//       RegistrationCharge: 500,
//       RegistrationValidityMonths: 12,
//       Contact: "+91 98765 43210",
//       Image: "https://images.unsplash.com/photo-1587351021759-3e566b9af953?auto=format&fit=crop&w=400&h=250&q=80"
//     },
//     {
//       HospitalID: 102,
//       HospitalName: "Sunrise Multispeciality",
//       Address: "Kalavad Road, Near Crystal Mall, Rajkot",
//       RegistrationCharge: 200,
//       RegistrationValidityMonths: 6,
//       Contact: "+91 99887 77665",
//       Image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&h=250&q=80"
//     },
//     {
//       HospitalID: 103,
//       HospitalName: "Sterling Hospital",
//       Address: "150ft Ring Road, Raiya Circle, Rajkot",
//       RegistrationCharge: 1000,
//       RegistrationValidityMonths: 12,
//       Contact: "+91 76543 21098",
//       Image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&h=250&q=80"
//     },
//     {
//       HospitalID: 104,
//       HospitalName: "Lotus Eye Care",
//       Address: "Yagnik Road, Opposite Imperial Palace, Rajkot",
//       RegistrationCharge: 300,
//       RegistrationValidityMonths: 3,
//       Contact: "+91 90123 45678",
//       Image: "https://images.unsplash.com/photo-1632833239869-a37e3a51a919?auto=format&fit=crop&w=400&h=250&q=80"
//     },
//     {
//       HospitalID: 105,
//       HospitalName: "Apex Heart Institute",
//       Address: "University Road, Rajkot",
//       RegistrationCharge: 800,
//       RegistrationValidityMonths: 12,
//       Contact: "+91 88990 01122",
//       Image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=400&h=250&q=80"
//     }
//   ]);

//   // Filter Logic
//   const filteredHospitals = hospitalList.filter(hosp => 
//     hosp.HospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     hosp.Address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     // Main Container with Sidebar Transition Logic
//     <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
//       {/* --- Page Header --- */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-slate-900">All Hospitals</h1>
//           <p className="text-sm text-slate-500 mt-1">Explore our network of partner hospitals and clinics.</p>
//         </div>

//         {/* Search Bar */}
//         <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//             <div className="relative group">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
//             <input 
//                 type="text" 
//                 placeholder="Search name or area..." 
//                 className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             </div>
//             <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
//             <Filter className="h-4 w-4" />
//             <span>Filters</span>
//             </button>
//         </div>
//       </div>

//       {/* --- Grid Layout for Cards --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredHospitals.map((hospital) => (
//           <div 
//             key={hospital.HospitalID} 
//             className="group bg-blue-50/50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col"
//           >
            
//             {/* Image Area */}
//             <div className="relative h-48 bg-blue-100/20 overflow-hidden">
//               <img 
//                 src={hospital.Image} 
//                 alt={hospital.HospitalName} 
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               {/* ID Badge */}
//               <div className="absolute top-3 left-3">
//                   <span className="bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/20">
//                       #{hospital.HospitalID}
//                   </span>
//               </div>
//             </div>

//             {/* Content Area */}
//             <div className="p-5 flex-1 flex flex-col">
              
//               {/* Title */}
//               <div className="mb-3">
//                 <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
//                   {hospital.HospitalName}
//                 </h3>
//               </div>

//               {/* Address */}
//               <div className="flex items-start text-slate-500 text-sm mb-4">
//                 <MapPin className="w-4 h-4 mr-1.5 mt-0.5 shrink-0 text-slate-400" />
//                 <span className="line-clamp-2">{hospital.Address}</span>
//               </div>

//               {/* Info Tags (Charge & Validity) */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <span className="inline-flex items-center px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded border border-blue-100">
//                   <CreditCard className="w-3 h-3 mr-1 text-slate-400" />
//                   Reg: ₹{hospital.RegistrationCharge}
//                 </span>
//                 <span className="inline-flex items-center px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded border border-blue-100">
//                   <Clock className="w-3 h-3 mr-1 text-slate-400" />
//                   Valid: {hospital.RegistrationValidityMonths} Months
//                 </span>
//               </div>

//               {/* Footer Actions */}
//               <div className="mt-auto pt-4 border-t border-blue-100/50 flex items-center justify-between">
//                 <div className="flex items-center text-slate-500 text-xs">
//                   <Phone className="w-3.5 h-3.5 mr-1" />
//                   {hospital.Contact}
//                 </div>
                
//                 <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
//                   View Details
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </button>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllHospitals;



import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Filter, 
  MapPin, 
  CreditCard, 
  Clock, 
  Phone, 
  Plus, 
  Edit2, 
  Trash2,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HospitalMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Fields matched to your DB + Images for UI)

  // const [hospitalList, setHospitalList] = useState([
  //   {
  //     HospitalID: 101,
  //     HospitalName: "City Care General Hospital",
  //     Address: "Kotecha Chowk, Rajkot, Gujarat",
  //     RegistrationCharge: 500,
  //     RegistrationValidityMonths: 12,
  //     Contact: "+91 98765 43210",
  //     Image: "https://thumbs.dreamstime.com/b/elegant-glass-hospital-building-reflecting-sunlight-showcasing-medical-excellence-modern-stands-tall-radiating-warmth-359212478.jpg"
  //   },
  //   {
  //     HospitalID: 102,
  //     HospitalName: "Sunrise Multispeciality",
  //     Address: "Kalavad Road, Near Crystal Mall, Rajkot",
  //     RegistrationCharge: 200,
  //     RegistrationValidityMonths: 6,
  //     Contact: "+91 99887 77665",
  //     Image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&h=250&q=80"
  //   },
  //   {
  //     HospitalID: 103,
  //     HospitalName: "Sterling Hospital",
  //     Address: "150ft Ring Road, Raiya Circle, Rajkot",
  //     RegistrationCharge: 1000,
  //     RegistrationValidityMonths: 12,
  //     Contact: "+91 76543 21098",
  //     Image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&h=250&q=80"
  //   },
  //   {
  //     HospitalID: 104,
  //     HospitalName: "Lotus Eye Care",
  //     Address: "Yagnik Road, Opposite Imperial Palace, Rajkot",
  //     RegistrationCharge: 300,
  //     RegistrationValidityMonths: 3,
  //     Contact: "+91 90123 45678",
  //     Image: "https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=oUILskmtaPiA711DP53DFhOUvE7pfdNeEK9CfyxlGio="
  //   },
  //   {
  //     HospitalID: 105,
  //     HospitalName: "Apex Heart Institute",
  //     Address: "University Road, Rajkot",
  //     RegistrationCharge: 800,
  //     RegistrationValidityMonths: 12,
  //     Contact: "+91 88990 01122",
  //     Image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&w=400&h=250&q=80"
  //   }
  // ]);

  const [hospitalList,setHospitalList]=useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:3000/api/hospitals/")
      .then((res)=>res.json())
      .then((json)=>{setHospitalList(json);console.log(json)})
    },[]
  )
  // --- Handlers ---
  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this hospital?")) {
      try {
        // TODO: Replace with actual API call
        // await fetch(`/api/hospitals/${id}`, { method: 'DELETE' });
        setHospitalList(hospitalList.filter(hosp => hosp.HospitalID !== id));
        alert('Hospital deleted successfully');
      } catch (error) {
        console.error('Error deleting hospital:', error);
        alert('Failed to delete hospital. Please try again.');
      }
    }
  };

  // Filter Logic
  const filteredHospitals = hospitalList.filter(hosp => 
    hosp.HospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hosp.Address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hospital Master</h1>
          <p className="text-sm text-slate-500 mt-1">Manage hospital branches, registration fees, and validity.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
            {/* Search Bar */}
            <div className="relative group w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search name or area..." 
                    className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Add New Button */}
            <Link to="/admin/addHospital">
            <button 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium text-sm transform hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add Hospital
            </button>
            </Link>
        </div>
      </div>

      {/* --- Grid Layout for Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital, index) => (
          <div 
            key={hospital.HospitalID} 
            className="group bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col animate-scale-in hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            
            {/* Image Area */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img 
                src={hospital.ImageURL} 
                alt={hospital.HospitalName} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* ID Badge */}
              <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/20">
                      #{hospital.HospitalID}
                  </span>
              </div>
              
              
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col">
              
              {/* Title */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {hospital.HospitalName}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start text-slate-500 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-1.5 mt-0.5 shrink-0 text-slate-400" />
                <span className="line-clamp-2">{hospital.Address}</span>
              </div>

              {/* Info Tags (Charge & Validity) */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded border border-green-100">
                  <CreditCard className="w-3 h-3 mr-1" />
                  Reg: ₹{hospital.RegistrationCharge}
                </span>
                <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded border border-blue-100">
                  <Clock className="w-3 h-3 mr-1" />
                  Valid: {hospital.RegistrationValidityMonths} Mo.
                </span>
              </div>

              {/* Footer Actions */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                
                
                <Link to={`/admin/getHospital/${hospital.HospitalID}`}>
                  <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105">
                    <Eye className="w-4 h-4 mr-1.5" />
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalMaster;