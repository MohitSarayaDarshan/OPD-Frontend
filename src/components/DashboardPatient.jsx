import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Plus, 
  Activity, 
  FileText, 
  User, 
  ChevronRight, 
  Stethoscope,
  Pill,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useAuth } from '../contexts/useAuth';

const DashboardPatient = () => {
  const { expanded } = useContext(SidebarContext);
  const {user}=useAuth();
  console.log("user: "+JSON.stringify(user))

  // --- Dummy Data ---
  
  // Patient Profile
  // 1. Correct destructuring [brackets]
const [patient, setPatient] = useState({}); 

useEffect(() => {
  // 2. Define async function inside
  const fetchPatient = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/patients/email', {
        method: "POST", // 3. Changed to POST to allow sending the body
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(user) 
      });

      const jsonRes = await res.json();
      console.log("jsonRes",jsonRes);
      setPatient(jsonRes[0]);
    } catch (err) {
      console.error("Failed to fetch patient data", err);
    }
  };

  if (user) fetchPatient();
}, [user]); // 4. Depend on user so it runs once user is logged in

  // Next Scheduled Appointment
  const nextAppointment = {
    doctor: "Dr. Arjun Mehta",
    specialty: "Cardiologist",
    hospital: "City Care General Hospital",
    date: "14 Jan, 2026",
    time: "10:30 AM",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80"
  };

  // Health Vitals History (Visualized in Chart)
  const healthData = [
    { date: 'Oct 12', systolic: 138, diastolic: 88 },
    { date: 'Nov 05', systolic: 135, diastolic: 85 },
    { date: 'Nov 28', systolic: 130, diastolic: 82 },
    { date: 'Dec 15', systolic: 125, diastolic: 79 },
    { date: 'Jan 02', systolic: 120, diastolic: 78 },
  ];

  // Recent Activity Feed
  const recentActivities = [
    { id: 1, type: 'Visit', title: 'OPD Consultation', subtitle: 'Dr. Priya Sharma', date: 'Yesterday', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 2, type: 'Bill', title: 'Payment Receipt', subtitle: '₹500 for Reg. Fee', date: 'Yesterday', icon: <CreditCard className="w-4 h-4" /> },
    { id: 3, type: 'Report', title: 'Blood Test Report', subtitle: 'Complete Blood Count', date: '02 Jan', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, {patient.PatientName} 👋</h1>
          <p className="text-sm text-slate-500 mt-1">Patient No: {patient.PatientNo} | <span className="text-blue-600 font-semibold">{patient.Age} Yrs, {patient.BloodGroup}</span></p>
        </div>
        
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN (2/3 width) --- */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Hero Card: Next Appointment */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2">
                             <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg">
                                <Calendar className="w-5 h-5 text-white" />
                             </div>
                             <span className="text-sm font-semibold tracking-wide opacity-90">UPCOMING VISIT</span>
                        </div>
                        <span className="bg-green-400/20 text-green-100 border border-green-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase">
                            {nextAppointment.status}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <img 
                            src={nextAppointment.image} 
                            alt="Doctor" 
                            className="w-20 h-20 rounded-full border-4 border-white/20 shadow-md object-cover" 
                        />
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold">{nextAppointment.doctor}</h3>
                            <p className="text-blue-100 font-medium flex items-center gap-2 mt-1">
                                <Stethoscope className="w-4 h-4" />
                                {nextAppointment.specialty}
                            </p>
                            
                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-blue-50">
                                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                                    <Clock className="w-4 h-4" />
                                    {nextAppointment.date} • {nextAppointment.time}
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-4 h-4" />
                                    {nextAppointment.hospital}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Health Trends Chart */}
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-red-500" />
                            Blood Pressure Trends
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">Monitoring your systolic & diastolic levels over recent visits.</p>
                    </div>
                    <select className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-gray-50 outline-none text-slate-600">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                    </select>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={healthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorSys" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <Tooltip contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px'}} />
                            <Area type="monotone" dataKey="systolic" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSys)" name="Systolic" />
                            <Area type="monotone" dataKey="diastolic" stroke="#94a3b8" strokeWidth={2} fillOpacity={0} fill="transparent" strokeDasharray="5 5" name="Diastolic" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 3. Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'My Prescriptions', icon: <Pill className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50' },
                    { label: 'Lab Reports', icon: <FileText className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' },
                    { label: 'Payment History', icon: <CreditCard className="w-5 h-5 text-green-600" />, bg: 'bg-green-50' },
                    { label: 'Find Doctors', icon: <User className="w-5 h-5 text-orange-600" />, bg: 'bg-orange-50' },
                ].map((action, idx) => (
                    <button key={idx} className="bg-white p-4 rounded-xl border border-blue-50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col items-center justify-center gap-3 text-center">
                        <div className={`p-3 rounded-full ${action.bg}`}>
                            {action.icon}
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{action.label}</span>
                    </button>
                ))}
            </div>

        </div>

        {/* --- RIGHT COLUMN (1/3 width) --- */}
        <div className="space-y-8">
            
        

            {/* 5. Recent Activity Feed */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="font-bold text-slate-900">Recent Activity</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {recentActivities.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-blue-50/50 transition-colors cursor-pointer flex items-center gap-4">
                            <div className="p-2.5 bg-gray-100 rounded-lg text-slate-500 shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                                    <span className="text-[10px] font-medium text-slate-400 bg-gray-100 px-1.5 py-0.5 rounded">{item.date}</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5 truncate">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                    <button className="text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wide">View Full History</button>
                </div>
            </div>

            {/* 6. Alert / Notification Card */}
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100 flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-bold text-orange-900">Follow-up Required</h4>
                    <p className="text-xs text-orange-800/80 mt-1 leading-relaxed">
                        Dr. Priya recommended a follow-up visit for your skin allergy by 20th Jan.
                    </p>
                    <button className="text-xs font-bold text-orange-700 hover:text-orange-900 mt-3 underline">
                        Schedule Now
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPatient;