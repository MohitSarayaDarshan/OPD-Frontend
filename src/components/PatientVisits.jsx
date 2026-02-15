import React, { useState, useContext, useEffect } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  FileText, 
  Download, 
  ChevronRight, 
  Stethoscope,
  Activity,
  Clock
} from 'lucide-react';
import { useAuth } from '../contexts/useAuth';

const PatientVisits = () => {
  const { expanded } = useContext(SidebarContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [visits,setVisits]=useState([])
  const {user}=useAuth();

  const [patient, setPatient] = useState({}); 

  console.log("user:",user)
  
  useEffect(() => {
    // 2. Define async function inside
    const fetchPatient = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/patients/email', {
          method: "POST", // 3. Changed to POST to allow sending the body
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify(user) 
        });
  
        const jsonRes = await res.json();
        console.log("jsonRes",jsonRes[0]);
        setPatient(jsonRes[0]);
        console.log(patient)
      } catch (err) {
        console.error("Failed to fetch patient data", err);
      }
    };
  
    if (user) fetchPatient();
  }, [user]);

  // Dummy Data: Patient's Visit History
  // const visits = [
  //   {
  //     id: "OPD-2025-1001",
  //     date: "10 Jan, 2026",
  //     time: "10:30 AM",
  //     doctor: "Dr. Arjun Mehta",
  //     specialty: "Cardiologist",
  //     hospital: "City Care General Hospital",
  //     diagnosis: "Mild Hypertension",
  //     symptoms: "Headache, Dizziness",
  //     prescriptionAvailable: true,
  //     IsFollowUpCase: "Completed"
  //   },
  //   {
  //     id: "OPD-2025-0890",
  //     date: "15 Dec, 2025",
  //     time: "04:15 PM",
  //     doctor: "Dr. Priya Sharma",
  //     specialty: "Dermatologist",
  //     hospital: "Sunrise Multispeciality",
  //     diagnosis: "Allergic Dermatitis",
  //     symptoms: "Redness, Itching on arm",
  //     prescriptionAvailable: true,
  //     IsFollowUpCase: "Completed"
  //   },
  //   {
  //     id: "OPD-2025-0750",
  //     date: "22 Nov, 2025",
  //     time: "11:00 AM",
  //     doctor: "Dr. Rajesh Gupta",
  //     specialty: "General Physician",
  //     hospital: "City Care General Hospital",
  //     diagnosis: "Viral Fever",
  //     symptoms: "High temperature, Body ache",
  //     prescriptionAvailable: true,
  //     IsFollowUpCase: "Completed"
  //   },
  //   {
  //     id: "OPD-2025-0620",
  //     date: "05 Oct, 2025",
  //     time: "09:30 AM",
  //     doctor: "Dr. Vikram Singh",
  //     specialty: "Orthopedic",
  //     hospital: "Apex Heart Institute",
  //     diagnosis: "Ankle Sprain",
  //     symptoms: "Swelling, Pain while walking",
  //     prescriptionAvailable: false, // Maybe just a consultation, no meds
  //     IsFollowUpCase: "Follow Up"
  //   }
  // ];

  console.log("patient: ",patient)

  // useEffect(() => {
  //   // 2. Define async function inside
  //   const fetchVisit = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/opds/visits/'+patient.PatientID, {
  //         method: "GET",// 3. Changed to POST to allow sending the body,
  //         credentials:'include'
  //       });
  
  //       const jsonRes = await res.json();
  //       console.log("jsonResVisits",jsonRes);
  //       setVisits(jsonRes);
  //     } catch (err) {
  //       console.error("Failed to fetch patient data", err);
  //     }
  //   };
  
  //   if (patient) fetchVisit();
  // }, [patient]); 

  useEffect(() => {
  const fetchVisit = async () => {
    // Only fetch if we actually have a PatientID
    if (!patient?.PatientID) return; 

    try {
      const res = await fetch(`http://localhost:3000/api/opds/visits/${patient.PatientID}`, {
        method: "GET",
        credentials: 'include'
      });

      const jsonRes = await res.json();
      // Ensure jsonRes is an array before setting state
      console.log("jsonResVisits",jsonRes);
      setVisits(Array.isArray(jsonRes) ? jsonRes : []);

    } catch (err) {
      console.error("Failed to fetch visit data", err);
    }
  };

  fetchVisit();
}, [patient.PatientID]); // Use the ID specifically as the dependency



  // Filter Logic
  const filteredVisits = visits.filter(visit => 
    visit.DoctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    visit.HospitalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Visit History</h1>
          <p className="text-sm text-slate-500 mt-1">A timeline of your doctor consultations and medical records.</p>
        </div>
        
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search Doctor, Diagnosis..." 
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
            </button>
        </div>
      </div>

      {/* --- Visits Timeline/List --- */}
      <div className="space-y-6">
        {filteredVisits.length > 0 ? (
          filteredVisits.map((visit, index) => (
            <div 
              key={visit.OPDID} 
              className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-0 overflow-hidden flex flex-col md:flex-row"
            >
                {/* Left: Date & Time Panel */}
                <div className="bg-blue-50/50 p-6 md:w-48 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-blue-100 text-center">
                    <div className="p-3 bg-white rounded-full shadow-sm mb-2 text-blue-600">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{visit.OPDDateTime.split(',')[0]}</h3>
                    <p className="text-sm text-slate-500">{visit.OPDDateTime.split(',')[1]}</p>
                    {/* <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                        <Clock className="w-3 h-3" /> {visit.time}
                    </span> */}
                </div>

                {/* Middle: Visit Details */}
                <div className="p-6 flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">{visit.DoctorName}</h2>
                            {/* <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                                <Stethoscope className="w-3.5 h-3.5" />
                                {visit.specialty}
                            </p> */}
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${
                            visit.IsFollowUpCase === true ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'
                        }`}>
                            {visit.IsFollowUpCase}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-slate-600">{visit.HospitalName}</span>
                        </div>
                        {/* <div className="flex items-start gap-2">
                            <Activity className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <div>
                                <span className="font-semibold text-slate-700">Diagnosis: </span>
                                <span className="text-slate-600">{visit.diagnosis}</span>
                            </div>
                        </div> */}
                    </div>
                    
                    {/* <div className="text-sm text-slate-500 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                        "Symptoms reported: {visit.symptoms}"
                    </div> */}
                </div>

                {/* Right: Actions Panel */}
                <div className="p-6 md:w-64 bg-gray-50/50 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center gap-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors shadow-sm">
                        <FileText className="w-4 h-4" />
                        View Summary
                    </button>
                    
                    {visit.prescriptionAvailable && (
                        <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                            <Download className="w-4 h-4" />
                            Prescription
                        </button>
                    )}

                    <div className="text-center mt-1">
                        <span className="text-[10px] text-slate-400 font-mono">ID: {visit.OPDID}</span>
                    </div>
                </div>
            </div>
          ))
        ) : (
          // Empty State
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No visits found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your search filters.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default PatientVisits;