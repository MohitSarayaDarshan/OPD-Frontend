import React from 'react';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react'; // Optional: icon library

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-lg">
        {/* Icon Section */}
        <div className="flex justify-center mb-6 text-red-500">
          <ShieldAlert size={80} strokeWidth={1.5} />
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-8">
          Sorry, you don't have permission to view this page. Please contact your 
          administrator or try logging in with a different account.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-200"
          >
            <Home size={18} /> Return Home
          </button>
        </div>

        {/* Status Code Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Error Code: 403 Forbidden</p>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;