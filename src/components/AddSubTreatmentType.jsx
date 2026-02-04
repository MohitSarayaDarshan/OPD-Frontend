import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  Layers, 
  Stethoscope, 
  IndianRupee, 
  FileText, 
  ToggleLeft, 
  ToggleRight,
  Wallet,
  Activity
} from 'lucide-react';
import { useEffect } from 'react';

const AddSubTreatmentType = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const{id}=useParams();
 

  // --- Form State ---
  const [formData, setFormData] = useState({
    SubTreatmentTypeID: '',
    SubTreatmentTypeName: '',
    TreatmentTypeID: '',
    Rate: '',
    IsActive: false,
    Description: '',
    UserID: '',
    AccountID: ''
    });

  useEffect(() => {
  if (id) {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/subtreatments/${id}`);
        const data = await response.json();
        setFormData(data[0]); // Fill the form with existing data
      } catch (err) {
        console.error("Failed to fetch sub-treatment", err);
      }
    };
    fetchData();
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
        const { Created, Modified, SubTreatmentTypeID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/subtreatments/update/" + id,
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
          alert(`Sub-Treatment Type edited with id ${result.SubTreatmentTypeID}`);
          navigate("/admin/addSubTreatment/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing Sub-Treatment Type:", error);
        alert("Failed to save Sub-Treatment Type. Please check schema constraints.");
      }
    } else {
      try {
        const { Created, Modified, SubTreatmentTypeID, _id, ...addData } = formData;
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/subtreatments/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addData),
          },
        );

        const result = await response.json();
        console.log(result);
        if (response.status == 201) {
          alert(`Hospital added with id ${result.SubTreatmentTypeID}`);
          navigate("/admin/getAllSubTreatments");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving Sub-Treatment Type:", error);
        alert("Failed to save Sub-Treatment Type. Please check schema constraints.");
      }
    }
  };
  const handleCancel = () =>{ if(id){navigate('/admin/addSubTreatment/'+id)}else{navigate('/admin/getAllSubTreatments')}};


  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add Sub-Treatment Type</h1>
          <p className="text-sm text-slate-500 mt-1">Define specific procedures and their associated costs under main treatment categories.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-4xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <Layers className="w-5 h-5" />
          <h2>Procedure & Pricing Details</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

            {/* Sub-Treatment Name */}
            <div className="">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Sub-Treatment Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="SubTreatmentTypeName"
                  required
                  placeholder="e.g. Deep Tissue Massage or Blood Sugar Test"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.SubTreatmentTypeName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Parent Treatment Category */}
            {/* <div className="col-span-full lg:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Main Treatment Type <span className="text-red-500">*</span></label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="TreatmentTypeID"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.TreatmentTypeID}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="1">Physiotherapy</option>
                  <option value="2">Laboratory</option>
                  <option value="3">Radiology</option>
                </select>
              </div>
            </div> */}
            <div className="">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Main Treatment ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="TreatmentTypeID"
                  required
                  placeholder="e.g. Deep Tissue Massage or Blood Sugar Test"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.TreatmentTypeID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Rate / Price */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Rate (Charge) <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</div>
                <input 
                  type="number" 
                  name="Rate"
                  required
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.Rate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account ID Mapping */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Account Mapping ID</label>
              <div className="relative">
                <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="AccountID"
                  placeholder="Ledger Code"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.AccountID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <div className="">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Main Treatment ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="TreatmentTypeID"
                  required
                  placeholder="e.g. Deep Tissue Massage or Blood Sugar Test"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.TreatmentTypeID}
                  onChange={handleChange}
                />
              </div>
            </div> */}

            
            <div className="">
              <label className="block text-sm font-semibold text-slate-700 mb-2">User ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="number" 
                  name="UserID"
                  required
                  placeholder="User ID"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Status Toggle */}
            <div className="flex items-end pb-1">
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
                <span className="text-sm font-semibold text-slate-700">{formData.IsActive ? 'Active' : 'Inactive'}</span>
              </label>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Notes / Guidelines</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="Additional information about this specific procedure..."
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
              Save Sub-Treatment
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddSubTreatmentType;