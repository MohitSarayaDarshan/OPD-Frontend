// import React, { useContext } from 'react'
// import { SidebarContext } from '../contexts/Sidebar'


// function HospitalDetails() {
//   const {expanded}=useContext(SidebarContext)
//   return (
//     <div className={` flex-1 ${expanded? "ml-64":"ml-16"}  transition-all duration-1000 items-center justify-center flex `}>
//         <div  className={` my-10 mx-28  border-6 border-black p-8 group transition-all duration-500 `}>
//         <div className={`font-extrabold text-5xl text-center my-8`}>
//           <span>
//               Civil Hospital
//               <div className={`w-full h-[3px] bg-black group-hover:w-0 transition-all duration-500 `}></div> 
//           </span>
//           </div>
//           <div className={`rounded-lg border border-2 border-gray-300 bg-blue-50 `}>
//           <table className={`table-auto `}>
//             <thead>
//               <tr className={`border border-0 border-b-4 border-b-gray-500`}>
//                 <th className={`text-3xl p-4`}>Field</th>
//                 <th className={`text-3xl p-4`}>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className={`font-bold p-2`}>Hospital ID: </td>
//                 <td className={`py-2 px-28`}>1</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Default Payment Mode ID: </td>
//                 <td className={`py-2 px-28`}>1</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Registration Charge: </td>
//                 <td className={`py-2 px-28`}>500</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Registration Validity Months: </td>
//                 <td className={`py-2 px-28`}>6</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Opening date: </td>
//                 <td className={`py-2 px-28`}>30-12-2025</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Opening Patient No: </td>
//                 <td className={`py-2 px-28`}>5001</td>
//               </tr>

//                <tr>
//                 <td className={`font-bold p-2`}>Opening OPD No: </td>
//                 <td className={`py-2 px-28`}>51</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Opening Receipt No: </td>
//                 <td className={`py-2 px-28`}>501</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Description: </td>
//                 <td className={`py-2 px-28`}>The Civil Hospital is a prominent, state-run multi-specialty medical facility serving as the backbone of public healthcare for the region. Dedicated to providing affordable and accessible medical services to all socio-economic groups, it operates as a 24/7 tertiary care center.</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>UserID: </td>
//                 <td className={`py-2 px-28`}>1</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Created: </td>
//                 <td className={`py-2 px-28`}>30-12-2025</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Modified: </td>
//                 <td className={`py-2 px-28`}>30-12-2025</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Address: </td>
//                 <td className={`py-2 px-28`}>Junagadh</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Is rate enable in receipt: </td>
//                 <td className={`py-2 px-28`}>Yes</td>
//               </tr>
//                <tr>
//                 <td className={`font-bold p-2`}>Is Registration Fee Enable in OPD: </td>
//                 <td className={`py-2 px-28`}>Yes</td>
//               </tr>
//               </tbody>
//           </table>
//           </div>
//         <div className={`flex justify-center my-5`}>
//         <button className={`px-6 mx-1 py-4 border-2 border-black text-2xl bg-black text-white font-bold cursor-pointer hover:bg-[#5ad641] hover:text-black`} >EDIT</button>
//         <button className={`px-6 py-4 border-2 border-black text-2xl bg-black text-white font-bold cursor-pointer hover:bg-red-600 hover:text-black`} >DELETE</button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default HospitalDetails



import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Building2, 
  MapPin, 
  CreditCard, 
  Calendar, 
  Hash, 
  FileText, 
  Clock, 
  Edit2, 
  Trash2, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  ShieldCheck,
  User
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function HospitalDetails() {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { id } = useParams();



  const [hospitalData,setHospitalData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/hospitals/${id}`);
      const data = await response.json();
      setHospitalData(data[0]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  fetchData();
}, [id]);


const handleDelete = async(id) => {
 
    if(confirm("Are you sure you want to delete this Hospital record?")) {
      try {
        // TODO: Replace with actual API call
        // await fetch(`/api/opds/${id}`, { method: 'DELETE' });
        const req=await fetch(`http://localhost:3000/api/hospitals/delete/${id}`,{
          method:'DELETE'
        })

        if (!req==201) {
        throw new Error('Failed to delete the record from the server');
      }

        
        alert(`Hospital deleted with ${id}`);
        navigate('/admin/getAllHospitals');
      } catch (error) {
        console.error('Error deleting Hospital:', error);
        alert('Failed to delete Hospital record. Please try again.');
      }
    }
  };
  // --- Mock Data (Extracted from your table) ---
  // const hospitalData = {
  //   HospitalID: 1,
  //   HospitalName: "Civil Hospital",
  //   DefaultPaymentModeID: 1,
  //   RegistrationCharge: 500,
  //   RegistrationValidityMonths: 6,
  //   OpeningDate: "2025-12-30",
  //   OpeningPatientNo: 5001,
  //   OpeningOPDNo: 51,
  //   OpeningReceiptNo: 501,
  //   Description: "The Civil Hospital is a prominent, state-run multi-specialty medical facility serving as the backbone of public healthcare for the region. Dedicated to providing affordable and accessible medical services to all socio-economic groups, it operates as a 24/7 tertiary care center.",
  //   UserID: 1,
  //   Created: "2025-12-30",
  //   Modified: "2025-12-30",
  //   Address: "Junagadh",
  //   IsRateEnableInReceipt: true,
  //   IsRegistrationFeeEnableInOPD: true
  // };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link to='/admin/getAllHospitals'>
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-slate-500">
             <ArrowLeft className="w-5 h-5" />
          </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{hospitalData.HospitalName}</h1>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{hospitalData.Address}</span>
              <span className="mx-1">•</span>
              <span className="font-mono text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">ID: {hospitalData.HospitalID}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          
          <button onClick={() => navigate(`/admin/editHospital/${id}`)}
           className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-slate-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <Edit2 className="w-4 h-4" /> Edit
          </button>

          <button onClick={()=>{handleDelete(id)}}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors shadow-sm">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- Left Column (Main Info & Config) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Description Card */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-500" /> About Hospital
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {hospitalData.Description}
            </p>
          </div>

          {/* Configuration Rules */}
          <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-500" /> Registration & Billing Rules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-xs text-slate-500 font-medium uppercase">Registration Charge</span>
                    <div className="text-xl font-bold text-slate-900 mt-1">₹{hospitalData.RegistrationCharge}</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-xs text-slate-500 font-medium uppercase">Validity Period</span>
                    <div className="text-xl font-bold text-slate-900 mt-1">{hospitalData.RegistrationValidityMonths} Months</div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <span className="text-sm text-slate-600">Default Payment Mode ID</span>
                    <span className="font-mono font-bold text-slate-800">{hospitalData.DefaultPaymentModeID}</span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <span className="text-sm text-slate-600">Rate Enabled in Receipt</span>
                    {hospitalData.IsRateEnableInReceipt ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                    )}
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg md:col-span-2">
                    <span className="text-sm text-slate-600">Registration Fee Enabled in OPD</span>
                    {hospitalData.IsRegistrationFeeEnableInOPD ? (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded border border-green-100">
                             <CheckCircle className="w-3.5 h-3.5" /> Enabled
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                             <XCircle className="w-3.5 h-3.5" /> Disabled
                        </span>
                    )}
                </div>
            </div>
          </div>

        </div>

        {/* --- Right Column (Sequences & System Data) --- */}
        <div className="lg:col-span-1 space-y-6">
            
            {/* Opening Sequences */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Hash className="w-4 h-4 text-blue-500" /> Opening Sequences
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-slate-600">Opening Date</span>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-800">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {hospitalData.OpeningDate}
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-slate-600">Patient No. Start</span>
                        <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{hospitalData.OpeningPatientNo}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-slate-600">OPD No. Start</span>
                        <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{hospitalData.OpeningOPDNo}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-slate-600">Receipt No. Start</span>
                        <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{hospitalData.OpeningReceiptNo}</span>
                    </div>
                </div>
            </div>

            {/* System Information */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> System Meta
                </h3>
                <ul className="space-y-3">
                    <li className="flex justify-between text-xs">
                        <span className="text-slate-500">Created By User ID</span>
                        <span className="font-mono text-slate-700">{hospitalData.UserID}</span>
                    </li>
                    <li className="flex justify-between text-xs">
                        <span className="text-slate-500">Created On</span>
                        <span className="text-slate-700">{hospitalData.Created}</span>
                    </li>
                    <li className="flex justify-between text-xs">
                        <span className="text-slate-500">Last Modified</span>
                        <span className="text-slate-700">{hospitalData.Modified}</span>
                    </li>
                </ul>
            </div>

        </div>

      </div>
    </div>
  )
}

export default HospitalDetails;