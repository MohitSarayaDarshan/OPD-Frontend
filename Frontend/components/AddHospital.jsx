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
  Settings, 
  FileText, 
  Hash, 
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { IndexContext } from '../contexts/indexContext';
import { ArrayContext } from '../contexts/ArrayContext';

const AddHospital = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const {index,setIndex}=useContext(IndexContext);
   const{hospitalList,setHospitalList}=useContext(ArrayContext)


  // --- Form State ---
  
  const [formData, setFormData] = useState({
    HospitalID: 0, // Auto-generated
    HospitalName: '',
    DefaultPaymentModeID: '',
    RegistrationCharge: '',
    RegistrationValidityMonths: '',
    OpeningDate: new Date().toISOString().split('T')[0], // Default Today
    OpeningPatientNo: '',
    OpeningOPDNo: '',
    OpeningReceiptNo: '',
    Description: '',
    UserID: 1, // Logged-in User
    Created: new Date().toISOString(),
    Modified: new Date().toISOString(),
    Address: '',
    IsRateEnableInReceipt: false,
    IsRegistrationFeeEnableInOPD: true
  });

  if(index)
  {
    
   

    setFormData({
      
    HospitalID: hospitalList[index].HospitalID, // Auto-generated
    HospitalName: hospitalList[index].HospitalName,
    DefaultPaymentModeID: hospitalList[index].DefaultPaymentModeID,
    RegistrationCharge: hospitalList[index].RegistrationCharge,
    RegistrationValidityMonths: hospitalList[index].RegistrationValidityMonths,
    OpeningDate: hospitalList[index].OpeningDate, // Default Today
    OpeningPatientNo: hospitalList[index].OpeningPatientNo,
    OpeningOPDNo: hospitalList[index].OpeningOPDNo,
    OpeningReceiptNo: hospitalList[index].OpeningReceiptNo,
    Description: hospitalList[index].Description,
    UserID: hospitalList[index].UserID, // Logged-in User
    Created: hospitalList[index].Created,
    Modified: hospitalList[index].Modified,
    Address: hospitalList[index].Address,
    IsRateEnableInReceipt: hospitalList[index].IsRateEnableInReceipt,
    IsRegistrationFeeEnableInOPD: hospitalList[index].IsRegistrationFeeEnableInOPD
    })
  }

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
    try {
      // TODO: Replace with actual API call
      console.log("Submitting Hospital Data:", formData);
      // Example: await fetch('/api/hospitals', { method: 'POST', body: JSON.stringify(formData) });
      
      // Navigate back to hospital list after successful submission
      if (index)
      {
      setHospitalList(hospitalList.map((hospital,i)=>{
        if (i==index)
        {
          return {...hospital,...formData}
        }

        return hospital
      }))
    }
      navigate('/admin/getAllHospitals');
    } catch (error) {
      console.error('Error saving hospital:', error);
      alert('Failed to save hospital. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/admin/getAllHospitals');
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add New Hospital</h1>
          <p className="text-sm text-slate-500 mt-1">Configure new branch details, billing rules, and sequences.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-5xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <Building2 className="w-5 h-5" />
          <h2>Hospital Configuration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">

            {/* ================= SECTION 1: GENERAL INFO ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
              General Information
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
                  placeholder="e.g. City Care General Hospital"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.HospitalName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Opening Date */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Opening Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  name="OpeningDate"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OpeningDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address */}
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Address"
                  rows="2"
                  placeholder="Full physical address..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Address}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Description */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea 
                name="Description"
                rows="2"
                placeholder="Branch specific notes..."
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                value={formData.Description}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* ================= SECTION 2: REGISTRATION & BILLING ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Registration & Billing Rules
            </div>

            {/* Registration Charge */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Reg. Charge <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 flex items-center justify-center font-bold">₹</div>
                <input 
                  type="number" 
                  name="RegistrationCharge"
                  required
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.RegistrationCharge}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Registration Validity */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Validity (Months) <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                name="RegistrationValidityMonths"
                required
                placeholder="e.g. 12"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                value={formData.RegistrationValidityMonths}
                onChange={handleChange}
              />
            </div>

            {/* Default Payment Mode */}
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

            {/* Toggles */}
            <div className="col-span-1 lg:col-span-3 flex flex-col md:flex-row gap-6 mt-2">
              
              {/* Toggle 1: Rate Enable */}
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                <div className={`text-blue-600 transition-transform ${formData.IsRateEnableInReceipt ? 'scale-110' : 'scale-100'}`}>
                    {formData.IsRateEnableInReceipt ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input 
                  type="checkbox" 
                  name="IsRateEnableInReceipt" 
                  className="hidden" 
                  checked={formData.IsRateEnableInReceipt}
                  onChange={handleChange}
                />
                <span className="text-sm font-medium text-slate-700">Enable Rate Editing in Receipts</span>
              </label>

              {/* Toggle 2: Reg Fee Enable */}
              <label className="flex items-center gap-3 cursor-pointer group p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                <div className={`text-blue-600 transition-transform ${formData.IsRegistrationFeeEnableInOPD ? 'scale-110' : 'scale-100'}`}>
                    {formData.IsRegistrationFeeEnableInOPD ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input 
                  type="checkbox" 
                  name="IsRegistrationFeeEnableInOPD" 
                  className="hidden" 
                  checked={formData.IsRegistrationFeeEnableInOPD}
                  onChange={handleChange}
                />
                <span className="text-sm font-medium text-slate-700">Enable Registration Fee in OPD</span>
              </label>

            </div>

            {/* ================= SECTION 3: SYSTEM SEQUENCES ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Opening Sequences (Start Numbers)
            </div>

            {/* Opening Patient No */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Opening Patient No</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="OpeningPatientNo"
                  placeholder="e.g. 1000"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OpeningPatientNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Opening OPD No */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Opening OPD No</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="OpeningOPDNo"
                  placeholder="e.g. 500"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OpeningOPDNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Opening Receipt No */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Opening Receipt No</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="OpeningReceiptNo"
                  placeholder="e.g. 2000"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OpeningReceiptNo}
                  onChange={handleChange}
                />
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
              Save Hospital
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddHospital;