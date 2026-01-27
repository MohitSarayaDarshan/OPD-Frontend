import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Calendar, 
  Phone, 
  MapPin, 
  FileText, 
  Building2, 
  Briefcase,
  Droplet,
  Users
} from 'lucide-react';

const AddPatient = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  // --- Form State ---
  const [formData, setFormData] = useState({
    PatientID: 0, // Auto-generated
    PatientName: '',
    PatientNo: '', // Auto-generated or Manual
    RegistrationDateTime: new Date().toISOString().slice(0, 16), // Current Date & Time
    Age: '',
    BloodGroup: '',
    Gender: '',
    Occupation: '',
    Address: '',
    HospitalID: '', // Dropdown selection
    StateID: '',    // Dropdown selection
    CityID: '',     // Dropdown selection
    PinCode: '',
    MobileNo: '',
    ReferredBy: '',
    Description: '',
    UserID: 1, // Logged-in User
    Created: new Date().toISOString(),
    Modified: new Date().toISOString(),
    EmergencyContactNo: ''
  });

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Replace with actual API call
      console.log("Submitting Patient Data:", formData);
      // Example: await fetch('/api/patients', { method: 'POST', body: JSON.stringify(formData) });
      
      // Navigate back to patient list after successful submission
      navigate('/admin/getAllPatients');
    } catch (error) {
      console.error('Error saving patient:', error);
      alert('Failed to save patient. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/admin/getAllPatients');
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Register New Patient</h1>
          <p className="text-sm text-slate-500 mt-1">Create a new patient profile for OPD and treatments.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-6xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <User className="w-5 h-5" />
          <h2>Patient Information</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

            {/* ================= SECTION 1: PERSONAL DETAILS ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
              Personal Details
            </div>

            {/* Patient Name */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Patient Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="PatientName"
                required
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.PatientName}
                onChange={handleChange}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Age <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                name="Age"
                required
                placeholder="e.g. 35"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.Age}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Gender <span className="text-red-500">*</span></label>
              <select 
                name="Gender"
                required
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                value={formData.Gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Blood Group</label>
              <div className="relative">
                <Droplet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="BloodGroup"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.BloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Unknown</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Occupation</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="Occupation"
                  placeholder="e.g. Teacher"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.Occupation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Patient No (Usually Auto, but editable here) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Patient No (UHID)</label>
              <input 
                type="text" 
                name="PatientNo"
                placeholder="Auto-generated if empty"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.PatientNo}
                onChange={handleChange}
              />
            </div>

            {/* ================= SECTION 2: CONTACT & ADDRESS ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Contact Information
            </div>

            {/* Mobile No */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="tel" 
                  name="MobileNo"
                  required
                  placeholder="10-digit number"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.MobileNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Emergency Contact</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="tel" 
                  name="EmergencyContactNo"
                  placeholder="Alt. Number"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.EmergencyContactNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* State ID */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
              <select 
                name="StateID"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.StateID}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="1">Gujarat</option>
                <option value="2">Maharashtra</option>
                <option value="3">Rajasthan</option>
              </select>
            </div>

            {/* City ID */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
              <select 
                name="CityID"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.CityID}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="1">Rajkot</option>
                <option value="2">Ahmedabad</option>
                <option value="3">Mumbai</option>
              </select>
            </div>

            {/* PinCode */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Pin Code</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="PinCode"
                  placeholder="e.g. 360005"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.PinCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address */}
            <div className="col-span-1 lg:col-span-3">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Address</label>
              <textarea 
                name="Address"
                rows="2"
                placeholder="House No, Street Area, Landmark..."
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                value={formData.Address}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ================= SECTION 3: REGISTRATION INFO ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Registration Details
            </div>

            {/* Hospital ID */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="HospitalID"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.HospitalID}
                  onChange={handleChange}
                >
                  <option value="">Select Hospital</option>
                  <option value="1">City Care General Hospital</option>
                  <option value="2">Sunrise Multispeciality</option>
                </select>
              </div>
            </div>

            {/* Registration Date Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Registration Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="datetime-local" 
                  name="RegistrationDateTime"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.RegistrationDateTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Referred By */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Referred By</label>
              <input 
                type="text" 
                name="ReferredBy"
                placeholder="Dr. Name or Self"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.ReferredBy}
                onChange={handleChange}
              />
            </div>

            {/* Description / Notes */}
            <div className="col-span-1 lg:col-span-3">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description / Notes</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="Any specific medical history or notes..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

          </div>

          {/* --- Actions --- */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button 
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Save className="w-4 h-4" />
              Register Patient
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPatient;