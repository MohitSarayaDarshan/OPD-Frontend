import React, { useContext, useState } from 'react'

 import { SidebarContext } from '../contexts/Sidebar';
function DoctorAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const {expanded}=useContext(SidebarContext)
  return (
    <>
    
      <div className={`flex-1 min-h-screen ${expanded? "ml-64": "ml-16"} transition-all duration-1000`}>
        <div className={`flex-1 bg-blue-50 min-h-screen py-8 px-4 overflow-y-auto `}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Doctor</h1>
            <p className="text-gray-600 mb-8 font-medium">Fill in the details below to add a new doctor to the system.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Upload Picture Section */}
              <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                <label className="block text-gray-800 font-bold text-lg mb-4">Upload doctor picture</label>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center bg-white">
                  <div className="flex flex-col items-center">
                    <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
                    <p className="text-gray-600 text-sm mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    <input type="file" className="hidden" id="doctor-picture" accept="image/*" />
                    <label htmlFor="doctor-picture" className="mt-6 inline-block bg-gray-100 text-gray-800 hover:bg-gray-200 font-bold border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md px-6 py-3 cursor-pointer transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                      Choose File
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Grid Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Doctor name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        required/>
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Doctor Email</label>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        required/>
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Doctor Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        required/>
                      </div>
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Professional Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Experience</label>
                        <input
                          type="text"
                          placeholder="Experience"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Education</label>
                        <input
                          type="text"
                          placeholder="Education"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        required/>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Speciality & Fees */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Practice Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Speciality</label>
                        <select className="w-full px-4 py-3 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white">
                          <option>General physician</option>
                          <option>Cardiologist</option>
                          <option>Dermatologist</option>
                          <option>Neurologist</option>
                          <option>Pediatrician</option>
                          <option>Surgeon</option>
                          <option>Orthopedist</option>
                          <option>Gynecologist</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Fees</label>
                        <input
                          type="text"
                          placeholder="Your fees"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Address</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Address Line 1</label>
                        <input
                          type="text"
                          placeholder="Address 1"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        required/>
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Address Line 2</label>
                        <input
                          type="text"
                          placeholder="Address 2"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* About Me */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">About me</h2>
                    
                    <div>
                      <label className="block text-gray-800 font-bold mb-2">Write about yourself</label>
                      <textarea
                        placeholder="write about yourself"
                        rows="4"
                        className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="text-gray-800 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md
                            transition-all duration-150 
                            active:translate-x-[4px]
                            active:translate-y-[4px]
                            active:shadow-none
                            hover:bg-gray-200
                            py-4 px-10 text-xl"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorAdd