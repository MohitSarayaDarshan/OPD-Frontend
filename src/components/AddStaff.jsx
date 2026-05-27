import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Building2, 
  FileText, 
  ShieldCheck,
  Mail,
  Lock
} from 'lucide-react';

const AddStaff = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // --- Form State ---
  const [formData, setFormData] = useState({
    StaffName: '',
    Email: '',      // Added Email field
    Password: '',   // Added Password field
    HospitalID: '',
    Description: '',
    UserID: '',
    Image: '',
    Role: ''
  });

  useEffect(() => {
    if (id) {
      fetch('http://localhost:3000/api/staffs/' + id, { credentials: 'include' })
        .then((res) => res.json())
        .then((json) => setFormData(json[0]))
        .catch(err => console.error("Error fetching staff:", err));
    }
  }, [id]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const { Created, Modified, StaffID, _id, Password,__v, ...updateData } = formData;
        const response = await fetch(
          "http://localhost:3000/api/staffs/update/" + id, {
            credentials: 'include',
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
          },
        );

        const result = await response.json();
        if (response.status === 201 || response.status === 200) {
          alert(`Staff edited successfully`);
          navigate("/admin/getStaff/" + id);
        } else {
          alert(`Error: ${result.message}`);
        }

        

      } catch (error) {
        console.error("Error editing staff:", error);
        alert("Failed to save Staff.");
      }
    } else {
      try {

        const { Created, Modified, StaffID, _id, Password, ...updateData } = formData;
        const response = await fetch(
          "http://localhost:3000/api/staffs/register", {
            credentials: 'include',
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
          },
        );

        const result = await response.json();
        

        const userData={Email:formData.Email, Password: formData.Password, Role: 'staff'};
        const response2=await fetch(
          "http://localhost:3000/api/signup",{
            credentials:'include',
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(userData)
          }
        )

        const result2 = await response2.json();
        if (response2.status === 201 || response2.status === 200 && (response.status === 201)) {
          alert(`Staff added with id ${result.StaffID}`);
          navigate("/admin/getAllStaffs");
        } else {
          alert(`Error: ${result.message}+ ${result2.message}`);
        }

      } catch (error) {
        console.error("Error saving Staff:", error);
        alert("Failed to save Staff.");
      }
    }
  };

  const handleCancel = () => { 
    if (id) { navigate('/admin/getStaff/' + id) } 
    else { navigate('/admin/getAllStaffs') }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{id ? 'Edit Staff Member' : 'Add Staff Member'}</h1>
          <p className="text-sm text-slate-500 mt-1">Register credentials and profile details for personnel.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-3xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <ShieldCheck className="w-5 h-5" />
          <h2>Personnel & Login Information</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

            {/* Staff Name */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
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

            {/* Role */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Role *</label>
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
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

            {/* Email Field */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email (Login ID) *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  name="Email"
                  required
                  disabled={id && true}
                  placeholder="staff@hospital.com"
                  
                  className={!id ? "w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all":"w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all cursor-not-allowed" }
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  name="Password"
                  required={!id} // Password required for new registration
                  disabled={id && true}
                  placeholder="••••••••"
                  className={!id ? "w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all":"w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all cursor-not-allowed" }
                  value={formData.Password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hospital ID */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital ID *</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="HospitalID"
                  placeholder='Hospital ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.HospitalID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* User ID */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">User ID *</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  name="UserID"
                  placeholder='User ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Media & Description Sections Remain Same */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Profile Media
            </div>
            
            <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Staff Image URL</label>
                <input 
                  type="text" 
                  name="Image"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.Image}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {formData.Image ? <img src={formData.Image} alt="Preview" className="w-full h-full object-cover" /> : <User className="w-8 h-8 text-gray-400" />}
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Staff Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button type="button" onClick={handleCancel} className="px-6 py-2.5 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
              <X className="w-4 h-4 inline mr-2" /> Cancel
            </button>
            <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transform hover:scale-105 transition-all">
              <Save className="w-4 h-4 inline mr-2" /> Save Staff Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;