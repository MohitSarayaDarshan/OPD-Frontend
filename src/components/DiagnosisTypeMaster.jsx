import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Search, 
  Plus, 
  Filter, 
  Trash2, 
  Edit2, 
  Eye, // Imported View Icon
  Activity, 
  Building2,
  FileText
} from 'lucide-react';
import { useEffect } from 'react';

const DiagnosisTypeMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Mapped to your DB Schema)
  // const [diagnosisList, setDiagnosisList] = useState([
  //   {
  //     DiagnosisTypeID: 1,
  //     DiagnosisTypeName: "Acute Gastritis",
  //     DiagnosisTypeShortName: "GAS-ACU",
  //     IsActive: true,
  //     HospitalName: "City Care General Hospital"
  //   },
  //   {
  //     DiagnosisTypeID: 2,
  //     DiagnosisTypeName: "Type 2 Diabetes Mellitus",
  //     DiagnosisTypeShortName: "DIA-T2",
  //     IsActive: true,
  //     HospitalName: "Sunrise Multispeciality"
  //   },
  //   {
  //     DiagnosisTypeID: 3,
  //     DiagnosisTypeName: "Essential Hypertension",
  //     DiagnosisTypeShortName: "HYP-ESS",
  //     IsActive: true,
  //     HospitalName: "Sterling Hospital"
  //   },
  //   {
  //     DiagnosisTypeID: 4,
  //     DiagnosisTypeName: "Viral Pyrexia (Fever)",
  //     DiagnosisTypeShortName: "PYR-VIR",
  //     IsActive: false,
  //     HospitalName: "City Care General Hospital"
  //   },
  //   {
  //     DiagnosisTypeID: 5,
  //     DiagnosisTypeName: "Migraine without Aura",
  //     DiagnosisTypeShortName: "MIG-WOA",
  //     IsActive: true,
  //     HospitalName: "Apex Heart Institute"
  //   }
  // ]);

  const [diagnosisList, setDiagnosisList] = useState([])
    
      useEffect(
        ()=>{
          fetch("http://localhost:3000/api/diagnosistypes/", {credentials:'include'})
          .then((res)=>res.json())
          .then((json)=>setDiagnosisList(json))
        }
      ,[])

  // --- Handlers ---
  const handleDelete = (id) => {
    setDiagnosisList(diagnosisList.filter(item => item.DiagnosisTypeID !== id));
  };

  // Filter by Name or Short Name
  const filteredDiagnoses = diagnosisList.filter(item => 
    item.DiagnosisTypeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.DiagnosisTypeShortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Diagnosis Types</h1>
          <p className="text-sm text-slate-500 mt-1">Manage standard medical diagnosis categories and codes.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addDiagnosisType">
        <button 
          onClick={() => console.log("Navigate to Add Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Diagnosis Type
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
              placeholder="Search Diagnosis or Short Name..." 
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
                <th className="px-6 py-4">Diagnosis Name</th>
                <th className="px-6 py-4">Short Name</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDiagnoses.length > 0 ? (
                filteredDiagnoses.map((item) => (
                  <tr key={item.DiagnosisTypeID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{item.DiagnosisTypeID}
                    </td>

                    {/* Diagnosis Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Activity className="w-4 h-4" />
                        </div>
                        <div className="font-medium text-slate-900">{item.DiagnosisTypeName}</div>
                      </div>
                    </td>

                    {/* Short Name Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-gray-200 bg-gray-50 text-xs font-semibold text-slate-600">
                        <FileText className="w-3 h-3 text-slate-400" />
                        {item.DiagnosisTypeShortName}
                      </span>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {item.HospitalName}
                       </div>
                    </td>

                    {/* IsActive Column */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.IsActive 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          item.IsActive ? 'bg-green-500' : 'bg-gray-400'
                        }`}></span>
                        {item.IsActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>

                    {/* Actions Column (With View Icon) */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getDiagnosisType/${item.DiagnosisTypeID}`}>
                          <button className="p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-700 rounded transition-all duration-300 hover:scale-110 active:scale-95" title="View Details">
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
                    No diagnosis types found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredDiagnoses.length} results</span>
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

export default DiagnosisTypeMaster;