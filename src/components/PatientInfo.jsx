import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Droplet, 
  Briefcase, 
  ArrowLeft, 
  Edit,
  ClipboardList,
  ShieldAlert
} from 'lucide-react';
import { useAuth } from '../contexts/useAuth';

const PatientInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expanded } = useContext(SidebarContext);
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user}=useAuth()

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/patients/email`, { 
          credentials: 'include', 
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(user)
        });
        const data = await response.json();
        // Assuming your API returns an array or the object directly
        setPatient(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error fetching patient details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading Patient Profile...</div>;
  if (!patient) return <div className="p-8 text-center text-red-500">Patient not found.</div>;

  return (
    <div className={`min-h-screen bg-slate-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-500`}>
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={20} /> Back to List
        </button>
        <button 
          onClick={() => navigate(`/patient/editPatient`)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
        >
          <Edit size={18} /> Edit Profile
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Basic Info Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
            <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={48} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">{patient.PatientName}</h2>
            <p className="text-blue-600 font-mono text-sm font-semibold mt-1">{patient.PatientNo}</p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                ID: {patient.PatientID}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {patient.Gender}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-blue-500" />
                <span className="text-sm truncate">{patient.Email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-blue-500" />
                <span className="text-sm">{patient.MobileNo}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldAlert size={18} className="text-red-500" />
                <div className="text-sm">
                   <p className="text-xs text-slate-400">Emergency Contact</p>
                   <p className="font-medium">{patient.EmergencyContactNo || 'Not Provided'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Medical & Personal Details */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <ClipboardList size={20} className="text-blue-600" />
                Patient Specifications
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <DetailItem icon={<Calendar />} label="Registration Date" value={new Date(patient.RegistrationDateTime).toLocaleDateString()} />
              <DetailItem icon={<User />} label="Age" value={`${patient.Age} Years`} />
              <DetailItem icon={<Droplet />} label="Blood Group" value={patient.BloodGroup} color="text-red-600" />
              <DetailItem icon={<Briefcase />} label="Occupation" value={patient.Occupation} />
              <DetailItem icon={<User />} label="Referred By" value={patient.ReferredBy || 'Direct Visit'} />
              <DetailItem icon={<MapPin />} label="Hospital ID" value={`HOSP-${patient.HospitalID}`} />
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin size={16} /> Residential Address
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {patient.Address}<br />
              {patient.PinCode && `Zip Code: ${patient.PinCode}`}
            </p>
          </div>

          {/* Clinical Notes / Description */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Patient Description / Notes</h3>
            <p className="text-slate-600 italic bg-slate-50 p-4 rounded-lg border-l-4 border-blue-400">
              {patient.Description || "No additional clinical notes provided for this patient."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable Detail Component
const DetailItem = ({ icon, label, value, color = "text-slate-700" }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-blue-500">{React.cloneElement(icon, { size: 18 })}</div>
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">{label}</p>
      <p className={`text-sm font-medium ${color}`}>{value || 'N/A'}</p>
    </div>
  </div>
);

export default PatientInfo;