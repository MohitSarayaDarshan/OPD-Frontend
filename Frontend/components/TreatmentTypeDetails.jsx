import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  ArrowLeft, 
  Syringe, 
  Building2, 
  FileText, 
  Calendar, 
  Clock,
  ShieldCheck,
  Edit,
  Trash2,
  Hash
} from 'lucide-react';

const TreatmentTypeDetails = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // --- Mock Data (Replace with API call using id) ---
  const treatmentData = {
    TreatmentTypeID: id || 1,
    TreatmentTypeName: "General Consultation",
    TreatmentTypeShortName: "GEN-OPD",
    HospitalID: 1001,
    HospitalName: "City Care General Hospital",
    Description: "Standard physician checkup and vitals assessment",
    UserID: 501,
    Created: "2025-10-15T09:30:00",
    Modified: "2025-10-15T09:30:00"
  };

  // Helper to format dates
  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    return new Date(isoString).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const handleDelete = async () => {
    if(window.confirm("Are you sure you want to delete this treatment type?")) {
      try {
        // TODO: Replace with actual API call
        // await fetch(`/api/treatments/${id}`, { method: 'DELETE' });
        navigate('/admin/getAllTreatments');
      } catch (error) {
        console.error('Error deleting treatment type:', error);
        alert('Failed to delete treatment type. Please try again.');
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Page Header --- */}
      <div className="flex items-center gap-4 mb-8 animate-slide-down">
        <button 
          onClick={() => navigate('/admin/getAllTreatments')}
          className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 text-slate-500 hover:text-slate-700 transform hover:scale-110 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Treatment Type Details</h1>
          <p className="text-sm text-slate-500 mt-1">View information for Treatment Type ID: #{treatmentData.TreatmentTypeID}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: Main Details Card --- */}
        <div className="lg:col-span-2 space-y-6 animate-scale-in">
          
          {/* Main Card */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-600 to-purple-500 relative"></div>
            <div className="px-8 pb-8">
              <div className="relative -mt-12 mb-4">
                <div className="w-24 h-24 bg-white rounded-full p-1.5 shadow-md">
                   <div className="w-full h-full bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                      <Syringe className="w-10 h-10" />
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{treatmentData.TreatmentTypeName}</h2>
                  <div className="flex items-center gap-2 text-slate-500 mt-1">
                    <Hash className="w-4 h-4" />
                    <span className="font-mono">{treatmentData.TreatmentTypeShortName}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wide rounded-full border border-green-100">
                  Active
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-purple-500" /> Description
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {treatmentData.Description || "No description provided."}
                </p>
              </div>
            </div>
          </div>

          {/* Hospital Association */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600" />
              Hospital Association
            </h3>
            <div className="grid grid-cols-1 gap-4">
               <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                 <p className="text-xs text-slate-400 font-medium uppercase">Hospital ID</p>
                 <p className="text-lg font-mono font-bold text-slate-700 mt-1">#{treatmentData.HospitalID}</p>
                 <p className="text-sm text-slate-500 mt-1">{treatmentData.HospitalName}</p>
               </div>
            </div>
          </div>

        </div>

        {/* --- Right Column: System Meta Data --- */}
        <div className="lg:col-span-1 space-y-6 animate-scale-in">
          
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              System Data
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-xs text-slate-500">Treatment Type ID</span>
                <span className="text-sm font-mono font-medium text-slate-700">#{treatmentData.TreatmentTypeID}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-xs text-slate-500">Created By User</span>
                <span className="text-sm font-mono font-medium text-slate-700">ID: {treatmentData.UserID}</span>
              </div>
              
              <div className="py-2">
                <span className="text-xs text-slate-500 block mb-1">Created On</span>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                   <Calendar className="w-3.5 h-3.5 text-slate-400" />
                   {formatDate(treatmentData.Created)}
                </div>
              </div>

              <div className="py-2">
                <span className="text-xs text-slate-500 block mb-1">Last Modified</span>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                   <Clock className="w-3.5 h-3.5 text-slate-400" />
                   {formatDate(treatmentData.Modified)}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-purple-50 rounded-xl border border-purple-100 p-6">
             <h4 className="text-sm font-bold text-purple-900 mb-3">Actions</h4>
             <div className="space-y-2">
                <button 
                  onClick={() => navigate(`/admin/editTreatment/${treatmentData.TreatmentTypeID}`)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-white text-purple-600 text-sm font-medium rounded-lg border border-purple-200 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm transform hover:scale-105 active:scale-95"
                >
                  <Edit className="w-4 h-4" />
                  Edit Treatment Type
                </button>
                <button 
                  onClick={handleDelete}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-white text-red-600 text-sm font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-all duration-300 shadow-sm transform hover:scale-105 active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Treatment Type
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TreatmentTypeDetails;
