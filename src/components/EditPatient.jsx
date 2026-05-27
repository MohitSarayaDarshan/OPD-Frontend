import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Droplet, 
  Briefcase,
  FileText,
  ShieldAlert,
  Hash
} from 'lucide-react';
import { useAuth } from '../contexts/useAuth';

const EditPatient = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { id } = useParams();
    const{user}=useAuth();

  const [formData, setFormData] = useState({
    PatientName: '',
    Email: '',
    PatientNo: '', // Read-only
    RegistrationDateTime: '',
    Age: '',
    BloodGroup: '',
    Gender: '',
    Occupation: '',
    Address: '',
    HospitalID: '',
    StateID: '',
    CityID: '',
    PinCode: '',
    MobileNo: '',
    ReferredBy: '',
    Description: '',
    EmergencyContactNo: ''
  });

  // Fetch current data
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/patients/email`, { 
          credentials: 'include' ,
        method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(user)
        });
        const data = await response.json();
        const patient = Array.isArray(data) ? data[0] : data;
        
        // Format date for the input field (YYYY-MM-DD)
        if (patient.RegistrationDateTime) {
          patient.RegistrationDateTime = new Date(patient.RegistrationDateTime)
            .toISOString().split('T')[0];
        }
        setFormData(patient);
      } catch (error) {
        console.error("Error loading patient:", error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Exclude non-editable/system fields
      const { 
        PatientID, 
        Created, 
        Modified, 
        _id, 
        __v, 
        ...updateData 
      } = formData;

      const response = await fetch(`http://localhost:3000/api/patients/update/${formData.PatientID}`, {
        method: "PUT",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        alert("Patient profile updated successfully!");
        navigate(`/patient/info`);
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-500`}>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Edit Patient Profile</h1>
            <p className="text-sm text-slate-500">Update medical and contact information for {formData.PatientNo}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Patient Name */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" name="PatientName" value={formData.PatientName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required />
              </div>
            </div>

            {/* Email */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required />
              </div>
            </div>

            {/* Mobile No */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Primary Mobile</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" name="MobileNo" value={formData.MobileNo} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Emergency Contact</label>
              <div className="relative">
                <ShieldAlert className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400" />
                <input type="text" name="EmergencyContactNo" value={formData.EmergencyContactNo} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" />
              </div>
            </div>

            {/* Age & Blood Group */}
            <div className="md:col-span-1 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Age</label>
                <input type="number" name="Age" value={formData.Age} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Blood Group</label>
                <select name="BloodGroup" value={formData.BloodGroup} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none">
                  <option value="">Select</option>
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Gender</label>
              <select name="Gender" value={formData.Gender} onChange={handleChange} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Hospital ID (Reference) */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Hospital ID Reference</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="number" name="HospitalID" value={formData.HospitalID} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" required />
              </div>
            </div>

            {/* Address */}
            <div className="col-span-full">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea name="Address" value={formData.Address} onChange={handleChange} rows="2" className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none resize-none"></textarea>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-full">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Medical Notes / Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea name="Description" value={formData.Description} onChange={handleChange} rows="3" className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none resize-none"></textarea>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
            <button type="button" onClick={() => navigate(-1)} className="flex items-center gap-2 px-6 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 transition-all">
              <X size={18} /> Cancel
            </button>
            <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-all">
              <Save size={18} /> Update Patient Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPatient;