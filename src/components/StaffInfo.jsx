import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  User, 
  Mail, 
  Building2, 
  FileText, 
  ShieldCheck, 
  ArrowLeft, 
  Edit,
  IdCard,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../contexts/useAuth';

const StaffInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expanded } = useContext(SidebarContext);
  const {user}=useAuth();
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/staffs/email`, { 
          credentials: 'include' ,
          method:'POST',
          headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        });
        const data = await response.json();
        setStaff(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error fetching staff details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffData();
  }, [id]);

  if (loading) return <div className="p-8 text-center text-slate-500 font-medium">Loading Professional Profile...</div>;
  if (!staff) return <div className="p-8 text-center text-red-500">Staff record not found.</div>;

  return (
    <div className={`min-h-screen bg-slate-50 p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-500`}>
      
      {/* Navigation Header */}
      <div className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Dashboard
        </button>
        <button 
          onClick={() => navigate(`/staff/dashboard`)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition-all"
        >
          <Edit size={18} /> Edit Profile
        </button>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Identity Card (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
            <div className="px-6 pb-8 -mt-12 text-center">
              <div className="inline-block relative">
                <div className="w-28 h-28 rounded-3xl border-4 border-white shadow-md overflow-hidden bg-slate-100">
                  {staff.Image ? (
                    <img src={staff.Image} alt={staff.StaffName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50">
                      <User size={40} className="text-blue-200" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" title="Active Account"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mt-4">{staff.StaffName}</h2>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{staff.Role || 'Medical Staff'}</p>
              
              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-around">
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase">Staff ID</p>
                  <p className="text-sm font-mono font-bold text-slate-700">#{staff.StaffID}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase">User ID</p>
                  <p className="text-sm font-mono font-bold text-slate-700">{staff.UserID}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Digital Contact</h3>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-slate-400 font-medium">Work Email</p>
                <p className="text-sm font-semibold text-slate-700 truncate">{staff.Email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Details (Span 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Work Affiliation */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Building2 className="text-blue-600" size={20} />
                Hospital Affiliation
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-bold uppercase">Primary Unit</span>
            </div>
            <div className="p-8">
               <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-slate-400">
                    <Building2 size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">Hospital ID: {staff.HospitalID}</h4>
                    <p className="text-slate-500 text-sm mt-1 max-w-md">
                      Currently assigned to this facility. Use the Hospital Management module to view department-specific rosters.
                    </p>
                    <button className="mt-4 flex items-center gap-1 text-blue-600 text-xs font-bold hover:underline">
                      View Hospital Details <ExternalLink size={12} />
                    </button>
                  </div>
               </div>
            </div>
          </div>

          {/* Professional Biography */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-800 flex items-center gap-2">
              <FileText className="text-blue-600" size={20} />
              Professional Description
            </div>
            <div className="p-8">
              {staff.Description ? (
                <p className="text-slate-600 leading-relaxed italic whitespace-pre-wrap">
                  "{staff.Description}"
                </p>
              ) : (
                <div className="text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <p className="text-slate-400 text-sm">No professional bio has been provided yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* System Footer Metadata */}
          <div className="flex items-center justify-between px-2">
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                   <Calendar size={12} /> 
                   Registered: {new Date().toLocaleDateString()} {/* Replace with Created if available */}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                   <ShieldCheck size={12} className="text-green-500" /> Verified Staff
                </div>
             </div>
             <p className="text-[10px] font-mono text-slate-300">REF_ID: {staff._id}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StaffInfo;