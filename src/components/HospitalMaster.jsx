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


  const [hospitalList, setHospitalList] = useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:3000/api/hospitals/")
      .then((res)=>res.json())
      .then((json)=>setHospitalList(json))
    }
  ,[])

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
//   const filteredHospitals = (hospitalList || []).filter(hosp => 
//   hosp.HospitalName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   hosp.Address?.toLowerCase().includes(searchTerm.toLowerCase())
// );

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
        {filteredHospitals.map((hospitalList, index) => (
          <div 
            key={hospitalList.HospitalID} 
            className="group bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col animate-scale-in hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            
            {/* Image Area */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img 
                src={hospitalList.ImageURL  } 
                alt={hospitalList.HospitalName} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* ID Badge */}
              <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/20">
                      #{hospitalList.HospitalID}
                  </span>
              </div>
              
              
            </div>

            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col">
              
              {/* Title */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {hospitalList.HospitalName}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start text-slate-500 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-1.5 mt-0.5 shrink-0 text-slate-400" />
                <span className="line-clamp-2">{hospitalList.Address}</span>
              </div>

              {/* Info Tags (Charge & Validity) */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded border border-green-100">
                  <CreditCard className="w-3 h-3 mr-1" />
                  Reg: ₹{hospitalList.RegistrationCharge}
                </span>
                <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded border border-blue-100">
                  <Clock className="w-3 h-3 mr-1" />
                  Valid: {hospitalList.RegistrationValidityMonths} Mo.
                </span>
              </div>

              {/* Footer Actions */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-slate-500 text-xs">
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  {hospitalList.Contact}
                </div>
                
                <Link to={`/admin/getHospital/${hospitalList.HospitalID}`}>
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