// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/Sidebar'
// import { Download, Edit, Eye, Hospital, Stethoscope, Trash2, User, User2, UserCircle, Users, Users2, UserX2 } from 'lucide-react';
// import { D, Doctor, DoctorMale, Dollar, MoneyBag, OutpatientDepartment, PatientBand, RegularPatient, VirusPatient } from 'healthicons-react';

// function DashboardStaff() {
//   const {expanded}=useContext(SidebarContext);

//   return (
//     <>
//   <div className={`flex-1 flex flex-col  ${expanded?"ml-64":"ml-16"} p-6 duration-1000 transition-all h-screen`}>
//     <div className={`grid grid-cols-2 gap-6 w-full`}>
//         <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Patients</p>
//           <p className={`font-bold  text-3xl m-4`}>24</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <Users className={`text-gray-800  h-[50px] w-[50px]`}/>
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
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total OPDs</p>
//           <p className={`font-bold  text-3xl m-4`}>10</p>
//           </div>
//           </div>
//           <div className={` items-center flex justify-end `}>
//               <div className={`bg-white w-[80px] h-[80px] flex justify-center items-center border border-2 border-black rounded-md`}>
//               <OutpatientDepartment className={`text-gray-800  h-[50px] w-[50px]`}/>
//               </div>
//           </div>
//         </div>

//        <div className={`p-6  border border-2 border-black bg-blue-200 shadow-[4px_4px_0px_0px] rounded-md grid  grid-cols-2 hover:shadow-[8px_8px_0px_0px] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500`}>
//           <div className={`h-full  flex items-center`}>
//           <div>
//           <p className={`font-bold text-gray-800 text-3xl m-4 `}>Total Revenue</p>
//           <p className={`font-bold  text-3xl m-4`}>$180</p>
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
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Doctor Name</th>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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
//                       <span className="text-green-700 font-bold">V.K Patel</span>
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

// export default DashboardStaff



import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Wallet, 
  CreditCard, 
  Banknote, 
  Receipt,
  ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const DashboardStaff = () => {
  const { expanded } = useContext(SidebarContext);

  // --- Dummy Data for Charts ---
  
  // Weekly Collection Data
  const weeklyCollection = [
    { day: 'Mon', amount: 12500 },
    { day: 'Tue', amount: 18000 },
    { day: 'Wed', amount: 15000 },
    { day: 'Thu', amount: 22000 },
    { day: 'Fri', amount: 19500 },
    { day: 'Sat', amount: 25000 },
    { day: 'Sun', amount: 10000 },
  ];

  // Payment Mode Distribution
  const paymentModes = [
    { name: 'Cash', value: 45000, color: '#10b981' }, // Green
    { name: 'UPI', value: 35000, color: '#3b82f6' },  // Blue
    { name: 'Card', value: 20000, color: '#f59e0b' }, // Amber
  ];

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header Section --- */}
      <div className="mb-8 animate-slide-down">
        <h1 className="text-2xl font-bold text-slate-900">Billing Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Track daily collections and revenue trends.</p>
      </div>

      {/* --- Stats Cards (Money Focused) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* Total Collection */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Today's Collection</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">₹42,500</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>12% more than yesterday</span>
          </div>
        </div>

        {/* Cash In Hand */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cash in Hand</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">₹15,200</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <Banknote className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-400">
            Physical cash collected today
          </div>
        </div>

        {/* Digital Payments */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Digital / UPI</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">₹27,300</h3>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-400">
            Bank & UPI transactions
          </div>
        </div>

        {/* Receipt Count */}
        <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up hover-lift" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Receipts Generated</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">34</h3>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <Receipt className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-400">
            Total transactions today
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Weekly Revenue Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">Weekly Collection Trend</h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
               <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Revenue
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyCollection} barSize={32}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px'}} 
                />
                <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Mode Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col animate-scale-in">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Payment Modes</h3>
          <p className="text-xs text-slate-500 mb-6">Distribution of collection sources</p>
          <div className="h-48 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentModes}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {paymentModes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '12px'}}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardStaff;