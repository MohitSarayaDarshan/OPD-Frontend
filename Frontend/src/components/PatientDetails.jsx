import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  User, 
  MapPin, 
  Phone, 
  Clock, 
  Droplets, 
  Briefcase, 
  ShieldAlert, 
  Edit3, 
  Trash2, 
  CalendarDays,
  Building2
} from 'lucide-react';

function PatientDetails() {
  const { expanded } = useContext(SidebarContext);

  // Example data object
  const patient = {
    Name: "Raj Patel",
    PatientNo: "PAT-24-001",
    Age: 34,
    Gender: "Male",
    BloodGroup: "B+",
    Mobile: "9876543210",
    Emergency: "9876500001",
    Occupation: "Software Engineer",
    Address: "12, Shanti Nagar, MG Road",
    Pincode: "400001",
    Allergies: "Allergic to penicillin. No prior major surgeries.",
    RegDate: "2024-01-10 10:00:00"
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* --- Header Profile Card --- */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden animate-slide-down">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                <User className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{patient.Name}</h1>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium border border-white/20 uppercase tracking-wider">
                    {patient.PatientNo}
                  </span>
                  <span className="bg-emerald-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all shadow-lg active:scale-95">
                <Edit3 className="w-4 h-4" /> EDIT
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-xl text-sm font-bold hover:bg-red-600 transition-all shadow-lg active:scale-95">
                <Trash2 className="w-4 h-4" /> DELETE
              </button>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
            <QuickStat icon={<CalendarDays className="text-blue-500" />} label="Age / Gender" value={`${patient.Age} Yrs / ${patient.Gender}`} />
            <QuickStat icon={<Droplets className="text-red-500" />} label="Blood Group" value={patient.BloodGroup} />
            <QuickStat icon={<Phone className="text-green-500" />} label="Primary Mobile" value={patient.Mobile} />
            <QuickStat icon={<Clock className="text-amber-500" />} label="Registered" value="10 Jan 2024" />
          </div>
        </div>

        {/* --- Detailed Info Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in">
          
          {/* Contact & Location */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Contact & Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <DetailRow label="Current Address" value={patient.Address} fullWidth />
                <DetailRow label="City / State" value="Mumbai, Maharashtra" />
                <DetailRow label="Pincode" value={patient.Pincode} />
                <DetailRow label="Emergency Contact" value={patient.Emergency} highlight />
                <DetailRow label="Occupation" value={patient.Occupation} />
              </div>
            </div>

            {/* Medical Description / Notes */}
            <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm bg-orange-50/30">
              <h3 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Clinical Remarks & Allergies
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm italic">
                "{patient.Allergies}"
              </p>
            </div>
          </div>

          {/* System Info Sidebar */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> System Info
            </h3>
            <div className="space-y-6">
              <DetailRow label="Hospital ID" value="Unit 01 - City General" />
              <DetailRow label="Created By" value="User ID: 10" />
              <DetailRow label="Last Modified" value="2024-10-15 09:00" />
              <DetailRow label="Patient ID" value="5001" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components
const QuickStat = ({ icon, label, value }) => (
  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors">
    <div className="mb-1">{icon}</div>
    <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
    <span className="text-sm font-bold text-slate-700">{value}</span>
  </div>
);

const DetailRow = ({ label, value, fullWidth, highlight }) => (
  <div className={fullWidth ? "col-span-full" : ""}>
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">{label}</label>
    <span className={`text-sm font-semibold ${highlight ? "text-blue-600" : "text-slate-700"}`}>{value}</span>
  </div>
);

export default PatientDetails;