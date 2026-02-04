import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useEffect } from 'react';

const AddStaff = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const {id}=useParams()

  // --- Form State ---
  const [formData, setFormData] = useState({
    StaffName: '',
    HospitalID: '', // Usually derived from HospitalID, but kept as per your request
    Description: '',
    UserID: '',
    Image:'',
    Role:''
  });

  
  if(id){
      useEffect(()=>{
        fetch('http://localhost:3000/api/staffs/'+id)
        .then((res)=>res.json())
        .then((json)=>setFormData(json[0]))
      },[])
    }
  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Logic to handle HospitalName automatically if HospitalID is selected
    
      setFormData({ 
        ...formData, 
        [name]: type === 'checkbox' ? checked : value 
      });
    
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const { Created, Modified, StaffID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/staffs/update/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          },
        );

        const result = await response.json();
        console.log(result);
        if (response.status == 201) {
          alert(`OPD edited with id ${result.StaffID}`);
          navigate("/admin/getStaff/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing staff:", error);
        alert("Failed to save Staff. Please check schema constraints.");
      }
    } else {
      try {
        console.log("Submitting to MongoDB Schema:", formData);
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/staffs/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        const result = await response.json();
        console.log(result);
        if (response.status == 201) {
          alert(`Staff added with id ${result.StaffID}`);
          navigate("/admin/getAllStaffs");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving Staff:", error);
        alert("Failed to save Staff. Please check schema constraints.");
      }
    }
  };

  const handleCancel = () =>{ if(id){navigate('/admin/getStaff/'+id)}else{navigate('/admin/getAllStaffs')}};


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
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="HospitalID"
                  placeholder='Hospital ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.HospitalID}
                  onChange={handleChange}
                />

              </div>
            </div>

            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">User ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="UserID"
                  placeholder='User ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.UserID}
                  onChange={handleChange}
                />

              </div>
            </div>

             <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="Role"
                  required
                  placeholder="e.g. Nurse"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.Role}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Profile Media
            </div>
            
            <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* URL Input */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Staff Image URL
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="Image"
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    value={formData.Image}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2 italic">Paste a direct link to the staff's portrait.</p>
              </div>
            
              {/* Image Preview Box */}
              <div className="flex flex-col items-center justify-center">
                <label className="block text-sm font-semibold text-slate-700 mb-2 w-full text-center md:text-left">
                  Preview
                </label>
                <div className="w-32 h-32 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
                  {formData.Image ? (
                    <img 
                      src={formData.Image} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=Invalid+URL';
                      }}
                    />
                  ) : (
                    <User className="w-12 h-12 text-gray-400" />
                  )}
                </div>
              </div>
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