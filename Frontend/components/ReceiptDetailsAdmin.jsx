import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  User, 
  Hash, 
  Edit3, 
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trash2 // Added Trash icon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReceiptDetailsAdmin = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  const receiptData = {
    ReceiptID: 1001,
    ReceiptNo: "REC-2026-001",
    ReceiptDate: "2026-01-02",
    OPDNo: "OPD-5001",
    AmountPaid: "500.00",
    PaymentMode: "UPI / Digital",
    ReferenceNo: "TXN99821002",
    ReferenceDate: "2026-01-02",
    Description: "General Consultation & Registration Fee",
    CreatedBy: "Admin User",
    IsCancelled: false,
    cancellationDateTime: "-",
    CancellationRemarks: "-"
  };

  // --- Delete Functionality ---
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete receipt ${receiptData.ReceiptNo}? This action cannot be undone.`
    );

    if (confirmDelete) {
      try {
        console.log(`Deleting Receipt ID: ${receiptData.ReceiptID}`);
        
        // Placeholder for API Call:
        // await axios.delete(`/api/receipts/${receiptData.ReceiptID}`);
        
        alert("Receipt deleted successfully");
        navigate('/staff/getAllReceipts'); // Redirect to list after delete
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete the receipt. Please try again.");
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-slide-down">
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to List
          </button>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            Receipt Voucher
            {receiptData.IsCancelled ? (
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold border border-red-200">Cancelled</span>
            ) : (
              <span className="bg-emerald-100 text-emerald-600 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold border border-emerald-200">Settled</span>
            )}
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Edit Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-all transform hover:scale-105 active:scale-95">
            <Edit3 className="w-4 h-4" />
            Edit
          </button>

          {/* Delete Button */}
          <button 
            onClick={handleDelete}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50 shadow-sm transition-all transform hover:scale-105 active:scale-95"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 animate-scale-in">
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white flex justify-between items-start">
            <div>
              <p className="text-blue-100 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Receipt Number</p>
              <h2 className="text-3xl font-black tracking-tight">{receiptData.ReceiptNo}</h2>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-xs uppercase tracking-[0.2em] font-semibold mb-1">Total Paid</p>
              <h2 className="text-3xl font-black tracking-tight">₹ {receiptData.AmountPaid}</h2>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-2 flex items-center gap-2 text-slate-400">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Basic Information</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Receipt Date" value={receiptData.ReceiptDate} icon={<Calendar className="w-4 h-4" />} />
                <DetailItem label="OPD ID" value={receiptData.OPDNo} icon={<Hash className="w-4 h-4" />} />
                <DetailItem label="Payment Mode" value={receiptData.PaymentMode} icon={<CreditCard className="w-4 h-4" />} />
                <DetailItem label="Collected By" value={receiptData.CreatedBy} icon={<User className="w-4 h-4" />} />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Description</label>
                <p className="text-sm text-slate-700 bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                  "{receiptData.Description}"
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-2 flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Transaction Reference</span>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 space-y-4">
                <DetailItem label="Reference No" value={receiptData.ReferenceNo} />
                <DetailItem label="Reference Date" value={receiptData.ReferenceDate} />
              </div>

              <div className={`rounded-xl p-5 border ${receiptData.IsCancelled ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-200 opacity-60'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className={`w-4 h-4 ${receiptData.IsCancelled ? 'text-red-500' : 'text-slate-400'}`} />
                  <span className={`text-xs font-bold uppercase ${receiptData.IsCancelled ? 'text-red-700' : 'text-slate-500'}`}>Cancellation Details</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <DetailItem label="Cancelled On" value={receiptData.cancellationDateTime} />
                  <DetailItem label="Remarks" value={receiptData.CancellationRemarks} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-t border-gray-100 p-4 px-8 flex justify-between items-center text-[11px] text-slate-400">
            <p>Generated via OPDPro Management System</p>
            <p>Timestamp: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, icon }) => (
  <div className="flex flex-col">
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
      {icon} {label}
    </span>
    <span className="text-sm font-semibold text-slate-700">{value || "-"}</span>
  </div>
);

export default ReceiptDetailsAdmin;