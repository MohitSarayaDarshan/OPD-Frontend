// import React, { useContext } from 'react';
// import {
//   Search,
//   Filter,
//   Download,
//   FileText,
//   CheckCircle,
//   Clock,
//   Eye,
//   Edit,
//   Trash2,
//   Printer,
//   Mail,
//   ChevronLeft,
//   ChevronRight
// } from 'lucide-react';
// import { SidebarContext } from '../contexts/Sidebar';
// import { Link } from 'react-router-dom';

// const ReceiptMaster = () => {
//   const {expanded}=useContext(SidebarContext);
//   return (
//     <div className={`bg-blue-50 min-h-screen p-4 md:p-8 flex-1 ${expanded? "ml-64":"ml-16"} transition-all duration-1000`}>
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Invoices Summary</h1>
//           <p className="text-gray-600">Manage and review all your invoices in one place</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {/* Total Invoices */}
//           <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Total Invoices</p>
//                 <p className="text-3xl font-bold text-gray-800">24</p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-lg border border-black">
//                 <FileText className="text-blue-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Paid Invoices */}
//           <div className="bg-green-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Paid Invoices</p>
//                 <p className="text-3xl font-bold text-gray-800">15</p>
//               </div>
//               <div className="bg-green-100 p-3 rounded-lg border border-black">
//                 <CheckCircle className="text-green-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Pending Amount */}
//           <div className="bg-yellow-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-gray-600 font-medium mb-1">Pending Amount</p>
//                 <p className="text-3xl font-bold text-gray-800">$2,456.00</p>
//               </div>
//               <div className="bg-yellow-100 p-3 rounded-lg border border-black">
//                 <Clock className="text-yellow-600 w-6 h-6" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="bg-blue-200 p-4 md:p-6 mb-8 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search invoices by ID, subject, or amount..."
//                   className="w-full px-4 py-3 pl-10 placeholder-gray-600 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white"
//                 />
//               </div>
//             </div>
            
//             <div className="flex gap-4">
//               <select className="px-4 py-3 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>All Status</option>
//                 <option>Paid</option>
//                 <option>Ongoing</option>
//                 <option>Unpaid</option>
//               </select>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Filter className="w-5 h-5 mr-2" />
//                 Filter
//               </button>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-6 py-3 flex items-center">
//                 <Download className="w-5 h-5 mr-2" />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Invoices Table Container */}
//         <div className="bg-blue-200 p-6 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)] mb-8">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b-2 border-gray-800">
//                   <th className="text-left py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" id="select-all" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Invoice ID</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Amount</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Status</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Subject</th>
//                   <th className="text-left py-4 px-4 text-gray-800 font-bold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Row 1 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" className="invoice-checkbox" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 font-bold text-gray-800">#INV123</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">$300.00</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Paid</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">Medicine Supply</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <Link to='/staff/getReceipt/1'>
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                       </Link>
//                       <button className="text-red-600 hover:text-red-800" title="Delete">
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                       <button className="text-purple-600 hover:text-purple-800" title="Download">
//                         <Download className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
                
//                 {/* Row 2 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" className="invoice-checkbox" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 font-bold text-gray-800">#INV392</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">$200.00</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Paid</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">Staff Payroll</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800" title="Delete">
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                       <button className="text-purple-600 hover:text-purple-800" title="Download">
//                         <Download className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
                
//                 {/* Row 3 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" className="invoice-checkbox" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 font-bold text-gray-800">#INV389</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">$600.00</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-ongoing"></span>
//                       <span className="text-yellow-700 font-bold">Ongoing</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">Medicine Supply</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800" title="Delete">
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                       <button className="text-purple-600 hover:text-purple-800" title="Download">
//                         <Download className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
                
//                 {/* Row 4 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" className="invoice-checkbox" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 font-bold text-gray-800">#INV859</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">$430.00</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-ongoing"></span>
//                       <span className="text-yellow-700 font-bold">Ongoing</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">Medicine Supply</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800" title="Delete">
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                       <button className="text-purple-600 hover:text-purple-800" title="Download">
//                         <Download className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
                
//                 {/* Row 5 */}
//                 <tr className="border-b border-gray-300 hover:bg-blue-100/50">
//                   <td className="py-4 px-4">
//                     <div className="checkbox-container">
//                       <label>
//                         <input type="checkbox" className="invoice-checkbox" />
//                         <span className="checkmark"></span>
//                       </label>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 font-bold text-gray-800">#INV439</td>
//                   <td className="py-4 px-4 font-bold text-gray-800">$345.00</td>
//                   <td className="py-4 px-4">
//                     <span className="flex items-center">
//                       <span className="status-dot status-paid"></span>
//                       <span className="text-green-700 font-bold">Paid</span>
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 text-gray-700 font-medium">Medicine Supply</td>
//                   <td className="py-4 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-800" title="View">
//                         <Eye className="w-5 h-5" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800" title="Delete">
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                       <button className="text-purple-600 hover:text-purple-800" title="Download">
//                         <Download className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-8 border-t-2 border-gray-800">
//             <div className="mb-4 sm:mb-0">
//               <p className="text-gray-700 font-medium">Showing <span className="font-bold">8</span> of <span className="font-bold">24</span> invoices</p>
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <ChevronLeft className="w-4 h-4" />
//                 <span className="ml-1">Prev</span>
//               </button>
              
//               <button className="text-gray-800 font-bold bg-blue-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] px-4 py-2">1</button>
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 px-4 py-2">2</button>
//               <span className="px-2">...</span>
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 px-4 py-2">7</button>
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 px-4 py-2">8</button>
              
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <span className="mr-1">Next</span>
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
            
//             <div className="mt-4 sm:mt-0 flex items-center">
//               <span className="text-gray-700 font-medium mr-2">PAGE</span>
//               <select className="px-4 py-2 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] focus:outline-none focus:bg-white">
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//               </select>
//               <span className="text-gray-700 font-medium ml-2">OF 24</span>
//             </div>
//           </div>
//         </div>

//         {/* Action Bar */}
//         <div className="bg-blue-200 p-4 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgb(0,0,0)]">
//           <div className="flex flex-col sm:flex-row items-center justify-between">
//             <div className="mb-4 sm:mb-0">
//               <p className="text-gray-700 font-medium">
//                 <span id="selected-count">0</span> invoices selected
//               </p>
//             </div>
            
//             <div className="flex flex-wrap gap-3">
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <Printer className="w-4 h-4 mr-2" />
//                 Print
//               </button>
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <Download className="w-4 h-4 mr-2" />
//                 Download Selected
//               </button>
//               <button className="text-gray-800 font-bold bg-gray-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-gray-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <Mail className="w-4 h-4 mr-2" />
//                 Send Reminder
//               </button>
//               <button className="text-gray-800 font-bold bg-red-100 border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgb(0,0,0)] hover:bg-red-200 transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none px-4 py-2 flex items-center">
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Delete Selected
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReceiptMaster;



import React, { useState, useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  Eye, // Imported View Icon
  Receipt, 
  Calendar, 
  Building2, 
  CreditCard,
  IndianRupee,
  Hash
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ReceiptMasterAdmin = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your specific field names)
  const [receiptList, setReceiptList] = useState([
    {
      ReceiptID: 501,
      ReceiptNo: "REC-2025-001",
      ReceiptDate: "2025-01-10",
      HospitalName: "City Care General Hospital",
      AmountPaid: 1500,
      PaymentMode: "UPI",
      ReferenceNo: "UPI-99887766",
      ReferenceDate: "2025-01-10"
    },
    {
      ReceiptID: 502,
      ReceiptNo: "REC-2025-002",
      ReceiptDate: "2025-01-11",
      HospitalName: "Sunrise Multispeciality",
      AmountPaid: 5000,
      PaymentMode: "Credit Card",
      ReferenceNo: "TXN-CC-12345",
      ReferenceDate: "2025-01-11"
    },
    {
      ReceiptID: 503,
      ReceiptNo: "REC-2025-003",
      ReceiptDate: "2025-01-12",
      HospitalName: "Sterling Hospital",
      AmountPaid: 500,
      PaymentMode: "Cash",
      ReferenceNo: "N/A",
      ReferenceDate: "2025-01-12"
    },
    {
      ReceiptID: 504,
      ReceiptNo: "REC-2025-004",
      ReceiptDate: "2025-01-12",
      HospitalName: "Apex Heart Institute",
      AmountPaid: 12000,
      PaymentMode: "Net Banking",
      ReferenceNo: "NB-SBI-009988",
      ReferenceDate: "2025-01-12"
    },
    {
      ReceiptID: 505,
      ReceiptNo: "REC-2025-005",
      ReceiptDate: "2025-01-13",
      HospitalName: "City Care General Hospital",
      AmountPaid: 2500,
      PaymentMode: "Debit Card",
      ReferenceNo: "TXN-DC-554433",
      ReferenceDate: "2025-01-13"
    }
  ]);

  // --- Handlers ---
  const handleDelete = (id) => {
    setReceiptList(receiptList.filter(item => item.ReceiptID !== id));
  };

  // Filter by Receipt No or Hospital Name
  const filteredReceipts = receiptList.filter(item => 
    item.ReceiptNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.HospitalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Receipt Master</h1>
          <p className="text-sm text-slate-500 mt-1">Manage payment receipts, transaction references, and hospital billings.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addReceipt">
        <button 
          onClick={() => console.log("Navigate to Add Receipt Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add New Receipt
        </button>
        </Link>
      </div>

      {/* --- Table Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Receipt No or Hospital..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-blue-50/50 text-slate-900 font-semibold border-b border-blue-100">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Receipt Details</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4">Amount & Mode</th>
                <th className="px-6 py-4">Reference Details</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredReceipts.length > 0 ? (
                filteredReceipts.map((receipt) => (
                  <tr key={receipt.ReceiptID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{receipt.ReceiptID}
                    </td>

                    {/* Receipt Details (No & Date) */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="font-medium text-slate-900">{receipt.ReceiptNo}</div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                {receipt.ReceiptDate}
                            </div>
                        </div>
                      </div>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {receipt.HospitalName}
                       </div>
                    </td>

                    {/* Amount & Payment Mode Column */}
                    <td className="px-6 py-4">
                       <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 font-bold text-slate-800">
                                <IndianRupee className="w-3.5 h-3.5 text-slate-500" />
                                {receipt.AmountPaid}
                            </div>
                            <span className="inline-flex items-center w-max gap-1 px-2 py-0.5 rounded bg-gray-100 text-slate-600 text-[10px] font-medium border border-gray-200 uppercase">
                                <CreditCard className="w-3 h-3" />
                                {receipt.PaymentMode}
                            </span>
                       </div>
                    </td>

                    {/* Reference Details Column */}
                    <td className="px-6 py-4">
                       <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5 text-slate-700 font-mono text-xs">
                                <Hash className="w-3 h-3 text-slate-400" />
                                {receipt.ReferenceNo}
                            </div>
                            <span className="text-[10px] text-slate-400 pl-4.5">
                                Dated: {receipt.ReferenceDate}
                            </span>
                       </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to='/admin/editReceipt/:id'>
                        <button className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-700 rounded transition-colors" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        </Link>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-400">
                    No receipts found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredReceipts.length} results</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded font-medium">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReceiptMasterAdmin;