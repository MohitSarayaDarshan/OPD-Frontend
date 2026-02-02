// import React, { useContext, useState } from 'react'

//  import { SidebarContext } from '../contexts/Sidebar';
// function DoctorAdd() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted');
//   };

//   const {expanded}=useContext(SidebarContext)
//   return (
//     <>
    
//       <div className={`flex-1 min-h-screen ${expanded? "ml-64": "ml-16"} transition-all duration-1000`}>
//         <div className={`flex-1 bg-blue-50 min-h-screen py-8 px-4 overflow-y-auto `}>
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Doctor</h1>
//             <p className="text-gray-600 mb-8 font-medium">Fill in the details below to add a new doctor to the system.</p>
            
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Upload Picture Section */}
//               <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                 <label className="block text-gray-800 font-bold text-lg mb-4">Upload doctor picture</label>
//                 <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center bg-white">
//                   <div className="flex flex-col items-center">
//                     <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                     </svg>
//                     <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
//                     <p className="text-gray-600 text-sm mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
//                     <input type="file" className="hidden" id="doctor-picture" accept="image/*" />
//                     <label htmlFor="doctor-picture" className="mt-6 inline-block bg-gray-100 text-gray-800 hover:bg-gray-200 font-bold border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md px-6 py-3 cursor-pointer transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
//                       Choose File
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Form Grid Sections */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Left Column */}
//                 <div className="space-y-8">
//                   {/* Personal Information */}
//                   <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                     <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Doctor name</label>
//                         <input
//                           type="text"
//                           placeholder="Name"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         required/>
//                       </div>
                      
//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Doctor Email</label>
//                         <input
//                           type="email"
//                           placeholder="Your email"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         required/>
//                       </div>

//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Doctor Password</label>
//                         <input
//                           type="password"
//                           placeholder="Password"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         required/>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Professional Details */}
//                   <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                     <h2 className="text-xl font-bold text-gray-800 mb-6">Professional Details</h2>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Experience</label>
//                         <input
//                           type="text"
//                           placeholder="Experience"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Education</label>
//                         <input
//                           type="text"
//                           placeholder="Education"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         required/>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-8">
//                   {/* Speciality & Fees */}
//                   <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                     <h2 className="text-xl font-bold text-gray-800 mb-6">Practice Details</h2>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Speciality</label>
//                         <select className="w-full px-4 py-3 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white">
//                           <option>General physician</option>
//                           <option>Cardiologist</option>
//                           <option>Dermatologist</option>
//                           <option>Neurologist</option>
//                           <option>Pediatrician</option>
//                           <option>Surgeon</option>
//                           <option>Orthopedist</option>
//                           <option>Gynecologist</option>
//                         </select>
//                       </div>

//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Fees</label>
//                         <input
//                           type="text"
//                           placeholder="Your fees"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Address */}
//                   <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                     <h2 className="text-xl font-bold text-gray-800 mb-6">Address</h2>
                    
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Address Line 1</label>
//                         <input
//                           type="text"
//                           placeholder="Address 1"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         required/>
//                       </div>

//                       <div>
//                         <label className="block text-gray-800 font-bold mb-2">Address Line 2</label>
//                         <input
//                           type="text"
//                           placeholder="Address 2"
//                           className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* About Me */}
//                   <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
//                     <h2 className="text-xl font-bold text-gray-800 mb-6">About me</h2>
                    
//                     <div>
//                       <label className="block text-gray-800 font-bold mb-2">Write about yourself</label>
//                       <textarea
//                         placeholder="write about yourself"
//                         rows="4"
//                         className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center pt-4">
//                 <button
//                   type="submit"
//                   className="text-gray-800 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md
//                             transition-all duration-150 
//                             active:translate-x-[4px]
//                             active:translate-y-[4px]
//                             active:shadow-none
//                             hover:bg-gray-200
//                             py-4 px-10 text-xl"
//                 >
//                   Add Doctor
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default DoctorAdd

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

  

  if(id){
    useEffect(()=>{
      fetch('http://localhost:3000/api/doctors/'+id)
      .then((res)=>res.json())
      .then((json)=>setFormData(json[0]))
    },[])
  }

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
          "http://localhost:3000/api/doctors/update/" + id,
          {
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
          "http://localhost:3000/api/doctors/register",
          {
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
                  value={formData.DoctorName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Staff ID */}
              

      <div className='col-span-full'>
        <label className="">Staff ID</label>
        {formData.StaffID.map((staff, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="number"
              value={staff}
              onChange={(e) => handleStaffChange(index, e.target.value)}
              className="border p-2 flex-1"
              placeholder="e.g. 101"
            />
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
                <input
                  type='number'
                  name="HospitalID"
                  placeholder='Hospital ID'
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                  value={formData.HospitalID}
                  onChange={handleChange}
                />
                  
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
                  value={formData.HospitalID}
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