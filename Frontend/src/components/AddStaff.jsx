import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Building2, 
  FileText, 
  ToggleLeft, 
  ToggleRight,
  Briefcase,
  MapPin,
  ShieldCheck
} from 'lucide-react';

const AddStaff = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  // --- Form State ---
  const [formData, setFormData] = useState({
    StaffID: 0,
    StaffName: '',
    HospitalID: '',
    HospitalName: '', // Usually derived from HospitalID, but kept as per your request
    Description: '',
    IsActive: true,
    UserID: 1, 
    Created: new Date().toISOString(),
    Modified: new Date().toISOString()
  });

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Logic to handle HospitalName automatically if HospitalID is selected
    if (name === "HospitalID") {
      const hospitalMap = {
        "1": "City General Hospital",
        "2": "Suburban Clinic"
      };
      setFormData({
        ...formData,
        HospitalID: value,
        HospitalName: hospitalMap[value] || ""
      });
    } else {
      setFormData({ 
        ...formData, 
        [name]: type === 'checkbox' ? checked : value 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting Staff Data:", formData);
      // API call logic here
      navigate('/admin/getAllStaff');
    } catch (error) {
      console.error('Error saving staff member:', error);
      alert('Failed to save staff record.');
    }
  };

  const handleCancel = () => {
    navigate('/admin/getAllStaffs');
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add Staff Member</h1>
          <p className="text-sm text-slate-500 mt-1">Register new medical professionals and administrative personnel to the system.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-3xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <ShieldCheck className="w-5 h-5" />
          <h2>Personnel Information</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

            {/* Staff Name */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="StaffName"
                  required
                  placeholder="e.g. Dr. Sarah Jenkins"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.StaffName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Job Title / Role (Mapped to Description or specific field) */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital Branch <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="HospitalID"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.HospitalID}
                  onChange={handleChange}
                >
                  <option value="">Select Hospital</option>
                  <option value="1">City General Hospital</option>
                  <option value="2">Suburban Clinic</option>
                </select>
              </div>
            </div>

            {/* Hospital Name (Read Only / Auto-filled) */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Assigned Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="HospitalName"
                  readOnly
                  placeholder="Select a hospital above"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-500 outline-none"
                  value={formData.HospitalName}
                />
              </div>
            </div>

            {/* Is Active Toggle */}
            <div className="col-span-full md:col-span-1 flex items-end pb-1">
              <label className="flex items-center gap-3 cursor-pointer group p-2 px-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all w-full">
                <div className={`text-blue-600 transition-transform ${formData.IsActive ? 'scale-110' : 'scale-100'}`}>
                    {formData.IsActive ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input 
                  type="checkbox" 
                  name="IsActive" 
                  className="hidden" 
                  checked={formData.IsActive}
                  onChange={handleChange}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-700">Employment Status</span>
                  <span className="text-xs text-slate-500">{formData.IsActive ? 'Currently Employed' : 'On Leave / Inactive'}</span>
                </div>
              </label>
            </div>

            {/* Description / Staff Bio */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Staff Description & Role Notes</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="Specializations, certifications, or department notes..."
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
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-300"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <Save className="w-4 h-4" />
              Save Staff Record
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddStaff;