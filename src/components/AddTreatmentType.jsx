import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  Stethoscope, 
  Building2, 
  Type, 
  FileEdit,
  Activity
} from 'lucide-react';

const AddTreatmentType = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const{id}=useParams();


  // --- Form State ---
  const [formData, setFormData] = useState({
    TreatmentTypeName: '',
    TreatmentTypeShortName: '',
    HospitalID: '',
    Description: '',
    UserID: 1, 
  });

  if (id) {
      useEffect(()=>{
            fetch('http://localhost:3000/api/treatments/'+id), {credentials:'include'}
            .then((res)=>res.json())
            .then((json)=>setFormData(json[0]))
          },[])
    }

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (id) {
      try {
        const { Created, Modified, TreatmentTypeID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/treatments/update/" + id, {credentials:'include',
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
          alert(`Sub-Treatment Type edited with id ${result.TreatmentTypeID}`);
          navigate("/admin/getTreatment/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing Treatment Type:", error);
        alert("Failed to save Treatment Type. Please check schema constraints.");
      }
    } else {
      try {
        const { Created, Modified, TreatmentTypeID, _id, ...addData } = formData;
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/treatments/register", {credentials:'include',
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
          alert(`SubTreatment added with id ${result.TreatmentTypeID}`);
          navigate("/admin/getAllTreatments");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving Sub-Treatment Type:", error);
        alert("Failed to save Sub-Treatment Type. Please check schema constraints.");
      }
    }
  };
  const handleCancel = () =>{ if(id){navigate('/admin/getTreatment/'+id)}else{navigate('/admin/getAllTreatments')}};


  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add Treatment Type</h1>
          <p className="text-sm text-slate-500 mt-1">Define medical services, procedures, or consultation categories.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-3xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <Activity className="w-5 h-5" />
          <h2>Service Category Details</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

            {/* Treatment Type Name */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Treatment Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="TreatmentTypeName"
                  required
                  placeholder="e.g. General Consultation"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.TreatmentTypeName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Short Name */}
            <div className="col-span-full md:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Short Code / Abbreviation</label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="TreatmentTypeShortName"
                  placeholder="e.g. GEN-CON"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.TreatmentTypeShortName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Hospital ID */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Assign to Hospital <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  name="HospitalID"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.HospitalID}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Description */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Service Description</label>
              <div className="relative">
                <FileEdit className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="Provide details about what this treatment type covers..."
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
              Save Treatment Type
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTreatmentType;