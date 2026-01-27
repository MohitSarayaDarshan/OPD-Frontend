import React, { useContext, useState } from 'react'
import { SidebarContext } from '../contexts/Sidebar';

function OPDAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('OPD Form submitted');
  };

  const { expanded } = useContext(SidebarContext)

  return (
    <>
      <div className={`flex-1 min-h-screen ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
        <div className={`flex-1 bg-blue-50 min-h-screen py-8 px-4 overflow-y-auto `}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add OPD Record</h1>
            <p className="text-gray-600 mb-8 font-medium">Fill in the details below to create a new OPD entry.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Grid Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Identification Details */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Identification Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">OPD ID</label>
                        <input
                          type="text"
                          placeholder="OPD ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">OPD Number</label>
                        <input
                          type="text"
                          placeholder="OPD No"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Old OPD Number</label>
                        <input
                          type="text"
                          placeholder="Old OPD No"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Patient & User Info */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Patient & User Info</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Patient ID</label>
                        <input
                          type="text"
                          placeholder="Patient ID"
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
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Visit Details */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Visit Details</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">OPD Date & Time</label>
                        <input
                          type="datetime-local"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Treated By Doctor ID</label>
                        <input
                          type="text"
                          placeholder="Doctor ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Registration Fee</label>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Is Follow Up Case?</label>
                        <select className="w-full px-4 py-3 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white">
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* System Audit (Created/Modified) */}
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
              </div>

              {/* Full Width Description Section */}
              <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Description</h2>
                
                <div>
                  <label className="block text-gray-800 font-bold mb-2">Case Description / Notes</label>
                  <textarea
                    placeholder="Enter case description details here..."
                    rows="4"
                    className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                  ></textarea>
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
                  Save OPD Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default OPDAdd