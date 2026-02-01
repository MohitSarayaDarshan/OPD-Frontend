import React, { useContext, useState } from 'react'
import { SidebarContext } from '../contexts/Sidebar';

function SubTreatmentAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Sub-Treatment Form submitted');
  };

  const { expanded } = useContext(SidebarContext)

  return (
    <>
      <div className={`flex-1 min-h-screen ${expanded ? "ml-64" : "ml-16"} transition-all duration-1000`}>
        <div className={`flex-1 bg-blue-50 min-h-screen py-8 px-4 overflow-y-auto `}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Sub-Treatment</h1>
            <p className="text-gray-600 mb-8 font-medium">Configure new sub-treatment types and rates.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Grid Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Classification Details */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Classification</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Sub-Treatment Type ID</label>
                        <input
                          type="text"
                          placeholder="Sub-Treatment ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Sub-Treatment Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Root Canal - Molar"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Parent Treatment Type ID</label>
                        <input
                          type="text"
                          placeholder="Parent Treatment ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
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
                  {/* Financials & Status */}
                  <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Financials & Status</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Rate / Cost</label>
                        <input
                          type="number"
                          placeholder="0.00"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">Account ID</label>
                        <input
                          type="text"
                          placeholder="Linked Account ID"
                          className="w-full px-4 py-3 placeholder-gray-600 font-bold bg-gray-100 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md focus:outline-none focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-800 font-bold mb-2">User ID (Owner)</label>
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
                </div>
              </div>

              {/* Full Width Description Section */}
              <div className="bg-blue-200 p-6 border-black border-2 shadow-[4px_4px_0px_0px_rgb(0,0,0)] rounded-md">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Description</h2>
                
                <div>
                  <label className="block text-gray-800 font-bold mb-2">Additional Details</label>
                  <textarea
                    placeholder="Enter detailed description of the sub-treatment procedure..."
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
                  Save Sub-Treatment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubTreatmentAdd