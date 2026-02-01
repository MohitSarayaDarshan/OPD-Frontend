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
  FileText, 
  Building2
} from 'lucide-react';
import { useEffect } from 'react';

const TreatmentTypeMaster = () => {
  // --- Context for Sidebar Transition ---
  const { expanded } = useContext(SidebarContext);

  // --- State Management ---
  const [searchTerm, setSearchTerm] = useState('');

  // Initial Data (Updated to your specific field names)
  // const [treatmentList, setTreatmentList] = useState([
  //   {
  //     TreatmentTypeID: 1,
  //     TreatmentTypeName: "General Consultation",
  //     TreatmentTypeShortName: "OPD-GEN",
  //     HospitalName: "City Care General Hospital"
  //   },
  //   {
  //     TreatmentTypeID: 2,
  //     TreatmentTypeName: "Root Canal Treatment",
  //     TreatmentTypeShortName: "DEN-RCT",
  //     HospitalName: "Sunrise Multispeciality"
  //   },
  //   {
  //     TreatmentTypeID: 3,
  //     TreatmentTypeName: "MRI Scan (Full Body)",
  //     TreatmentTypeShortName: "RAD-MRI",
  //     HospitalName: "Sterling Hospital"
  //   },
  //   {
  //     TreatmentTypeID: 4,
  //     TreatmentTypeName: "Cataract Surgery",
  //     TreatmentTypeShortName: "OPH-CAT",
  //     HospitalName: "Lotus Eye Care"
  //   },
  //   {
  //     TreatmentTypeID: 5,
  //     TreatmentTypeName: "Physiotherapy Session",
  //     TreatmentTypeShortName: "PHY-SES",
  //     HospitalName: "City Care General Hospital"
  //   }
  // ]);
  const [treatmentList, setTreatmentList] = useState([])
    useEffect(
          ()=>{
            fetch("http://localhost:3000/api/treatments/")
            .then((res)=>res.json())
            .then((json)=>setTreatmentList(json))
          }
    ,[])

  // --- Handlers ---
  const handleDelete = (id) => {
    setTreatmentList(treatmentList.filter(item => item.TreatmentTypeID !== id));
  };

  // Filter by Name or Short Name
  const filteredTreatments = treatmentList.filter(item => 
    item.TreatmentTypeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.TreatmentTypeShortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Container with Sidebar Transition Logic
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
      
      {/* --- Page Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Treatment Types</h1>
          <p className="text-sm text-slate-500 mt-1">Manage standard treatment categories and hospital associations.</p>
        </div>
        
        {/* ADD NEW BUTTON */}
        <Link to="/admin/addTreatmentType">
        <button 
          onClick={() => console.log("Navigate to Add Page")} 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Treatment Type
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
              placeholder="Search Name or Short Name..." 
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
                <th className="px-6 py-4">Treatment Name</th>
                <th className="px-6 py-4">Short Name</th>
                <th className="px-6 py-4">Hospital Name</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTreatments.length > 0 ? (
                filteredTreatments.map((item) => (
                  <tr key={item.TreatmentTypeID} className="hover:bg-blue-50/30 transition-colors group">
                    
                    {/* ID Column */}
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">
                      #{item.TreatmentTypeID}
                    </td>

                    {/* Name Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <FileText className="w-4 h-4" />
                        </div>
                        <div className="font-medium text-slate-900">{item.TreatmentTypeName}</div>
                      </div>
                    </td>

                    {/* Short Name Column */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded border border-gray-200 bg-gray-50 text-xs font-semibold text-slate-600">
                        {item.TreatmentTypeShortName}
                      </span>
                    </td>

                    {/* Hospital Name Column */}
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2 text-slate-600">
                         <Building2 className="w-4 h-4 text-slate-400" />
                         {item.HospitalName}
                       </div>
                    </td>

                    {/* Actions Column (Added View Icon) */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        
                        {/* VIEW ACTION */}
                        <Link to={`/admin/getTreatment/${item.TreatmentTypeID}`}>
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
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-400">
                    No treatments found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-slate-500">
          <span>Showing {filteredTreatments.length} results</span>
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

export default TreatmentTypeMaster;