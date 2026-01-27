// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/Sidebar'
// import { Download, Edit, Eye, Hospital, Stethoscope, Trash2, User, User2, UserCircle, Users, UserX2 } from 'lucide-react';
// import { D, Doctor, DoctorMale, Dollar, MoneyBag, PatientBand, RegularPatient, VirusPatient } from 'healthicons-react';

// function DashboardAdmin() {
//   const {expanded}=useContext(SidebarContext);

//   return (
//     <>
//   <div className={`flex-1 flex flex-col  ${expanded?"ml-64":"ml-16"} p-6 duration-1000 transition-all h-screen`}>
//     <div className={`grid grid-cols-2 gap-6 w-full`}>
//         <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Hospitals</p>
//           <p className={`font-bold  text-3xl m-4`}>24</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <Hospital className={`text-gray-800  h-[50px] w-[50px]`}/>
//               </div>
//           </div>
//         </div>

//         <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Doctors</p>
//           <p className={`font-bold  text-3xl m-4`}>48</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <DoctorMale className={`text-gray-800  h-[50px] w-[50px]`}/>
//               </div>
//           </div>
//         </div>

//         <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Patients</p>
//           <p className={`font-bold  text-3xl m-4`}>16</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <Users className={`text-gray-800  h-[50px] w-[50px]`}/>
//               </div>
//           </div>
//         </div>

//        <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Revenue</p>
//           <p className={`font-bold  text-3xl m-4`}>$1800</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <MoneyBag className={`text-gray-800  h-[50px] w-[50px]`}/>
//               </div>
//           </div>
//         </div>
//       </div>
//       <p className={`text-3xl font-bold my-3`}>Recent Activity</p>
//       <div className={`flex-1 overflow-y-scroll my-3`}>
          
//         <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-800">
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Patient Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Hospital Name</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Registration Date</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">View</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Row 1 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4 font-bold text-gray-800">101</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">Smit Gohel</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Civil Hospital</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">01-01-2026</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
                
//             </tbody>
//           </table>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default DashboardAdmin



import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Users, 
  Calendar, 
  Activity, 
  IndianRupee, 
  TrendingUp, 
  TrendingDown,
  MoreHorizontal,
  Clock
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const DashboardAdmin = () => {
  const { expanded } = useContext(SidebarContext);

  // --- Dummy Data for Charts ---
  const patientFlowData = [
    { name: 'Mon', patients: 120 },
    { name: 'Tue', patients: 145 },
    { name: 'Wed', patients: 132 },
    { name: 'Thu', patients: 190 },
    { name: 'Fri', patients: 158 },
    { name: 'Sat', patients: 200 },
    { name: 'Sun', patients: 90 },
  ];

  const departmentData = [
    { name: 'General', value: 400, color: '#3b82f6' }, // Blue
    { name: 'Dental', value: 300, color: '#10b981' },  // Green
    { name: 'Ortho', value: 200, color: '#f59e0b' },   // Amber
    { name: 'ENT', value: 150, color: '#ef4444' },     // Red
  ];

  // --- Dummy Data for Recent Activity ---
  const recentOPD = [
    { id: 101, name: "Rahul Verma", doctor: "Dr. Arjun Mehta", time: "10:30 AM", status: "Completed" },
    { id: 102, name: "Sita Devi", doctor: "Dr. Priya Sharma", time: "10:45 AM", status: "Waiting" },
    { id: 103, name: "Amit Patel", doctor: "Dr. Rajesh Gupta", time: "11:00 AM", status: "In Progress" },
    { id: 104, name: "Vikram Singh", doctor: "Dr. Arjun Mehta", time: "11:15 AM", status: "Waiting" },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="mb-8 animate-slide-down">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome back, Admin. Here's what's happening in your hospital today.</p>
      </div>

      {/* --- Stats Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Card 1: Total Patients */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Patients</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">1,245</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-green-600 flex items-center font-medium bg-green-50 px-1.5 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> +12%
            </span>
            <span className="text-slate-400 ml-2">from last month</span>
          </div>
        </div>

        {/* Card 2: OPD Appointments */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Today's OPD</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">84</h3>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-green-600 flex items-center font-medium bg-green-50 px-1.5 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 mr-1" /> +5%
            </span>
            <span className="text-slate-400 ml-2">from yesterday</span>
          </div>
        </div>

        {/* Card 3: Active Doctors */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Doctors Active</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">18/22</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-slate-400">4 Doctors on leave today</span>
          </div>
        </div>

        {/* Card 4: Revenue */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">₹42,500</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs">
            <span className="text-red-500 flex items-center font-medium bg-red-50 px-1.5 py-0.5 rounded">
              <TrendingDown className="w-3 h-3 mr-1" /> -2%
            </span>
            <span className="text-slate-400 ml-2">from yesterday</span>
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Main Chart: Patient Flow */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Patient Flow Trends</h3>
            <select className="text-xs border border-gray-200 rounded-md px-2 py-1 bg-gray-50 text-slate-600 focus:outline-none">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientFlowData}>
                <defs>
                  <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px'}} />
                <Area type="monotone" dataKey="patients" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPatients)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Chart: Department Volume */}
        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in">
          <h3 className="text-lg font-bold text-slate-900 mb-6">OPD by Dept.</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} width={60} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', fontSize: '12px'}} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Recent Activity Table --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">Recent Registrations</h3>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-blue-50/50 text-slate-900 font-semibold">
              <tr>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOPD.map((item, index) => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-all duration-200 hover:scale-[1.01]" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                  <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4">{item.doctor}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-blue-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DashboardAdmin;