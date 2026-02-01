import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  Building2, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Hash, 
  ToggleLeft,
  ToggleRight,
  ImageIcon,
  AlignLeft
} from 'lucide-react';

const AddHospital = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  // --- Form State aligned with HospitalSchema ---
  const [formData, setFormData] = useState({});

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Convert to Number for schema compliance where necessary
    const numericFields = [
       'DefaultPaymentModeID', 'RegistrationCharge', 
      'RegistrationValidityMonths', 'OpeningPatientNo', 
      'OpeningOPDNo', 'OpeningReceiptNo', 'UserID'
    ];

    let finalValue = type === 'checkbox' ? checked : value;
    
    if (numericFields.includes(name) && value !== '') {
      finalValue = Number(value);
    }

    setFormData({ 
      ...formData, 
      [name]: finalValue 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const { Created, Modified, HospitalID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/hospitals/update/" + id,
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
          alert(`Hospital edited with id ${result.HospitalID}`);
          navigate("/admin/getHospital/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing hospital:", error);
        alert("Failed to save hospital. Please check schema constraints.");
      }
    } else {
      try {
        console.log("Submitting to MongoDB Schema:", formData);
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/hospitals/register",
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
          alert(`Hospital added with id ${result.HospitalID}`);
          navigate("/admin/getAllHospitals");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving hospital:", error);
        alert("Failed to save hospital. Please check schema constraints.");
      }
    }
  };
  const handleCancel = () =>{ if(id){navigate('/admin/getHospital/'+id)}else{navigate('/admin/getAllHospitals')}};

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add New Hospital</h1>
          <p className="text-sm text-slate-500 mt-1">Register a new facility into the management system.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-5xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <Building2 className="w-5 h-5" />
          <h2>Hospital Configuration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">

            {/* --- SECTION 1: IDENTITY --- */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
              Identity & Logistics
            </div>

            {/* Hospital Name */}
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="HospitalName"
                  required
                  maxLength={250}
                  placeholder="e.g. City Care General Hospital"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.HospitalName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Opening Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Opening Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  name="OpeningDate"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OpeningDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Hospital Image URL</label>
              <div className="relative">
                <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="url" 
                  name="ImageURL"
                  placeholder="https://example.com/logo.png"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.ImageURL}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Address"
                  rows="2"
                  maxLength={500}
                  placeholder="Full physical address..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* --- SECTION 2: BILLING --- */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Registration & Billing Rules
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Reg. Charge</label>
              <input 
                type="number" 
                name="RegistrationCharge"
                placeholder="0"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.RegistrationCharge}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Validity (Months)</label>
              <input 
                type="number" 
                name="RegistrationValidityMonths"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.RegistrationValidityMonths}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Default Payment Mode</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="DefaultPaymentModeID"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.DefaultPaymentModeID}
                  onChange={handleChange}
                >
                  <option value="">Select Mode</option>
                  <option value="1">Cash</option>
                  <option value="2">UPI</option>
                  <option value="3">Card</option>
                </select>
              </div>
            </div>

            {/* --- SECTION 3: SEQUENCES --- */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              System Sequences (Required)
            </div>

            {['OpeningPatientNo', 'OpeningOPDNo', 'OpeningReceiptNo'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {field.replace(/([A-Z])/g, ' $1').trim()} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="number" 
                    name={field}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <div className="relative">
                <AlignLeft className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="2"
                  maxLength={250}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Toggles */}
            <div className="col-span-full flex flex-col md:flex-row gap-6 mt-2">
              <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-all">
                <div className="text-blue-600">
                    {formData.IsRateEnableInReceipt ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input type="checkbox" name="IsRateEnableInReceipt" className="hidden" checked={formData.IsRateEnableInReceipt} onChange={handleChange} />
                <span className="text-sm font-medium text-slate-700">Enable Rate in Receipt</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-all">
                <div className="text-blue-600">
                    {formData.IsRegistrationFeeEnableInOPD ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input type="checkbox" name="IsRegistrationFeeEnableInOPD" className="hidden" checked={formData.IsRegistrationFeeEnableInOPD} onChange={handleChange} />
                <span className="text-sm font-medium text-slate-700">Enable Reg. Fee in OPD</span>
              </label>
            </div>

          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button type="button" onClick={handleCancel} className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
              <X className="w-4 h-4" /> Cancel
            </button>
            <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm transition-all">
              <Save className="w-4 h-4" /> Save Hospital
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHospital;