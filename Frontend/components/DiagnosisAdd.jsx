import React, { useContext, useState } from 'react'
import { SidebarContext } from '../contexts/Sidebar';

function DiagnosisAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Diagnosis Form submitted');
  };

  const { expanded } = useContext(SidebarContext)

  return (
    <>
      <div className={`flex-1 min-h-screen ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
        <div className={`flex-1 bg-blue-50 min-h-screen py-8 px-4 overflow-y-auto `}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Diagnosis Type</h1>
            <p className="text-gray-600 mb-8 font-medium">Create a new diagnosis category configuration.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Grid Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* General Information */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">General Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Diagnosis Type ID</label>
                        <input
                          type="text"
                          placeholder="Type ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Diagnosis Type Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Cardiology, Viral"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Short Name / Code</label>
                        <input
                          type="text"
                          placeholder="e.g. CARD-01"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Audit Logs */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Audit Logs</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Created At</label>
                        <input
                          type="datetime-local"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Modified At</label>
                        <input
                          type="datetime-local"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Ownership & Status */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Ownership & Status</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Hospital ID</label>
                        <input
                          type="text"
                          placeholder="Hospital ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">User ID</label>
                        <input
                          type="text"
                          placeholder="User ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Is Active?</label>
                        <select className="w-full px-4 py-3 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white">
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Description Box - Right column variant or could be full width */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md h-auto">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Details</h2>
                    
                    <div>
                      <label className="block text-gray-800 font-bold mb-2">Description</label>
                      <textarea
                        placeholder="Enter detailed description of this diagnosis type..."
                        rows="6"
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
                  Save Diagnosis Type
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiagnosisAdd