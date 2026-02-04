import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  Stethoscope, 
  User, 
  Clock, 
  FileText, 
  ToggleLeft, 
  ToggleRight,
  Hash,
  IndianRupee,
  History,
  CalendarDays,
  UserRound
} from 'lucide-react';

const AddOPD = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const{id}=useParams()

  // --- Form State ---
  const [formData, setFormData] = useState({
    OPDID: 1,
  OPDNo: '',
  OPDDateTime:'2026-01-25T12:30:00.000Z',
  PatientID: null,
  IsFollowUpCase: false,
  TreatedByDoctorID: null,
  RegistrationFee: null,
  Description: '',
  UserID: null,
  OLDOPDNo: ''
  });

  if(id){
    useEffect(()=>{
      fetch('http://localhost:3000/api/opds/'+id)
      .then((res)=>res.json())
      .then((json)=>setFormData(json[0]))
    },[])
  }

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const formatDateTime = (dateString) => {
  if (!dateString) return ""; // Handle undefined/null during initial load
  const dateObj = new Date(dateString);
  return new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60000))
    .toISOString()
    .slice(0, 16);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const { Created, Modified, OPDID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/opds/update/" + id,
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
          alert(`OPD edited with id ${result.OPDID}`);
          navigate("/admin/getOPD/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing hospital:", error);
        alert("Failed to save OPD. Please check schema constraints.");
      }
    } else {
      try {
        console.log("Submitting to MongoDB Schema:", formData);
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/opds/register",
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
          alert(`Hospital added with id ${result.OPDID}`);
          navigate("/admin/getAllOPDs");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving OPD:", error);
        alert("Failed to save OPD. Please check schema constraints.");
      }
    }
  };
  const handleCancel = () =>{ if(id){navigate('/admin/getOPD/'+id)}else{navigate('/admin/getAllOPDs')}};


  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{id?'Edit':'New'} OPD Visit</h1>
          <p className="text-sm text-slate-500 mt-1">Record a new patient consultation and assign an attending doctor.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-5xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <CalendarDays className="w-5 h-5" />
          <h2>Consultation Details</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">

            {/* ================= SECTION 1: VISIT INFO ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
              Visit Identification
            </div>

            {/* OPD Number (If manual) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">OPD No.</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="OPDNo"
                  placeholder="Auto-generated"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none"
                  value={formData.OPDNo}
                  onChange={handleChange}
                  readOnly // Usually system generated
                />
              </div>
            </div>

            {/* OPD Date Time */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Visit Date & Time <span className="text-red-500">*</span></label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="datetime-local" 
                  name="OPDDateTime"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formatDateTime(formData.OPDDateTime)}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Patient Search/Select */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Patient <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  name='PatientID'
                  placeholder='Patient ID'
                  type='text'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.PatientID}
                  onChange={handleChange}
                >
                  
                </input>
              </div>
            </div>

            {/* ================= SECTION 2: CLINICAL ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Clinical Assignment
            </div>

            {/* Doctor */}
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Attending Doctor <span className="text-red-500">*</span></label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  name='TreatedByDoctorID'
                  placeholder="Treated By Doctor ID"
                  type='text'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.TreatedByDoctorID}
                  onChange={handleChange}
                >
                </input>
              </div>
            </div>

            {/* Follow Up Toggle */}
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-3 cursor-pointer group p-2.5 px-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all w-full h-[42px]">
                <div className={`text-blue-600 transition-transform ${formData.IsFollowUpCase ? 'scale-110' : 'scale-100'}`}>
                    {formData.IsFollowUpCase ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-300" />}
                </div>
                <input 
                  
                  type="checkbox" 
                  name="IsFollowUpCase" 
                  className="hidden" 
                  checked={formData.IsFollowUpCase}
                  onChange={handleChange}
                />
                <span className="text-sm font-semibold text-slate-700">Follow-up Case?</span>
              </label>
            </div>

            {/* ================= SECTION 3: BILLING & HISTORY ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Fees & Reference
            </div>

            {/* Registration Fee */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Registration Fee</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</div>
                <input 
                  type="number" 
                  name="RegistrationFee"
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.RegistrationFee}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Old OPD No */}
            <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Previous OPD No. (If available)</label>
              <div className="relative">
                <History className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="OLDOPDNo"
                  placeholder="Reference old visit number"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.OLDOPDNo}
                  onChange={handleChange}
                />
              </div>
            </div>

             <div className="col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-2">User ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="UserID"
                  placeholder="User ID"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData.UserID}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Description */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Chief Complaints / Remarks</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="Enter patient symptoms or reason for visit..."
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
              {id?'Edit':'Complete'} Registration
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddOPD;