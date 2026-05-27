import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Mail, 
  Building2, 
  FileText, 
  ShieldCheck, 
  Image as ImageIcon,
  IdCard
} from 'lucide-react';
import { useAuth } from '../contexts/useAuth';

const EditStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expanded } = useContext(SidebarContext);

  const [formData, setFormData] = useState({
    StaffName: '',
    Email: '',
    HospitalID: '',
    UserID: '',
    Image: '',
    Description: '',
    Role: ''
  });

  const [loading, setLoading] = useState(true);
  const {user}=useAuth()
  // --- Fetch Existing Staff Data ---
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/staffs/email`, { 
          credentials: 'include',
          method:'POST',
          headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        });
        const json = await response.json();
        // Assuming your API returns an array [staffObject]
        setFormData(Array.isArray(json) ? json[0] : json);
      } catch (error) {
        console.error("Error fetching staff:", error);
        alert("Failed to load staff details.");
      } finally {
        setLoading(false);
      }
    };
    fetchStaff();
  }, [id]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Destructure to remove system-generated fields before sending to API
      const { 
        StaffID, 
        _id, 
        Created, 
        Modified, 
        __v, 
        ...updateData 
      } = formData;

      const response = await fetch(`http://localhost:3000/api/staffs/update/${formData.StaffID}`, {
        method: "PUT",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (response.status === 201 || response.status === 200) {
        alert("Staff record updated successfully!");
        navigate(`/staff/info`);
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error updating staff:", error);
      alert("Failed to save changes.");
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Loading Staff Record...</div>;

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-500`}>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Edit Staff Member</h1>
            <p className="text-sm text-slate-500 mt-1">Modify professional details and system access for {formData.StaffName}.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Form Header */}
          <div className="px-8 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-2 text-blue-600 font-semibold">
            <ShieldCheck className="w-5 h-5" />
            <h2>Staff Credentials & Role</h2>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Staff Name */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="StaffName" 
                  value={formData.StaffName} 
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                  required 
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  name="Email" 
                  value={formData.Email} 
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                  required 
                />
              </div>
            </div>

            {/* Role & HospitalID */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Designated Role</label>
              <div className="relative">
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="Role" 
                  value={formData.Role} 
                  onChange={handleChange} 
                  placeholder="e.g. Senior Surgeon"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Hospital ID *</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="number" 
                  name="HospitalID" 
                  value={formData.HospitalID} 
                  onChange={handleChange} 
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                  required 
                />
              </div>
            </div>

            {/* Image URL Section */}
            <div className="col-span-full grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-blue-50/30 p-4 rounded-xl border border-blue-50">
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-blue-400 uppercase mb-2">Profile Image URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" />
                  <input 
                    type="text" 
                    name="Image" 
                    value={formData.Image} 
                    onChange={handleChange} 
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-xl border-2 border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {formData.Image ? (
                    <img src={formData.Image} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
                  ) : (
                    <User className="w-full h-full p-4 text-slate-300" />
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-full">
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Professional Bio / Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description" 
                  value={formData.Description} 
                  onChange={handleChange} 
                  rows="3" 
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none resize-none transition-all"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-300 rounded-lg text-slate-600 hover:bg-white transition-all font-medium"
            >
              <X size={18} /> Cancel
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transform hover:scale-105 transition-all font-medium"
            >
              <Save size={18} /> Update Staff Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStaff;