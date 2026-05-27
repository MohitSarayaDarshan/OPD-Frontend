import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  User, MapPin, Phone, Clock, Droplets, Briefcase, 
  ShieldAlert, Edit3, Trash2, CalendarDays, Building2,
  Stethoscope, Hash, Landmark, UserCheck
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function OPDDetailsStaff() {
  const { expanded } = useContext(SidebarContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [opd, setOpdData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/opds/${id}`, {credentials:'include'});
        const data = await response.json();
        console.log(data);
        
        // Assuming data is an array based on your previous code
        setOpdData(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Patient record?")) {
      try {
        const req = await fetch(`http://localhost:3000/api/patients/delete/${id}`, {
          method: 'DELETE',
          credentials:'include'
        });
        if (req.status === 200 || req.status === 201) {
          alert(`Patient record ${id} deleted successfully`);
          navigate('/staff/getAllOPDs');
        } else {
          throw new Error('Failed to delete');
        }
      } catch (error) {
        alert('Error deleting Patient. Please try again.');
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-500`}>
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* --- Header Profile Card --- */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                <User className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{opd.PatientName || 'N/A'}</h1>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium border border-white/20 uppercase tracking-wider">
                    ID: {opd.PatientNo}
                  </span>
                  <span className="bg-emerald-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Status: Verified
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link to={`/staff/editOPD/${id}`}>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-blue-700 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all shadow-lg">
                  <Edit3 className="w-4 h-4" /> EDIT
                </button>
              </Link>

              <button 
                onClick={() => handleDelete(id)}
                className="flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-xl text-sm font-bold hover:bg-red-600 transition-all shadow-lg"
              >
                <Trash2 className="w-4 h-4" /> DELETE
              </button>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
            <QuickStat icon={<CalendarDays className="text-blue-500" />} label="Age / Gender" value={`${opd.Age || '0'} Yrs / ${opd.Gender || 'N/A'}`} />
            <QuickStat icon={<Droplets className="text-red-500" />} label="Blood Group" value={opd.BloodGroup || 'Unknown'} />
            <QuickStat icon={<Phone className="text-green-500" />} label="Mobile" value={opd.MobileNo || 'N/A'} />
            <QuickStat icon={<Clock className="text-amber-500" />} label="Reg. Date" value={new Date(opd.RegistrationDateTime).toLocaleDateString() || 'N/A'} />
          </div>
        </div>

        {/* --- Detailed Info Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Contact & Geography */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Contact & Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <DetailRow label="Current Address" value={opd.Address} fullWidth />
                <DetailRow label="City ID" value={opd.CityID || 'Not Assigned'} />
                <DetailRow label="State ID" value={opd.StateID || 'Not Assigned'} />
                <DetailRow label="Pincode" value={opd.PinCode} />
                <DetailRow label="Emergency Contact" value={opd.EmergencyContactNo} highlight />
                <DetailRow label="Occupation" value={opd.Occupation} />
              </div>
            </div>

            {/* Referral & Clinical Info */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" /> Referral & Medical Context
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <DetailRow label="Referred By" value={opd.ReferredBy || 'Self'} highlight />
                <DetailRow label="Clinical Description" value={opd.Description || 'No description provided'} />
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* System Info */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Landmark className="w-4 h-4" /> Administration
              </h3>
              <div className="space-y-5">
                <DetailRow icon={<Building2 size={14}/>} label="Hospital ID" value={opd.HospitalID} />
                <DetailRow icon={<UserCheck size={14}/>} label="Created By (User ID)" value={opd.UserID} />
                <DetailRow icon={<Hash size={14}/>} label="Internal Database ID" value={opd.PatientID} />
              </div>
            </div>

            {/* Remarks Box */}
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Special Notes
              </h3>
              <p className="text-orange-800 text-sm leading-relaxed italic">
                {opd.Description ? `"${opd.Description}"` : "No special medical notes or allergies flagged for this patient record."}
              </p>
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
    <div className="mb-2">{icon}</div>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{label}</span>
    <span className="text-sm font-bold text-slate-800">{value}</span>
  </div>
);

const DetailRow = ({ label, value, fullWidth, highlight, icon }) => (
  <div className={`${fullWidth ? "col-span-full" : ""} flex flex-col`}>
    <div className="flex items-center gap-1 mb-1">
      {icon && <span className="text-slate-400">{icon}</span>}
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{label}</label>
    </div>
    <span className={`text-sm font-semibold break-words ${highlight ? "text-indigo-600" : "text-slate-700"}`}>
      {value || "---"}
    </span>
  </div>
);

export default OPDDetailsStaff;