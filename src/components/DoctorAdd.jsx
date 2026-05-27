import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../contexts/Sidebar';
import { 
  Save, 
  X, 
  User, 
  Building2, 
  IdCard, 
  GraduationCap, 
  FileText, 
  UserCheck
} from 'lucide-react';


const DoctorAdd = () => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const {id}=useParams()
  // --- Form State ---
  const [formData, setFormData] = useState({
     // Auto-generated
    DoctorName: '',
    StaffID: [],  // Linked Staff reference
    StudentID: [], // Linked Student reference (if applicable)
    HospitalID: '', // Parent Hospital
    Description: '',
    UserID: 1, // Logged-in User
    Image:'',
  });

  const [staffOptions, setStaffOptions] = useState([]);
  const [hospitalOptions, setHospitalOptions] = useState([]);

  useEffect(() => {
    if (id) {
      fetch('http://localhost:3000/api/doctors/' + id, { credentials: 'include' })
        .then((res) => res.json())
        .then((json) => setFormData(json[0]))
        .catch((err) => console.error('Error fetching doctor:', err));
    }
  }, [id]);

  useEffect(() => {
    fetch('http://localhost:3000/api/staffs/', { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => setStaffOptions(json))
      .catch((err) => console.error('Error fetching staff list:', err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/hospitals/', { credentials: 'include' })
      .then((res) => res.json())
      .then((json) => setHospitalOptions(json))
      .catch((err) => console.error('Error fetching hospital list:', err));
  }, []);

  const addStaff= () => {
    setFormData({
      ...formData,
      StaffID: [...formData.StaffID, '']
    });
  };

  const removeStaff = (index) => {
    const updatedStaffs = formData.StaffID.filter((_, i) => i !== index);
    setFormData({ ...formData, StaffID: updatedStaffs });
  };

  const handleStaffChange = (index, value) => {
    const updatedStaffs = [...formData.StaffID];
    updatedStaffs[index] = value;
    setFormData({ ...formData, StaffID: updatedStaffs });
  };

  const addStudent=()=>{
    setFormData({
      ...formData,StudentID:[...formData.StudentID,'']
    })
  }

  const removeStudent=(index)=>{
    const updatedStudents=formData.StudentID.filter((_,i)=>i!==index)
    setFormData({...formData,StudentID:updatedStudents})
  }

  const handleStudentChange=(index,value)=>{
    const updatedStudents=[...formData.StudentID]
    updatedStudents[index]=value
    setFormData({...formData, StudentID:updatedStudents})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const { Created, Modified, DoctorID, _id, ...updateData } = formData;
        console.log("Submitting to MongoDB Schema:", updateData);
        // Example API call:

        const response = await fetch(
          "http://localhost:3000/api/doctors/update/" + id, {credentials:'include',
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          },
        );

        const result = await response.json();
        console.log(result);
        if (response.status == 201) {
          alert(`OPD edited with id ${result.DoctorID}`);
          navigate("/admin/getDoctor/" + id);
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error editing Doctor:", error);
        alert("Failed to save Doctor. Please check schema constraints.");
      }
    } else {
      try {
        console.log("Submitting to MongoDB Schema:", formData);
        // Example API call:
        const response = await fetch(
          "http://localhost:3000/api/doctors/register", {credentials:'include',
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        const result = await response.json();
        console.log(result);
        if (response.status == 201) {
          alert(`Doctor added with id ${result.DoctorID}`);
          navigate("/admin/getAllDoctors");
        } else {
          alert(`Error:${result.message}`);
        }
      } catch (error) {
        console.error("Error saving Doctor:", error);
        alert("Failed to save Doctor. Please check schema constraints.");
      }
    }
  };


  const handleCancel = () =>{ if(id){navigate('/admin/getDoctor/'+id)}else{navigate('/admin/getAllDoctors')}};
  
  
  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };

  

  return (
    <div className={`min-h-screen bg-gray-50 text-slate-800 font-sans p-8 ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000 animate-fade-in`}>
      
      {/* --- Header --- */}
      <div className="flex justify-between items-center mb-8 animate-slide-down">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{(id)?"Edit":"Add New"} Doctor</h1>
          <p className="text-sm text-slate-500 mt-1">{id ? "Update": "Register"} a medical professional and link them to a hospital branch.</p>
        </div>
      </div>

      {/* --- Form Container --- */}
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden max-w-4xl mx-auto animate-scale-in">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2 text-blue-800 font-semibold">
          <UserCheck className="w-5 h-5" />
          <h2>Doctor Profile Configuration</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* ================= SECTION 1: PERSONAL DETAILS ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
              Identity Information
            </div>

            {/* Doctor Name */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="DoctorName"
                  required
                  placeholder="e.g. Dr. Jane Smith"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                  value={formData?.DoctorName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Staff ID */}
              

      <div className='col-span-full'>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Assign Staff</label>
        {formData.StaffID.map((staff, index) => (
          <div key={index} className="flex gap-2 mt-2 items-center">
            <select
              value={staff || ''}
              onChange={(e) => handleStaffChange(index, e.target.value)}
              className="border p-2 flex-1 rounded-lg bg-white text-sm text-slate-900"
            >
              <option value="">Select staff member</option>
              {staffOptions.map((option) => (
                <option key={option.StaffID} value={option.StaffID}>
                  {option.StaffName} {option.Role ? `(${option.Role})` : ''} - ID {option.StaffID}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => removeStaff(index)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addStaff} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
         Add Staff
        </button>
      </div>

        {/* Student ID */}
         <div className='col-span-full'>
        <label className="">Student ID</label>
        {formData.StudentID.map((student, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="number"
              value={student}
              onChange={(e) => handleStudentChange(index, e.target.value)}
              className="border p-2 flex-1"
              placeholder="e.g. 101"
            />
            <button type="button" onClick={() => removeStudent(index)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addStudent} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
         Add Student
        </button>
      </div>



            {/* ================= SECTION 2: ASSIGNMENT ================= */}
            <div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
              Hospital Assignment
            </div>

            {/* Hospital Selection */}
            <div >
              <label className="block text-sm font-semibold text-slate-700 mb-2">Primary Hospital <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  name="HospitalID"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.HospitalID}
                  onChange={handleChange}
                >
                  <option value="">Select primary hospital</option>
                  {hospitalOptions.map((hospital) => (
                    <option key={hospital.HospitalID} value={hospital.HospitalID}>
                      {hospital.HospitalName || `Hospital ${hospital.HospitalID}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div >
              <label className="block text-sm font-semibold text-slate-700 mb-2">User ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type='number'
                  name="UserID"
                  placeholder='User ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.UserID}
                  onChange={handleChange}
                />
                  
              </div>
            </div>

            {/* ================= IMAGE SECTION ================= */}
<div className="col-span-full text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2 border-b border-gray-100 pb-2">
  Profile Media
</div>

<div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
  {/* URL Input */}
  <div className="md:col-span-2">
    <label className="block text-sm font-semibold text-slate-700 mb-2">
      Doctor Image URL
    </label>
    <div className="relative">
      <input 
        type="text" 
        name="Image"
        placeholder="https://example.com/photo.jpg"
        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
        value={formData.Image}
        onChange={handleChange}
      />
    </div>
    <p className="text-xs text-slate-500 mt-2 italic">Paste a direct link to the doctor's portrait.</p>
  </div>

  {/* Image Preview Box */}
  <div className="flex flex-col items-center justify-center">
    <label className="block text-sm font-semibold text-slate-700 mb-2 w-full text-center md:text-left">
      Preview
    </label>
    <div className="w-32 h-32 rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
      {formData.Image ? (
        <img 
          src={formData.Image} 
          alt="Preview" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150?text=Invalid+URL';
          }}
        />
      ) : (
        <User className="w-12 h-12 text-gray-400" />
      )}
    </div>
  </div>
</div>

            {/* Description */}
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Specialization & Notes</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea 
                  name="Description"
                  rows="3"
                  placeholder="e.g. Senior Cardiologist, available for emergency consultations..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                  value={formData.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

          </div>

          {/* --- Actions --- */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
            <button 
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <Save className="w-4 h-4" />
              Save Doctor
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default DoctorAdd;